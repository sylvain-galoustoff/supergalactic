import { useState } from "react";
import style from "./Calendar.module.scss";

function Calendar() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth().toString());
  const [year, setYear] = useState(today.getFullYear().toString());

  const changeMonth = (e) => {
    setMonth(e.target.value.toString());
  };

  const changeYear = (e) => {
    setYear(e.target.value.toString());
  };

  return (
    <div className={`${style.calendar}`}>
      <div className={`${style.selectors}`}>
        <select className={`${style.monthSelector}`} value={month} onChange={changeMonth}>
          <option value="0">Janvier</option>
          <option value="1">Février</option>
          <option value="2">Mars</option>
          <option value="3">Avril</option>
          <option value="4">Mai</option>
          <option value="5">Juin</option>
          <option value="6">Juillet</option>
          <option value="7">Août</option>
          <option value="8">Septembre</option>
          <option value="9">Octobre</option>
          <option value="10">Novembre</option>
          <option value="11">Décembre</option>
        </select>
        <input type="number" step="1" className={`${style.yearSelector}`} value={year} onChange={changeYear} />
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
