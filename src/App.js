
/* App.js */
//import 
import './App.css';
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Comment from './Comment'
import CanvasJSReact from './assets/canvasjs.react';

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
      <Paper style={{padding: 20, backgroundColor: 'lightblue', margin:0, }}>
        <Typography variant="h3" align="center">Download Time</Typography>
        
        {/* <TodoList todos={todos} deleter={deleteTodo}/> */}
        {/* <TodoEntryForm adder={addTodo} /> */}
      </Paper>
    </Container>
    <Typography variant="h6" align="left" > <select>{listItems}</select></Typography>
    </div>
    );
}

//var React = require('react');
var Component = React.Component;
//var CanvasJSReact = require('canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function App() {
    const packages = ["Node.js", "Npm", "Java", "Python3","Mysql"].sort();
  
    const[content, setContent] = useState(""); 
  
    const[dataPoints, setDataPoints] = useState(
      [

        { x: 0, y: 4 },
        { x: 5, y: 10 },
        { x: 10, y: 10 },
        { x: 15, y: 28 },
        { x: 20, y: 4 },
        { x: 25, y: 30 },
        { x: 30, y: 2 },
      ]
    ); 

    const options = {
			animationEnabled: true,
			title:{
				text: "node.js"
			},
			axisX: {
        title: "Time", 
        valueFormatString: "#"
			},
			axisY: {
				title: "Reports",
				includeZero: false
			},
			data: [{
        // yValueFormatString: "$#,###",
        yValueFormatString: "#",
        // xValueFormatString: "MMMM",
        xValueFormatString: "#",
				type: "spline",
				dataPoints: dataPoints
			}]
    }
    
    const inputProps = {
      step: 5,
    };

    function submit(e) {
      e.preventDefault(); 
      const x = +content;
      if (0 > x || x > 30) {
        return; 
      }
      console.log(content); 
      const i = dataPoints.findIndex(p => p.x === x); 
      console.log(i); 

      if (i == -1) {
        return;
      }
      dataPoints[i].y += 1;
      const y = dataPoints[i].y; 
      setDataPoints([...dataPoints]);
    }; 

		return (
		<div>
      <PackageList packages={packages} />
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}

      <div class= "dataGetter">
        <form onSubmit = {submit}>
          <p>It took me approximatley </p>
          <TextField id="time" type="number" inputProps={inputProps} onChange={e => setContent(e.target.value)} />
          <p> minutes to install this package. </p>
          <Button type= "submit" variant="contained" color="primary"> ADD DATA POINT </Button>
        </form>
      </div>

      <Comment/>
      

    </div>
		);
}


export default App; 
