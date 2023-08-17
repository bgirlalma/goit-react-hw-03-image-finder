
import { Gallery } from "components/Gallery/gallery";
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

                <button class="button" type="submit"><span class="button-span">{BiSearch()}</span></button>
                <input class="input" type="text" name="searchbar"  autocomplete="off" autofocus placeholder="Search images and photos"/>

                <Gallery/>
            </form>
        </div>
    )
}
}
