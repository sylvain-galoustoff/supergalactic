import { useState } from "react";
import style from "./ConfirmPassword.module.scss";
import { useEffect } from "react";
import ValidationMessage from "../ValidationMessage/ValidationMessage";

function ConfirmPassword({ label, id, password }) {
  const [inputValue, setInputValue] = useState("");
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    function evaluateConfirm(confirmation) {
      return password === confirmation ? "success" : "danger";
    }

    const confirmValidation = evaluateConfirm(inputValue);
    setValidation(confirmValidation);
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`${style.inputWrapper}`}>
      <label htmlFor={id}>{label}</label>
      <input type="password" className="sg-confirm-password" id={id} onChange={handleChange} value={inputValue} />
      <ValidationMessage type="confirm" validation={validation} />
    </div>
  );
}

export default ConfirmPassword;
