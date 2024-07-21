import style from "./Calendar.module.scss";
import { useEffect, useState } from "react";
import { getDaysInMonth } from "date-fns";
import { getOffsetDays } from "./dates";
import Cell from "./Cell";

function Calendar({ callback }) {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth().toString());
  const [year, setYear] = useState(today.getFullYear().toString());
  const [offsetDays, setOffsetDays] = useState(getOffsetDays(today));
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(today));

  useEffect(() => {
    const newDate = new Date(year, month);
    setOffsetDays(getOffsetDays(newDate));
    setDaysInMonth(getDaysInMonth(newDate));
  }, [month, year]);

  const changeMonth = (e) => {
    setMonth(e.target.value.toString());
  };

  const changeYear = (e) => {
    setYear(e.target.value.toString());
  };

  const handleDate = (dateObj) => {
    if (callback) {
      callback(dateObj);
    }
  };

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      let newMonth = Number(month) - 1;
      if (newMonth < 0) {
        newMonth = 11;
        const newYear = Number(year) - 1;
        setYear(newYear.toString());
      }
      setMonth(newMonth.toString());
    } else {
      let newMonth = Number(month) + 1;
      if (newMonth > 11) {
        newMonth = 0;
        const newYear = Number(year) + 1;
        setYear(newYear.toString());
      }
      setMonth(newMonth.toString());
    }
  };

  const renderOffsetCells = Array.from({ length: offsetDays }, (_, index) => (
    <Cell key={index} month={month} year={year}>
      {index + 1}
    </Cell>
  ));

  const renderCells = Array.from({ length: daysInMonth }, (_, index) => (
    <Cell key={index + offsetDays} day={index + 1} month={month} year={year} callback={handleDate}>
      {index + 1}
    </Cell>
  ));

  return (
    <div className={`${style.calendar}`}>
      <div className={`${style.selectors} selectors`}>
        <div className={`${style.monthSelector} month-selector`}>
          <select className={`month-input`} value={month} onChange={changeMonth}>
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
        </div>
        <div className={`${style.yearSelector} year-selector`}>
          <input className={`year-input`} type="number" step="1" value={year} onChange={changeYear} />
        </div>
      </div>
      <div className={`${style.grid} days-of-week`}>
        <div className={`${style.day} week-day`}>Lundi</div>
        <div className={`${style.day} week-day`}>Mardi</div>
        <div className={`${style.day} week-day`}>Mercredi</div>
        <div className={`${style.day} week-day`}>Jeudi</div>
        <div className={`${style.day} week-day`}>Vendredi</div>
        <div className={`${style.day} week-day`}>Samedi</div>
        <div className={`${style.day} week-day`}>Dimanche</div>
      </div>
      <div className={`${style.grid} days`} onWheel={handleWheel}>
        {offsetDays > 0 && renderOffsetCells}
        {renderCells}
      </div>
    </div>
  );
}

export default Calendar;
