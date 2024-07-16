import { useState } from "react";
import style from "./InputPassword.module.scss";
import { useEffect } from "react";
import PasswordStrength from "./PasswordStrength";

function InputPassword({ label, id }) {
  const [inputValue, setInputValue] = useState("");
  const [validation, setValidation] = useState("danger");

  useEffect(() => {
    function evaluatePassword(password) {
      if (password.length < 6) {
        return 0;
      } else if (password.length < 8) {
        return 1;
      } else if (password.length < 10) {
        if (/^(?=.*[0-9])(?=.*[a-zA-Z])/.test(password)) {
          return 2;
        } else {
          return 1;
        }
      } else {
        if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~\\-])/.test(password)) {
          return 3;
        } else {
          return 2;
        }
      }
    }

    const mailValidation = evaluatePassword(inputValue);
    setValidation(mailValidation);
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`${style.inputWrapper}`}>
      <label htmlFor={id}>{label}</label>
      <input type="password" className="sg-input-password" id={id} onChange={handleChange} value={inputValue} />
      <PasswordStrength validation={validation} />
    </div>
  );
}

export default InputPassword;
