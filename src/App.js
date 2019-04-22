import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state={
    items:[],
    item: '',
    id: uuid(),
    editItem: false
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];

this.setState({
  items:updatedItems, // replacing items with updatedItems array
  item: '', // erase item entry field for new item
  id:uuid(), // reset id for new item
  editItem: false
})

  };
  clearList = () => {
    console.log('clear list')
  };
  handleDelete = (id) => {
    console.log(`handle edit ${id}`)
  };
  handleEdit = (id) => {
    console.log(`edit edit ${id}`)
  };
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-5">
        <h3 className="text-capitalize text-center">
          ToDo Input
        </h3>
        <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
        />
        <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
        />
      </div>
      </div>
      </div>
    );
  }
}

export default App;
