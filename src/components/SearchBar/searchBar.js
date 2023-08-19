
import React, { Component } from "react";
import { BiSearch } from "react-icons/bi";
import{Container,Form, Span, Input} from './searchbar.styled'
export class Searchbar extends Component {
    
render(){
    const {changeQuery} = this.props;
    return(
        <Container>
            <Form onSubmit={(e) => {
                e.preventDefault();
                changeQuery(e.target.elements.searchbar.value);
                e.target.reset();}}>

                <button className="button" type="submit" onClick={() => changeQuery}><Span className="button-span"><BiSearch fill="red"/></Span></button>
                <Input className="input" type="text" name="searchbar" placeholder="Search images and photos"/>

            </Form>
        </Container>
    )
}
}
