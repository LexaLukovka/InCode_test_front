import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import {Image, List} from "semantic-ui-react"
import clientsReducer from "../reducers/clients.reducer"
import {clientDetails} from "../actions/client.action"

const ClientList = ({clients, dispatch, clientDetails}) =>
  <div>

    {clients.map((client, index) =>
      <List onClick={() => clientDetails(index)} key={index}>
        <List.Item>
          <Image avatar src={client.general.avatar}/>
          <List.Content extra>
            <List.Header as='a'>{client.general.firstName} {client.general.lastName}</List.Header>
            <List.Description >{client.job.title} <br/> {client.job.company}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    )}
  </div>
const mapStateToProps = (store) => {
  return {
    clients: store.clientsReducer.clients,
  }
}
export default connect(mapStateToProps, {clientDetails: clientDetails})(ClientList)