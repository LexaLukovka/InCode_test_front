import React, {Component} from 'react';
import {Grid, Menu, Segment} from 'semantic-ui-react'
import Search from "./Components/Search"
import List from "./Components/List"
import Description from "./Components/Description"
import {connect} from "react-redux"
import {loadClients} from "./Redux/actions/client.action"

class App extends Component {

  componentDidMount() {
    this.props.loadClients()
  }

  render() {
    if (this.props.loading) return <div>Loading</div>
    return (
      <main>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical style={{margin: 0, borderRadius: 0}}>
              <Search/>
            </Menu>
            <div className="List">
              <Menu fluid vertical tabular>
                <List/>
              </Menu>
            </div>
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <Segment>
              <Description/>
            </Segment>
          </Grid.Column>
        </Grid>
      </main>
    )
  }
}

const mapStateToProps = (store) => {
  return {}
}

const mapDispatchToProps = () => (dispatch) => ({
  loadClients: () => dispatch(loadClients())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)