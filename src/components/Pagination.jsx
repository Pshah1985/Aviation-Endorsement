import './Pagination.css'

function Pagination({ currentPage, totalPages, totalResults, startResult, endResult, onPageChange, onRefresh }) {
  const atFirstPage = currentPage === 1
  const atLastPage = currentPage === totalPages

  const handleInputChange = (event) => {
    const requestedPage = Number(event.target.value)

    if (Number.isNaN(requestedPage) || requestedPage < 1) {
      onPageChange(1)
      return
    }

    if (requestedPage > totalPages) {
      onPageChange(totalPages)
      return
    }

    onPageChange(requestedPage)
  }

  return (
    <div className="pagination-bar">
      <div className="pagination-controls">
        <button type="button" onClick={() => onPageChange(1)} disabled={atFirstPage}>
          |&lt;
        </button>
        <button type="button" onClick={() => onPageChange(currentPage - 1)} disabled={atFirstPage}>
          &lt;
        </button>
        <button type="button" onClick={() => onPageChange(currentPage + 1)} disabled={atLastPage}>
          &gt;
        </button>
        <button type="button" onClick={() => onPageChange(totalPages)} disabled={atLastPage}>
          &gt;|
        </button>

        <span>
          Page{' '}
          <input type="number" min="1" max={totalPages} value={currentPage} onChange={handleInputChange} /> of{' '}
          {totalPages}
        </span>

        <button type="button" onClick={onRefresh} aria-label="Refresh">
          🔄
        </button>
      </div>

      <p>
        {totalResults} results found. Currently showing {startResult} - {endResult}.
      </p>
    </div>
  )
}

export default Pagination
