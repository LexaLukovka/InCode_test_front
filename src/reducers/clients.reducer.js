import clients from '../clients.json'
import {CLIENT_SEARCH, CLIENT_DETAILS} from "../actions/client.action"

const initialState = {
  clients,
  clientDetails: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {

    case CLIENT_SEARCH: {
      const {clients} = state

      let filteredClients = initialState.clients.filter((client) => {
        const name = client.general.firstName + client.general.lastName
        return name.toLowerCase().includes(payload)
      })
      if (payload === "") filteredClients = initialState.clients

      return {
        ...state,
        clients: filteredClients,
      }
    }

    case CLIENT_DETAILS: {
      const {clientDetails} = state
      return {
        ...state,
        clientDetails: clientDetails=== payload ? null : payload
      }
    }

    default: {
      return state;
    }
  }
};