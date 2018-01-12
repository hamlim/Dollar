const DOLLAR_LOCAL_KEY = 'dollar-state'

export default state => {
  const prev = localStorage.getItem(DOLLAR_LOCAL_KEY)
  if (prev) {
    const currentData = JSON.parse(prev)
    localStorage.setItem(DOLLAR_LOCAL_KEY, JSON.stringify({ ...currentData, state }))
  } else {
    localStorage.setItem(DOLLAR_LOCAL_KEY, JSON.stringify(state))
  }
}
