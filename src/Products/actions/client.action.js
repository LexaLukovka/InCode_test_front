import clients from '../../clients.json'

export const CLIENT_SEARCH = "CLIENT_SEARCH"
export const CLIENT_DETAILS = "CLIENT_DETAILS"
export const LOAD_CLIENTS = "LOAD_CLIENTS"

export const searchClients = (value) => ({
  type: CLIENT_SEARCH,
  payload: value
})
export const clientDetails = (index) => ({
  type: CLIENT_DETAILS,
  payload: index
})
export const loadClients = () => dispatch => {
  dispatch({
    type: LOAD_CLIENTS + "_PENDING"
  })
  setTimeout(() => dispatch({
    type: LOAD_CLIENTS + "_FULFILLED",
    payload: clients
  }), 500)
}

