import React from 'react'
import data from '../clients.json'

class ClientDetails extends React.Component {

  render() {
    const {isOpen} = this.props

    const ClientDetail = data.map((item, index) =>
      <div key={index}>
        <img src={item.general.avatar}/>
        {item.general.firstName + item.general.lastName}
        <div>
          {item.job.title} <br/>
          {item.job.company}
        </div>
        <div>
          {item.contact.email} <br/>
          {item.contact.phone}
        </div>
        <div>
          {item.address.street} <br/>
          {item.address.city} <br/>
          {item.address.zipCode} <br/>
          {item.address.country}
        </div>
      </div>)

    return (
      <div>
        {ClientDetail}

        <div>
          {isOpen ? 'Open' : "Close"}
        </div>
      </div>

    )
  }
}

export default ClientDetails