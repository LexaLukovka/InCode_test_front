import React, {Component} from 'react';
import data from './clients.json'
import { Grid, Image } from 'semantic-ui-react'
import Search from "./Components/Search"
import List from "./Components/List"
import Description from "./Components/Description"

// import ClientDetails from "./Components/ClientDetails"

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    openClient: null,
    value: '',
  }

  handleClick(index) {
    this.setState({
      openClient: this.state.openClient === index ? null : index
    })
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <main>
        <Grid.Row>
          <Grid.Column>
            <Search/>
            <List/>
          </Grid.Column>
          <Grid.Column>
            <Description/>
          </Grid.Column>
        </Grid.Row>
      </main>
    )
    const listClient = data.map((item, index) =>
      <div onClick={() => this.handleClick(index)} key={index}>
        <img src={item.general.avatar} style={{width: '50px', height: '50px'}}/>
        {item.general.firstName + item.general.lastName}
        <div>
          {item.job.title}
        </div>
      </div>)

    const ClientDetail = data.map((item, index) =>
      <div key={index}>
        {this.state.openClient === index &&
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
        </div>
        }
      </div>)

    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        {listClient}
        {this.state.openClient + 1 && ClientDetail}

        {/*<ClientDetails/>*/}
      </div>
    );
  }
}

export default App;
