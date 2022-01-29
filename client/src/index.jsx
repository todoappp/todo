import React from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import add from './components/added.jsx'
import ListItem from './components/ListItem.jsx';
<style>backgroundColor: #fff;</style>
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view : ListItem
    }
    this.value = this.value.bind(this)
   
  }


  value(event) {
    this.setState({[event.target.name] : [event.target.value]});
    console.log(this.state[event.target.name])
  }  
  senddata(){
    var send= {
      task:this.state.page
    }
    console.log(send)
    axios.post("localhost:3000/api/item/mvp"
    ,send)
    .then((result)=>{
      console.log(result)
    }).catch((err)=>{
      console.log(err)
    })
  }

change = ()=>{
  this.setState({
    view : add
  })
}


  render () {
    return (<div>
      <ListItem  value={this.value.bind(this)} />
      {this.state.view == add ? <add click = {this.change}/>: <ListItem/>}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));