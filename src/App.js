/* App.js */
//import 
import React from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';


import CanvasJSReact from './assets/canvasjs.react';
//var React = require('react');
var Component = React.Component;
//var CanvasJSReact = require('canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {
	render() {
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
				dataPoints: [
          { x: 5, y: 10 },
          { x: 10, y: 10 },
					{ x: 15, y: 28 },
					{ x: 20, y: 4 },
					{ x: 25, y: 30 },
					{ x: 30, y: 2 },
				]
			}]
    }
    
    const inputProps = {
      step: 5,
    };

		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      <p>It took me approximatley </p>
      <TextField id="number" type="number" inputProps={inputProps} />
      <p> minutes to install this package. </p>
      <Button variant="contained" color="primary"> Add Data Point </Button>
      
      

    </div>
		);
  }
}


export default App; 