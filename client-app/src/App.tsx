import axios from "axios";
import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  state = {
    values: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then(response => {
      this.setState({
        values: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2" icon>
          <Icon name="users" />
          Reactivities
          <Header.Subheader>
            Manage your account settings and set e-mail preferences.
          </Header.Subheader>
        </Header>
        <List>
          <List.Item>
            {this.state.values.map((value: any) => (
              <li key={value.id} tabIndex={0}>
                {value.name}
              </li>
            ))}
          </List.Item>
        </List>
      </div>
    );
  }
}

export default App;
