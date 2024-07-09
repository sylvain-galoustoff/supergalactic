import { useState, useEffect } from "react";
import style from "./DataTable.module.scss";
import PageButton from "./PageButton";
import ColumnName from "./ColumnName";
import TableRow from "./TableRow";

function DataTable({ data, ignore, containerId }) {
  const [columns, setColumns] = useState();
  const [columnCount, setColumnCount] = useState();
  const [searchTerms, setSearchTerms] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [numberOfRows, setNumberOfRows] = useState(10);
  const [paginatedData, setPaginatedData] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (data && data.length > 0) {
      const columnsNames = new Set(Object.keys(data[0]));
      if (ignore) {
        ignore.forEach((name) => {
          columnsNames.delete(name);
        });
      }
      setColumns([...columnsNames]);
      setColumnCount(columnsNames.size);
      setFilteredData(data);
    }
  }, [data]);

  useEffect(() => {
    paginateData();
  }, [filteredData, numberOfRows, currentPage]);

  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
  };

  const handleSort = (criterias) => {
    const { label, direction } = criterias;
    const formatedLabel = label.split(" ").join("").toLowerCase();
    const sortResult = [...filteredData];

    if (direction === "asc") {
      sortResult.sort((a, b) => a[formatedLabel].localeCompare(b[formatedLabel]));
    } else if (direction === "desc") {
      sortResult.sort((a, b) => b[formatedLabel].localeCompare(a[formatedLabel]));
    }
    setFilteredData(sortResult);
  };

  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchTerms(inputValue);

    function findTerms(term) {
      return data.filter((item) => {
        return Object.values(item).some((value) => {
          return value.toString().toLowerCase().includes(term.toLowerCase());
        });
      });
    }

    if (inputValue.length > 0) {
      const searchResult = findTerms(inputValue);
      if (searchResult.length > 0) {
        setFilteredData(searchResult);
      } else {
        setFilteredData(data);
      }
    } else {
      setFilteredData(data);
    }
  };

  const changePagination = (e) => {
    setNumberOfRows(Number(e.target.value));
  };

  const paginateData = () => {
    if (filteredData !== null) {
      const lastRow = currentPage * numberOfRows;
      const firstRow = lastRow - numberOfRows;
      const pageRows = filteredData.slice(firstRow, lastRow);
      setPaginatedData(pageRows);

      const numberOfPages = Math.ceil(data.length / numberOfRows);
      setNumberOfPages(numberOfPages);
    }
  };

  const changePage = (pageNumber) => {
    if (pageNumber === "previous") {
      goPreviousPage();
    } else if (pageNumber === "next") {
      goNextPage();
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const goPreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
    }
  };

  const goNextPage = () => {
    if (currentPage < numberOfPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
    }
  };

  const renderPageButtons = () => {
    const array = [];
    for (let i = 1; i <= numberOfPages; i++) {
      array.push(i);
    }
    const buttons = array.map((button) => (
      <PageButton key={button} pageNumber={button} currentPage={currentPage} changePage={changePage} />
    ));
    return buttons;
  };

  const renderColumnName =
    columns &&
    Array.from(columns).map((column) => <ColumnName key={column} changeSortBy={handleSort} label={column} />);

  const renderRows =
    filteredData &&
    Object.keys(paginatedData).map((key) => (
      <TableRow key={key} data={paginatedData[key]} ignore={ignore} gridTemplateColumns={gridTemplateColumns} />
    ));

  return (
    <div className={`${style.container}`} id={containerId}>
      <div className={`${style.toolbar} toolbar`}>
        <div className={`${style.tool} tool`}>
          <label htmlFor="pagination-select">show</label>
          <select id="pagination-select" onChange={changePagination} value={numberOfRows}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span>entries</span>
        </div>

        <div className={`${style.tool} tool`}>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" value={searchTerms} onChange={handleSearch} />
        </div>
      </div>

      <table className={`${style.table} table`}>
        <thead className={`${style.tableHeader} table-header`}>
          <tr className={`${style.pagination} table-pagination`}>
            <td className={style.td}>
              Showing {numberOfRows} of {data.length} entries
            </td>
            <td className={`${style.td} ${style.paginationLinks}`}>
              <span className={`${style.pageButton} page-button`} onClick={() => changePage("previous")}>
                Previous
              </span>
              <span className={style.navButtons}>{renderPageButtons()}</span>
              <span className={`${style.pageButton} page-button`} onClick={() => changePage("next")}>
                Next
              </span>
            </td>
          </tr>
          <tr className={`${style.tableRow} ${style.columnsName} table-row`} style={gridTemplateColumns}>
            {renderColumnName}
          </tr>
        </thead>
        <tbody className={`${style.tableBody} table-body`}>{filteredData.length > 0 && renderRows}</tbody>
      </table>
    </div>
  );
}

export default DataTable;
