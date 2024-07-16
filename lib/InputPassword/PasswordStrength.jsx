import style from "./InputPassword.module.scss";

function PasswordStrength({ validation }) {
  return (
    <div className={`${style.passwordStrength}`}>
      <span className={`${style.strengthLevel} ${style.level0} level0 ${style.visible}`}></span>
      <span className={`${style.strengthLevel} ${style.level1} level1 ${validation >= 1 && style.visible}`}></span>
      <span className={`${style.strengthLevel} ${style.level2} level2 ${validation >= 2 && style.visible}`}></span>
      <span className={`${style.strengthLevel} ${style.level3} level3 ${validation >= 3 && style.visible}`}></span>
    </div>
  );
}

export default PasswordStrength;
