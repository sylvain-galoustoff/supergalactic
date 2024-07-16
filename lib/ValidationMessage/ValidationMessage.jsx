import style from "./ValidationMessage.module.scss";

function ValidationMessage({ type, validation }) {
  const inputTypes = {
    email: {
      success: "Format d'email valide",
      danger: "Format d'email invalide",
    },
    confirm: {
      success: "Mots de passe identiques",
      danger: "Mots de passe différents",
    },
  };

  return (
    <span className={`${style.validationMessage} ${style[validation]} ${validation}`}>
      {inputTypes[type][validation]}
    </span>
  );
}

export default ValidationMessage;
