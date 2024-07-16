import { useState } from "react";
import style from "./InputMail.module.scss";
import { useEffect } from "react";
import ValidationMessage from "../ValidationMessage/ValidationMessage";

function InputMail({ label, id }) {
  const [inputValue, setInputValue] = useState("");
  const [validation, setValidation] = useState("danger");

  useEffect(() => {
    function isEmailValid(email) {
      email = email.trim();

      if (email.length <= 3) {
        return false;
      }

      if (email.indexOf("@") === -1) {
        return false;
      }

      if (!/\.[A-Za-z]{2,}$/.test(email)) {
        return false;
      }

      return true;
    }

    const mailValidation = isEmailValid(inputValue) ? "success" : "danger";
    setValidation(mailValidation);
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`${style.inputWrapper}`}>
      <label htmlFor={id}>{label}</label>
      <input type="email" className="sg-input-mail" id={id} onChange={handleChange} value={inputValue} />
      {inputValue.length > 2 && <ValidationMessage validation={validation} type="email" />}
    </div>
  );
}

export default InputMail;
