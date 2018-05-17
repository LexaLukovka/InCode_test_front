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

      let filteredClients = clients.filter((client) => {
        const name = client.general.firstName + client.general.lastName
        // name.search(payload) !== -1 ?
        return name.search(payload) !== -1
      })
      if (payload === "") filteredClients = initialState.clients
      return {
        ...state,
        clients: filteredClients,
      }
    }

    case CLIENT_DETAILS: {
      const {clients, clientDetails} = state

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