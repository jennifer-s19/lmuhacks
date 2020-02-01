/* App.js */
import React from 'react';
import logo from './logo.svg';
import './App.css';

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
				text: "Monthly Sales - 2017"
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "Sales (in USD)",
				prefix: "$",
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
					{ x: 20, y: 28 },
					{ x: 30, y: 4 },
					{ x: 40, y: 30 },
					{ x: 50, y: 2 },
					{ x: 60, y: 1 },
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default App; 







// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App; 