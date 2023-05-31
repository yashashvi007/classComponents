import { Component } from "react";
import './search-box.css'

const SearchBox = ({placeholder , className , onChangeHandler})=>{
    console.log('asadasd');
    return (
        <input 
          className={`search-box ${className}`}
          type='search' 
          placeholder={placeholder}
          onChange={onChangeHandler} 
          />
      )
}

// class SearchBox extends Component {
//     render(){
//         const {onChangeHandler , className , placeholder} = this.props
//         return (
//           <input 
//             className={`search-box ${className}`}
//             type='search' 
//             placeholder={placeholder}
//             onChange={onChangeHandler} 
//             />
//         )
//     }
// }

export default SearchBox