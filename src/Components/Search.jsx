import React from 'react'
import {Grid, Input} from "semantic-ui-react"
import {connect} from 'react-redux'
import {searchClients} from '../actions/client.action'

const Search = ({dispatch, searchClients}) =>
  <Grid centered>
    <Input focus placeholder='Search...' onChange={searchClients}/>
  </Grid>

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