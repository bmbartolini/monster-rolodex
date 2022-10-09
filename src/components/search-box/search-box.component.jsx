import {Component} from "react";

import "./search-box.styles.css"

const SearchBox = ({className, placeholder, onChangeHandler}) => {

    return(
        <input 
            className= {`search-box ${className}`}
            placeholder={placeholder}
            type= "search"
            onChange = {onChangeHandler}
        />
    )
}


// class SearchBox extends Component{
//     render(){

//         return(
//             <input 
//                 className= {`search-box ${this.props.className}`}
//                 placeholder= {this.props.placeholder} 
//                 type="search" 
//                 onChange= {this.props.onChangeHandler} 
//             />

//         )
//     }

// }

export default SearchBox