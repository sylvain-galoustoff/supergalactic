import { IoCaretDown, IoCaretUp } from "react-icons/io5";
import style from "./DataTable.module.scss";

function ColumnName({ label, changeSortBy }) {
  const handleSortBy = (direction) => {
    changeSortBy({ label, direction });
  };

  return (
    <th className={`${style.th} column-name`}>
      <span className={style.sortButtons}>
        <IoCaretUp onClick={() => handleSortBy("asc")} />
        <IoCaretDown onClick={() => handleSortBy("desc")} />
      </span>
      <span className={`${style.columnLabel} column-label`}>{label}</span>
    </th>
  );
}

export default ColumnName;
