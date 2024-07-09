function PageButton({ pageNumber, currentPage, changePage }) {
  const handleChangePage = () => {
    changePage(pageNumber);
  };

  return (
    <p className={`page-button ${pageNumber === currentPage ? "active" : null}`} onClick={handleChangePage}>
      {pageNumber}
    </p>
  );
}

export default PageButton;
