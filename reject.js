import filter from './filter'

const reject = (p) => filter (x => !p(x))

export default reject
