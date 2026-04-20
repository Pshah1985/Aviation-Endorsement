import { useMemo, useState } from 'react'
import EndorsementFilters from './EndorsementFilters.jsx'
import EndorsementTable from './EndorsementTable.jsx'
import DetailModal from './DetailModal.jsx'
import Pagination from './Pagination.jsx'
import {
  allForms,
  coveragePartPrefixMap,
  coverageParts,
  endorsementCategories,
} from '../data/formData'
import './EndorsementPage.css'

const PAGE_SIZE = 5

function EndorsementPage() {
  const [selectedCoveragePart, setSelectedCoveragePart] = useState('Select')
  const [selectedCategory, setSelectedCategory] = useState('Select')
  const [selectedFormNumber, setSelectedFormNumber] = useState('Select')
  const [rows, setRows] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [detailRow, setDetailRow] = useState(null)

  const filteredForms = useMemo(() => {
    if (selectedCoveragePart === 'Select') {
      return []
    }

    const selectedPrefix = coveragePartPrefixMap[selectedCoveragePart]
    const formsByCoveragePart = selectedPrefix
      ? allForms.filter((form) => form.prefix === selectedPrefix)
      : allForms

    return formsByCoveragePart
  }, [selectedCoveragePart])

  const endorsementSelectionOptions = useMemo(
    () => ['Select', ...filteredForms.map((form) => form.formNumber)],
    [filteredForms],
  )

  const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE))

  const paginatedRows = useMemo(() => {
    const pageStart = (currentPage - 1) * PAGE_SIZE
    return rows.slice(pageStart, pageStart + PAGE_SIZE)
  }, [currentPage, rows])

  const handleCoveragePartChange = (coveragePart) => {
    setSelectedCoveragePart(coveragePart)
    setSelectedCategory('Select')
    setSelectedFormNumber('Select')
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setSelectedFormNumber('Select')
  }

  const handleAddEndorsement = () => {
    const selectedForm = allForms.find((form) => form.formNumber === selectedFormNumber)

    if (!selectedForm) {
      return
    }

    setRows((previousRows) => {
      const nextRows = [
        ...previousRows,
        {
          id: `${selectedForm.formNumber}-${previousRows.length + 1}`,
          formNumber: selectedForm.formNumber,
          formName: selectedForm.formName,
          coveragePart: selectedCoveragePart,
          endorsementCategory: selectedCategory,
          exclusion: selectedCategory === 'Exclusion',
        },
      ]

      setCurrentPage(Math.max(1, Math.ceil(nextRows.length / PAGE_SIZE)))
      return nextRows
    })

    setSelectedFormNumber('Select')
  }

  const handleDelete = (rowId) => {
    const approved = window.confirm('Are you sure you want to delete this endorsement?')
    if (!approved) {
      return
    }

    setRows((previousRows) => {
      const nextRows = previousRows.filter((row) => row.id !== rowId)
      const nextPageCount = Math.max(1, Math.ceil(nextRows.length / PAGE_SIZE))
      setCurrentPage((previousPage) => Math.min(previousPage, nextPageCount))
      return nextRows
    })
  }

  const handleRefresh = () => {
    setRows([])
    setCurrentPage(1)
    setSelectedCoveragePart('Select')
    setSelectedCategory('Select')
    setSelectedFormNumber('Select')
    setDetailRow(null)
  }

  const hasGrid = rows.length > 0
  const showDependentFilters = selectedCoveragePart !== 'Select'

  const startResult = hasGrid ? (currentPage - 1) * PAGE_SIZE + 1 : 0
  const endResult = hasGrid ? startResult + paginatedRows.length - 1 : 0

  return (
    <main className="endorsement-page">
      <header>
        <h1>Endorsement</h1>
        <div className="info-bar" aria-label="Policy Info">
          <span>neeraj Clawback test (Quote - New-Pending)</span>
          <span>QBMP4524734</span>
          <span>Release Version 11:48</span>
        </div>
      </header>

      {hasGrid && (
        <section className="grid-section" aria-label="Endorsements grid">
          <EndorsementTable rows={paginatedRows} onDetail={setDetailRow} onDelete={handleDelete} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalResults={rows.length}
            startResult={startResult}
            endResult={endResult}
            onPageChange={setCurrentPage}
            onRefresh={handleRefresh}
          />
        </section>
      )}

      <EndorsementFilters
        coveragePart={selectedCoveragePart}
        coverageParts={coverageParts}
        onCoveragePartChange={handleCoveragePartChange}
        category={selectedCategory}
        categories={endorsementCategories}
        onCategoryChange={handleCategoryChange}
        endorsementSelection={selectedFormNumber}
        endorsementOptions={endorsementSelectionOptions}
        onEndorsementSelectionChange={setSelectedFormNumber}
        onAddEndorsement={handleAddEndorsement}
        showDependentFilters={showDependentFilters}
      />

      <DetailModal row={detailRow} onClose={() => setDetailRow(null)} />
    </main>
  )
}

export default EndorsementPage
