import React from 'react'
import {Input, Menu} from "semantic-ui-react"
import {connect} from 'react-redux'
import {searchClients} from '../actions/client.action'

const Search = ({dispatch, searchClients}) =>

  <Menu.Item>
    <Input focus icon='search' placeholder='Search...' onChange={searchClients}/>
  </Menu.Item>

const mapStateToProps = (store) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchClients: ({target}) => {
      dispatch(searchClients(target.value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)