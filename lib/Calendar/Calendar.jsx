import style from "./Calendar.module.scss";

function Calendar() {
  return (
    <div className={`${style.calendar}`}>
      <div className={`${style.selectors}`}>
        <span className={`${style.monthSelector}`}>Janvier</span>
        <span className={`${style.yearSelector}`}>2024</span>
      </div>
      <div className={`${style.days} ${style.grid}`}>
        <div className={`${style.day} ${style.weekday}`}>Lundi</div>
        <div className={`${style.day} ${style.weekday}`}>Mardi</div>
        <div className={`${style.day} ${style.weekday}`}>Mercredi</div>
        <div className={`${style.day} ${style.weekday}`}>Jeudi</div>
        <div className={`${style.day} ${style.weekday}`}>Vendredi</div>
        <div className={`${style.day} ${style.weekday}`}>Samedi</div>
        <div className={`${style.day} ${style.weekday}`}>Dimanche</div>
      </div>
      <div className={`${style.days} ${style.grid}`}>
        <div className={`${style.day}`}>1</div>
        <div className={`${style.day}`}>2</div>
        <div className={`${style.day}`}>3</div>
        <div className={`${style.day}`}>4</div>
        <div className={`${style.day}`}>5</div>
        <div className={`${style.day}`}>6</div>
        <div className={`${style.day}`}>7</div>
      </div>
    </div>
  );
}

export default Calendar;
