// import {Component} from "react";
import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component";

import {useState, useEffect} from "react";

const App = () =>{
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [title, setTitle] = useState("");
  const[monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("rendered")


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  }, []); //call fetch method only when app mounts, dependency array is blank, only called on-mount, empty array is a dependecy array.  No dependencies, therefore nothing is going to change unless app mounts.

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setFilteredMonsters(newFilteredMonsters);

  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange = (event) => {
    const titleFieldString = event.target.value.toLocaleLowerCase();
    setTitle(titleFieldString);
  }

  // const filteredMonsters = monsters.filter((monster) => {
  //    return monster.name.toLocaleLowerCase().includes(searchField) ;
  // })

  return(
    <div className="App">
      <h1 className= "app-title">Monsters Rolodex</h1>

    <SearchBox 
      className= "monsters-search-box"
      onChangeHandler= {onSearchChange} 
      placeholder = "search monsters"
    />

    <br />

{/* <SearchBox 
      className= "title-search-box"
      onChangeHandler= {onTitleChange} 
      placeholder = "set title"
    />
    */}
    <CardList monsters= {filteredMonsters}/>

    </div>
    )

}

  // class App extends Component {

  //   constructor(){
  //     super();
  //     this.state = { 
  //       monsters: [],
  //       searchField: ""
  //     };
  //   }

  //   onSearchChange = (event) => {
  //     const searchField = event.target.value.toLocaleLowerCase();
  //     this.setState(() => {
  //       return {searchField: searchField};
  //     });
  //   }
  
  //   componentDidMount(){
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then( (response) =>  response.json())
  //       .then( (users) => this.setState(()=> {
  //         return {monsters: users}
  //       }, 
  //       () => {
  //         console.log(this.state);
  //       }
  //       ))
  //   }
  
  //   render(){
  //   // console.log("render from app list")
  //   const {monsters, searchField} = this.state;
  //   const {onSearchChange} = this;

  
  //     const filteredMonsters = monsters.filter((monster)=> {
  //       return(
  //         monster.name.toLocaleLowerCase().includes(searchField)
  //       )
  //     })  
  
  //     return (
  //       <div className="App">
  //         <h1 className= "app-title">Monsters Rolodex</h1>

  //         <SearchBox 
  //         className= "monsters-search-box"
  //         onChangeHandler= {onSearchChange} 
  //         placeholder = "search monsters"/>
  //         <CardList monsters= {filteredMonsters}/>


  //       </div>
  //     )
  //   }
  // }


export default App

  //   return(
  //     <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
  //       </p>
  //       <button onClick={() => {
  //         this.setState(() => {
  //           return {
  //           name: {firstName: "brian", lastName: "is a nice person"}
  //         };
  //       },
  //         ()=> {
  //           console.log(this.state)
  //         });
      
  //   }}> Change Name

        
  //       </button>
  //     </header>
  //   </div>
  //   )
  // }


