import React from 'react'
import {connect} from "react-redux"
import {Grid, Card, Image} from 'semantic-ui-react'
import {clientDetails} from "../actions/client.action"
import clientsReducer from "../reducers/clients.reducer"

const Description = ({clients, clientDetails}) =>
  <div>
    {clients.map((client, index) =>
      <Grid centered>
        {clientDetails === index &&

        <Card key={clientDetails}>
          <Image src={client.general.avatar} style={{width:'100%'}}/>

          <Card.Content>

            <Card.Header>
              {client.general.firstName} {client.general.lastName}
            </Card.Header>

            <Card.Description>
              {client.job.title} <br/>
              {client.job.company}
            </Card.Description>

            <Card.Meta>
            <span>
               {client.contact.email} <br/>
              {client.contact.phone}
            </span>
            </Card.Meta>
          </Card.Content>

          <Card.Content extra>
            Country: {client.address.country}<br/>
            City: {client.address.city} <br/>
            Street: {client.address.street} <br/>
            Zip Code:{client.address.zipCode}
          </Card.Content>

        </Card>
        }
      </Grid>
    )}
  </div>

const mapStateToProps = (store) => {
  return {
    clients: store.clientsReducer.clients,
    clientDetails: store.clientsReducer.clientDetails
  }
}
export default connect(mapStateToProps)(Description)
