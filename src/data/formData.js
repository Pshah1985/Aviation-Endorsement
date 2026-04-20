export const coverageParts = [
  'Select',
  'Aircraft Coverage',
  'Aircraft Platinum Coverage',
  'Aviation General Liability Coverage',
  'Manuscript Coverage',
  'View All',
]

export const endorsementCategories = ['Select', 'View All', 'Exclusion']

export const allForms = [
  { formNumber: 'AVA0001', formName: 'Aircraft Hull Coverage Form', prefix: 'AVA' },
  { formNumber: 'AVA0002', formName: 'Aircraft Liability Coverage Form', prefix: 'AVA' },
  { formNumber: 'AVP0001', formName: 'Platinum Hull Coverage Form', prefix: 'AVP' },
  { formNumber: 'AVP0002', formName: 'Platinum Liability Coverage Form', prefix: 'AVP' },
  { formNumber: 'AVG0001', formName: 'General Liability Basic Form', prefix: 'AVG' },
  { formNumber: 'AVG0002', formName: 'General Liability Umbrella Form', prefix: 'AVG' },
  { formNumber: 'AVM0001', formName: 'Manuscript Custom Coverage Form', prefix: 'AVM' },
  { formNumber: 'AVM0002', formName: 'Manuscript Endorsement Extension Form', prefix: 'AVM' },
]

export const coveragePartPrefixMap = {
  'Aircraft Coverage': 'AVA',
  'Aircraft Platinum Coverage': 'AVP',
  'Aviation General Liability Coverage': 'AVG',
  'Manuscript Coverage': 'AVM',
  'View All': null,
}
