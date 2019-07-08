import filter from './filter'

const compact = filter (x => x !== null && x !== undefined)

export default compact
