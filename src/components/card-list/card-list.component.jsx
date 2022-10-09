import { Component } from "react";
import { Card } from "../card/card.component"

import "./card-list.styles.css";

const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => {
                return <Card key={monster.id} monster={monster} />
            })
            }
        </div>
    )
}

export default CardList;



// class CardList extends Component {

//     render(){
//         // console.log(this.props.monsters)
//         // console.log("render from cardlist")

//         const {monsters} = this.props;

//         return (
//             <div className= "card-list">
//                 {monsters.map((monster) => {
//                 return(

//                     <Card monster= {monster} />
//                     // <div className="card-container" key={monster.id}>
//                     // <img alt= {`monster ${name}`} src= {`https://robohash.org/${id}?set=set2&size=180x180`}/>
//                     // <h2>{name}</h2> 
//                     // <p>{email}</p>   
//                     // </div>

//                 )})}

//             </div>
//         )
//     }
// }

// export default CardList;