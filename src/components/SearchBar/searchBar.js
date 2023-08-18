
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

                <button className="button" type="submit" onClick={() => changeQuery}><span className="button-span"><BiSearch/></span></button>
                <input className="input" type="text" name="searchbar" placeholder="Search images and photos"/>

            </form>
        </div>
    )
}
}
