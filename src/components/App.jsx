import { Component } from "react";
import { Searchbar } from "./SearchBar/searchBar";
import { GlobalStyled } from "./global.styled";

export class App extends Component {
  state = {
    query: '',
    image: [],
  }

  changeQuery = newQuery => {
    this.setState({
    query: newQuery,
    })
  }

  render() {
    return (
      <div>
        <Searchbar changeQuery={this.changeQuery}/>
        <GlobalStyled/>
      </div>
    );
  };
  }
