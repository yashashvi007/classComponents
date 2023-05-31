import { Component } from "react";
import './card-list.styles.css'

const CardList = ({monsters})=>{
    console.log('asd');
    return (
        <div className="card-list" >
        {monsters.map((monster)=> (
          <div className="card-container" key = {monster.id} >
             <img alt="monster" src={`https://robohash.org/yash${monster.id}`} />
             <h2>{monster.name}</h2>
             <p>{monster.email}</p>
          </div>
        ))}
     </div>
    )
}

export default CardList

// class CardList extends Component {
//     render(){
//         console.log('card list');
//         const {monsters} = this.props

//         return (
//             <div className="card-list" >
//                {monsters.map((monster)=> (
//                  <div className="card-container" key = {monster.id} >
//                     <img alt="monster" src={`https://robohash.org/yash${monster.id}`} />
//                     <h2>{monster.name}</h2>
//                     <p>{monster.email}</p>
//                  </div>
//                ))}
//             </div>
//         )
//     }
// }

// export default CardList