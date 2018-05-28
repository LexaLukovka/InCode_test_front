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
        const allInfo = client.general.firstName + ' ' + client.general.lastName + ' ' + client.job.title + ' ' + client.job.company
          + ' ' + client.contact.email + ' ' + client.contact.phone + ' ' + client.address.country + ' ' + client.address.city + ' ' + client.address.street + ' ' + client.address.zipCode

        return allInfo.toLowerCase().includes(payload.toLowerCase())
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