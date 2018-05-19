import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import {Menu, Item} from "semantic-ui-react"
import {clientDetails} from "../Products/actions/client.action"

class ClientList extends React.Component {
  state = {activeItem: null}

  handleItemClick = (e, {names}) =>
    this.setState({activeItem: this.state.activeItem === names ? null : names},
    )

  render() {
    const {filteredClients, clientDetails} = this.props
    const {activeItem} = this.state
    return (
      <div>
        {filteredClients.map((client, index) =>
          <div key={index} onClick={() => clientDetails(index)}>
            <Menu.Item
              names={index}
              active={activeItem === index}
              onClick={this.handleItemClick}>
              <Item.Group>
                <Item key={index}>
                  <Item.Image size="tiny" avatar src={client.general.avatar}
                              style={{float: 'left', marginRight: '15px'}}/>
                  <Item.Content style={{marginTop: '15px'}}>
                    <Item.Header>{client.general.firstName} {client.general.lastName}</Item.Header>
                    <Item.Meta> {client.job.title} </Item.Meta>
                    <Item.Extra>{client.job.company}</Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Menu.Item>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    filteredClients: store.clientsReducer.filteredClients,
  }
}

const mapDispatchTopProps = (dispatch) => {
  return {
    clientDetails: (index) => dispatch(clientDetails(index))
  }
}
ClientList.propTypes = {
  filteredClients: PropTypes.array,
  index: PropTypes.number,
  client: PropTypes.object,
  activeItem: PropTypes.number,
  clientDetails: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchTopProps)(ClientList)