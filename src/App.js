import React, {Component} from 'react';
import {Grid, Menu, Segment} from 'semantic-ui-react'
import Search from "./Components/Search"
import List from "./Components/List"
import Description from "./Components/Description"

class App extends Component {
  render() {
    return (
      <main>
        <Grid>
          <Grid.Column width={4} style={{height: '95vh', overflowY: 'auto'}}>
            <Menu fluid vertical tabular>
              <Search/>
              <List/>
            </Menu>
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

export default App;