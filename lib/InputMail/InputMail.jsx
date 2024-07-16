import { useState } from "react";
import style from "./InputMail.module.scss";
import { useEffect } from "react";
import ValidationMessage from "../ValidationMessage/ValidationMessage";

function InputMail({ label, id }) {
  const [inputValue, setInputValue] = useState("");
  const [validation, setValidation] = useState("danger");

  useEffect(() => {
    function isEmailValid(email) {
      // Supprimer les espaces avant et après l'adresse email
      email = email.trim();

      // Vérifier la longueur minimale
      if (email.length <= 3) {
        return false;
      }

      // Vérifier la présence du caractère @
      if (email.indexOf("@") === -1) {
        return false;
      }

      // Vérifier si l'adresse se termine par .[extension]
      if (!/\.[A-Za-z]{2,}$/.test(email)) {
        return false;
      }

      // Si toutes les conditions sont vérifiées, retourner true
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
