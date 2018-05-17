import clients from '../clients.json'
import {CLIENT_SEARCH} from "../actions/client.action"

const initialState = {
  clients
};

export default (state = initialState, {type, payload}) => {
  switch (type) {

    case CLIENT_SEARCH: {
      const {clients} = state

      let filteredClients = clients.filter((client) => {
        const name = client.general.firstName + client.general.lastName
        return name.search(payload) !== -1
      })
      if (payload === "") filteredClients = initialState.clients
      return {
        ...state,
        clients: filteredClients,
      }
    }

    default: {
      return state;
    }
  }
};