import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css'
import { Component } from "react";
// import { useEffect, useState } from "react";


// // const { Component } = require("react");


// const App = ()=>{

//   console.log('render');
//   const [searchText , setSearchText] = useState('')
//   const [monsters , setMonsters] = useState([])
//   const [filteredMonsters , setFilteredMonsters] = useState(monsters)


//   const onSearchChange = (event)=>{
//     const searchTextString = event.target.value.toLowerCase() 
//     setSearchText(searchTextString)
//   }

//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(users => setMonsters(users))
//   } , [])

//   useEffect(()=>{
//     const filteredArray = monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchText.toLowerCase())
//     })
//     setFilteredMonsters(filteredArray)
//   } , [searchText , monsters ])


//   return (
//     <div className="App" >
//       <h1 className="app-title" >Monsters Roledex</h1>
//       <SearchBox onChangeHandler={onSearchChange} placeholder='search' className='search-box' />
//       <CardList monsters={filteredMonsters} />
//     </div>
//   )
// }


class App extends Component {
 

  constructor(){
    super()
    console.log('constructor')
    this.state = {
      monsters : [] , 
      searchText : ''
    }
  }

  

  componentDidMount(){
    console.log('componentdidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => this.setState(
       ()=> {
        return {
          monsters : users
        }
       } , 
       ()=> {
        console.log(this.state.monsters)
       }
    ) )
  }

  onSearchChange = (event)=> {
    this.setState(()=> {
      return {
      searchText : event.target.value
     }
    })
  }

  render(){
    console.log('render aajs')

    const {onSearchChange} = this
    const {monsters , searchText} = this.state

    const filteredArray = monsters.filter((monster)=> {
      return monster.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
      <div className="App">
          <SearchBox onChangeHandler={onSearchChange} placeholder='search' className='search-box' />
          <CardList monsters={filteredArray} />
      </div>
    )
    }
}

export default App