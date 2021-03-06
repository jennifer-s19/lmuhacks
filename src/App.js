/* App.js */
//imports
import './App.css';
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Comments from './Comments'
import CanvasJSReact from './assets/canvasjs.react';
import CommentEntryForm from './CommentEntryForm';

function PackageList(props) {
  const packages = props.packages;
  const listItems = packages.map((packages) => 
    <option>
    {packages}
    </option> 
    );
  return (
    <div>   
      <div className="header">
        
        {/* <Container style={{marginTop: 20}}>
  
          <Paper style={{padding: 20, backgroundColor: 'mediumslateblue', margin:0, }}>
            <Typography variant="h3" align="center">Download Time</Typography>
          </Paper>
        </Container> */}
        
      </div>
      <div className="dropdown">
        <InputLabel id="label">Package</InputLabel>
        <Select labelId="label" id="select" value={props.pack} onChange={(e) => props.setPack(e.target.value)}>
          <MenuItem value="Node">Node</MenuItem>
          <MenuItem value="Java">Java</MenuItem>
          <MenuItem value="MySQL">MySQL</MenuItem>
          <MenuItem value="Python3">Python3</MenuItem>
        </Select>
      </div>
    </div>
    );
}

var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function MyChart(props) {
  const options = {
    animationEnabled: true,
    title:{
      text: props.pack
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
      yValueFormatString: "#",
      xValueFormatString: "#",
      type: "spline",
      dataPoints: props.data
    }]
  }
  return (<CanvasJSChart options = {options}/>)
}

function App() {
    const packages = ["Node.js", "Npm", "Java", "Python3","Mysql"].sort();
    const[content, setContent] = useState(""); 
    const[pack, setPack] = useState("Node");
    //Here's our initial comment: 
    const[comments, setComments] = useState(["npm install node has taken me a really long time to download in the past ... anyone have any suggestions for speeding it up?",
      "I've found that yarn install or pnpm install works a LOT faster than npm install",
      "you can also try npm install --prefer-offline --no-audit. usually that works faster for me just npm install"]);
    //data points for the graph 
    const[dataPoints, setDataPoints] = useState({
      "Node":[
        { x: 0, y: 4 },
        { x: 5, y: 10 },
        { x: 10, y: 10 },
        { x: 15, y: 28 },
        { x: 20, y: 4 },
        { x: 25, y: 30 },
        { x: 30, y: 2 },
      ],
      "Java":[
        { x: 0, y: 20 },
        { x: 5, y: 40 },
        { x: 10, y: 4 },
        { x: 15, y: 3 },
        { x: 20, y: 2 },
        { x: 25, y: 0 },
        { x: 30, y: 0 },
      ],
      "MySQL":[
        { x: 0, y: 3 },
        { x: 5, y: 8 },
        { x: 10, y: 4 },
        { x: 15, y: 3 },
        { x: 20, y: 20 },
        { x: 25, y: 19 },
        { x: 30, y: 31 },
      ],
      "Python3":[
        { x: 0, y: 2 },
        { x: 5, y: 4 },
        { x: 10, y: 40 },
        { x: 15, y: 28 },
        { x: 20, y: 14 },
        { x: 25, y: 2 },
        { x: 30, y: 1 },
      ]
    }
); 
    
    const inputProps = {
      step: 5,
    };

    function submit(e) {
      e.preventDefault(); 
      const x = +content;
      if (0 > x || x > 30) {
        return; 
      }
      // console.log(content); 

      const data = dataPoints[pack];

      const i = data.findIndex(p => p.x === x); 
      console.log(i); 

      if (i == -1) {
        return;
      }
      data[i].y += 1;
      const y = dataPoints[pack][i].y; 
      setDataPoints({... dataPoints}); //dataPoints.copy()
    }; 

    function addComment(comment) {
      setComments(comments => [...comments, comment]);
    }

		return (
	
    
    <div>

    <Container maxWidth={false}>
      <Typography id="title" variant="h2" align="center">Installation Time</Typography>
    </Container>

      <PackageList packages={packages} pack={pack} setPack={setPack}/>
      <MyChart data={dataPoints[pack]} pack={pack}/>
			{/* <CanvasJSChart options = {options}/> */}
      <div className= "dataGetter">
        <form className ="form" onSubmit = {submit}>
          <p id="leftText">It took me approximatley </p>
          <TextField id="time" type="number" inputProps={inputProps} onChange={e => setContent(e.target.value)} />
          <p id="rightText"> minutes to install this package. </p>
          <Button type= "submit" variant="contained" color="primary"> ADD DATA POINT </Button>
        </form>
      </div>
      <CommentEntryForm adder={addComment}/>
      <Comments comments={comments}/> 
    </div>
		);
}

export default App; 