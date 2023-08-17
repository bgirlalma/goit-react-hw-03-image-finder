
import React, { Component } from "react";
import { BiSearch } from "react-icons/bi";
export class Searchbar extends Component {
    
render(){
    const {changeQuery} = this.props;
    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                changeQuery(e.target.elements.searchbar.value);
                e.target.reset();}}>
                <input type="text" name="searchbar"/>

                <button type="submit">{BiSearch()}</button>
                <Searchbar/>
            </form>
        </div>
    )
}
}
