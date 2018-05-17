export const CLIENT_SEARCH = "CLIENT_SEARCH"
export const CLIENT_DETAILS = "CLIENT_DETAILS"

export const searchClients = (value) => ({
  type: CLIENT_SEARCH,
  payload: value
})
export const clientDetails = (index) => ({
  type: CLIENT_DETAILS,
  payload: index
})