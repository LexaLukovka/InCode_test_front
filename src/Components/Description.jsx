import React from 'react'
import {connect} from "react-redux"
import {Item} from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Description = ({filteredClients, clientDetails}) =>
  <div className="MarginBlock">
    {filteredClients.map((client, index) =>
      <div key={index}>
        {clientDetails === index &&
        <Item.Group key={clientDetails}>
          <Item>
            <Item.Image src={client.general.avatar} style={{width: 'auto'}}/>
            <Item.Content>
              <Item.Header>{client.general.firstName} {client.general.lastName} </Item.Header>
              <Item.Meta> {client.job.title} </Item.Meta>
              <Item.Meta>{client.job.company} </Item.Meta>
              <Item.Meta>{client.contact.email} </Item.Meta>
              <Item.Meta>{client.contact.phone}</Item.Meta>
              <Item.Extra>
                <div>Country: {client.address.country}</div>
                <div> City: {client.address.city}</div>
                <div>Street: {client.address.street}</div>
                <div>Zip Code: {client.address.zipCode}</div>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        }
      </div>
    )}
  </div>

const mapStateToProps = (store) => {
  return {
    filteredClients: store.clientsReducer.filteredClients,
    clientDetails: store.clientsReducer.clientDetails
  }
}
Description.propTypes = {
  filteredClients: PropTypes.array,
  index: PropTypes.number,
  client: PropTypes.object,
  clientDetails: PropTypes.number
}
export default connect(mapStateToProps)(Description)
