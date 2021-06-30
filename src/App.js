import React, { Component } from 'react';
import Input from './components/input.js'
import Main from './components/base.js'
import 'bootstrap/dist/css/bootstrap.min.css';
//import * as ReactBootstrap from "react-bootstrap";
class App extends Component {
  state = {}
  render() {
    return (
      <div className="text-center">

      <div className="card">
        <h1 className="display-1">ToDoList</h1>
          <br>
          </br>
        <form className="form-group">
          <br>
          </br>
        </form>

        <Input />

        <Main />
        </div>
      </div>

    );
  }

}

export default App;
