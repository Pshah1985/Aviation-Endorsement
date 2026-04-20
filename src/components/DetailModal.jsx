import './DetailModal.css'

function DetailModal({ row, onClose }) {
  if (!row) {
    return null
  }

  return (
    <div className="detail-modal-overlay" role="presentation" onClick={onClose}>
      <div
        className="detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="detail-modal-title">Endorsement Detail</h2>
        <dl>
          <div>
            <dt>Form Number</dt>
            <dd>{row.formNumber}</dd>
          </div>
          <div>
            <dt>Form Name</dt>
            <dd>{row.formName}</dd>
          </div>
          <div>
            <dt>Coverage Part</dt>
            <dd>{row.coveragePart}</dd>
          </div>
          <div>
            <dt>Endorsement Category</dt>
            <dd>{row.endorsementCategory}</dd>
          </div>
          <div>
            <dt>Exclusion</dt>
            <dd>{row.exclusion ? 'X' : 'No'}</dd>
          </div>
        </dl>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default DetailModal
