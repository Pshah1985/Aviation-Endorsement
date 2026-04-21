import './EndorsementTable.css'

function EndorsementTable({ rows, onDetail, onDelete }) {
  return (
    <table className="endorsement-table">
      <thead>
        <tr>
          <th>Form Number</th>
          <th>Form Name</th>
          <th>Coverage Part</th>
          <th>Aircraft Association</th>
          <th>Exclusion</th>
          <th>Detail</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.formNumber}</td>
            <td>{row.formName}</td>
            <td>{row.coveragePart}</td>
            <td>{row.aircraftAssociation || ''}</td>
            <td>{row.exclusion ? 'X' : ''}</td>
            <td>
              <button type="button" className="table-link" onClick={() => onDetail(row)}>
                Detail
              </button>
            </td>
            <td>
              <button type="button" className="table-link" onClick={() => onDelete(row.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default EndorsementTable
