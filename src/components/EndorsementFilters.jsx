import './EndorsementFilters.css'

function EndorsementFilters({
  coveragePart,
  coverageParts,
  onCoveragePartChange,
  category,
  categories,
  onCategoryChange,
  endorsementSelection,
  endorsementOptions,
  onEndorsementSelectionChange,
  onAddEndorsement,
  showDependentFilters,
}) {
  return (
    <section className="endorsement-filters" aria-label="Endorsement filters">
      <div className="filter-row">
        <label htmlFor="coverage-part">Coverage Part Selection</label>
        <select
          id="coverage-part"
          value={coveragePart}
          onChange={(event) => onCoveragePartChange(event.target.value)}
        >
          {coverageParts.map((part) => (
            <option key={part} value={part}>
              {part}
            </option>
          ))}
        </select>
      </div>

      {showDependentFilters && (
        <>
          <div className="filter-row">
            <label htmlFor="endorsement-category">Endorsement Category</label>
            <select
              id="endorsement-category"
              value={category}
              onChange={(event) => onCategoryChange(event.target.value)}
            >
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-row">
            <label htmlFor="endorsement-selection">Endorsement Selection</label>
            <select
              id="endorsement-selection"
              value={endorsementSelection}
              onChange={(event) => onEndorsementSelectionChange(event.target.value)}
            >
              {endorsementOptions.map((form) => (
                <option key={form} value={form}>
                  {form}
                </option>
              ))}
            </select>
          </div>

          {endorsementSelection !== 'Select' && (
            <div className="filter-actions">
              <button type="button" onClick={onAddEndorsement}>
                Add Endorsement
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default EndorsementFilters
