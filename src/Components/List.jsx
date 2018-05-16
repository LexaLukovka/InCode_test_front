import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import {Image, List} from "semantic-ui-react"
import clientsReducer from "../reducers/clients.reducer"

const ClientList = ({clients}) =>
  <div>
    <List >
      {clients.map((client, index) =>
        <List.Item key={index}>
          <Image avatar src={client.general.avatar}/>
          <List.Content>
            <List.Header as='a'>{client.general.firstName} {client.general.lastName}</List.Header>
            <List.Description>{client.job.title} <br/> {client.job.company}</List.Description>
          </List.Content>
        </List.Item>
      )}
    </List>
  </div>
const mapStateToProps = (store) => {
  return {
    clients: store.clientsReducer.clients
  }
}
export default connect(mapStateToProps)(ClientList)