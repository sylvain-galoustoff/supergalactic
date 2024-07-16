import style from "./ValidationMessage.module.scss";

function ValidationMessage({ type, validation }) {
  const inputTypes = {
    email: {
      success: "Format d'email valide",
      danger: "Format d'email invalide",
    },
  };

  return (
    <span className={`${style.validationMessage} ${style[validation]} ${validation}`}>
      {inputTypes[type][validation]}
    </span>
  );
}

export default ValidationMessage;
