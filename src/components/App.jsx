import { Component } from "react";
import { Searchbar } from "./SearchBar/searchBar";
import { GlobalStyled } from "./global.styled";
import { Gallery } from "./Gallery/gallery";
import { LoadMore } from "./Gallery/LoadMore/loadMore";
import { FetchItem } from './Api'

export class App extends Component {
  state = {
    query: '',
    image: [],
  }

  async componentDidMount() {
    const saveSearch = localStorage.getItem('save-search');
    if (saveSearch !== null) {
      try{
        this.setState({
          query: JSON.parse(saveSearch),
        })
      }catch(error){
        console.log('Opps! Помилочка!', error)
      } 
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== this.state.query){
      try{
        localStorage.setItem('save-search', JSON.stringify(this.state.query))
      }catch(error){
        console.log('Помилка збереження данних!', error)
      }
    }
  }

  fetchImagesByQuery = async (newQuery) => {
    try {
      const queryImage = await FetchItem(newQuery); 
      return queryImage;
    } catch (error) {
      console.log('Error fetching images:', error)
      return [];
    }
  }

  changeQuery = async (newQuery) => {
    this.setState({
      query: newQuery,
    });

    const queryImage = await this.fetchImagesByQuery(newQuery);
    this.setState({ image: queryImage });
  }

  render() {
    return (
      <div>
        <Searchbar changeQuery={this.changeQuery} />
        <Gallery images={this.state.image} />
        <LoadMore />
        <GlobalStyled />
      </div>
    );
  };
}