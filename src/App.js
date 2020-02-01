import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
// import TodoList from './TodoList'
// import TodoEntryForm from './TodoEntryForm';


function PackageList(props) {
  const packages = props.packages;
  const listItems = packages.map((packages) => 
    <option>
    {packages}
    </option> 
    );
  return (
    <div> 
    <Container style={{marginTop: 20}}>
      <Paper style={{padding: 20, backgroundColor: '#fffff3', margin:0, }}>
        <Typography variant="h3" align="center">time dream</Typography>
        
        {/* <TodoList todos={todos} deleter={deleteTodo}/> */}
        {/* <TodoEntryForm adder={addTodo} /> */}
      </Paper>
    </Container>
    <Typography variant="h6" align="left" > <select>{listItems}</select></Typography>
    </div>
    );
}


export default function App() {
  const packages = ["node.js", "npm"];
  return (
    <PackageList packages={packages} />
    );
}