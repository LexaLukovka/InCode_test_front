import {CLIENT_SEARCH, CLIENT_DETAILS, LOAD_CLIENTS} from "../actions/client.action"

const initialState = {
  loading: false,
  clients: [],
  filteredClients: [],
  clientDetails: null,
}

export default (state = initialState, {type, payload}) => {
  switch (type) {

    case CLIENT_SEARCH: {
      const {clients} = state

      let filteredClients = clients.filter((client) => {
        const name = client.general.firstName + client.general.lastName
        return name.toLowerCase().includes(payload)
      })
      if (payload === "") filteredClients = clients

      return {
        ...state,
        filteredClients
      }
    }

    case CLIENT_DETAILS: {
      const {clientDetails} = state
      return {
        ...state,
        clientDetails: clientDetails === payload ? null : payload
      }
    }

    case LOAD_CLIENTS + "_PENDING": {
      return {
        ...state,
        loading: true
      }
    }

    case LOAD_CLIENTS + "_FULFILLED": {
      return {
        ...state,
        clients: payload,
        filteredClients: payload
      }
    }

    default: {
      return state;
    }
  }
}