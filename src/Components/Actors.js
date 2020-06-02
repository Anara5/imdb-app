import React, {Component} from "react";
//import Card from "./Components/Card";

class Actors extends Component {
    

    render() {
        return(
            <div className="Actors">
            
            <h1>IMDB ACTORS</h1>

            <button onclick="myFunctionAdd()" className="button">Add random actor</button>
            <button onclick="myFunctionSortName()" className="button">Sorted by name</button>
            <button onclick="myFunctionSortPopularity()" className="button">Sorted by popularity</button>
            
         
           </div>
           //TODO place in the table from Card.js
           
        );
    }
}
export default Actors;