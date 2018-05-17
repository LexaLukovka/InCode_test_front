import React from 'react'
import {connect} from "react-redux"
import {Card, Image} from 'semantic-ui-react'

const Description = ({clients}) =>
  <div>
    {clients.map((client, index) =>
      <Card key={index}>
        <Image src={client.general.avatar}/>
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
          {client.address.street} <br/>
          {client.address.city} <br/>
          {client.address.zipCode} <br/>
          {client.address.country}
        </Card.Content>
      </Card>
    )}
  </div>

const mapStateToProps = (store) => {
  return {
    clients: store.clientsReducer.clients
  }
}
export default connect(mapStateToProps)(Description)
