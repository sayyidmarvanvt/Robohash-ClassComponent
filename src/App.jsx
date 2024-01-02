import { Component } from "react"
import Card from "./components/Card"
import "./App.css"
import Search from "./components/Search";

class App extends Component{
  constructor(){
    super(),
    this.state={
      people:[],
      previous:[]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((result)=>this.setState(()=>{return{people:result,previous:result}}))
    }

  

 render(){
  const onChange =((event)=>{
    const searchString=event.target.value.toLocaleLowerCase()
    const filteredData=this.state.people.filter((people)=>{return people.name.toLocaleLowerCase().includes(searchString)
    })
      this.setState(()=>{return {previous:filteredData}})
  })
  

  return(
    <div>
    <h1>ROBO <span>HASH</span></h1>
    <Search onChange={onChange}/>
    <Card previous={this.state.previous}/>
    </div>

  )
 }


}
export default App
