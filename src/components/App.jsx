import React, { Component } from "react";
import { Searchbar } from "./SearchBar/searchBar";
import { GlobalStyled } from "./global.styled";
import { Gallery } from "./Gallery/gallery";
import { LoadMore } from "./LoadMore/loadMore";
import { FetchItem } from './Api'

export class App extends Component {
  state = {
    query: '',
    image: [], 
    page: 1,
    loader: false,
    showLoadMoreButton: false,
  }

  async componentDidMount() {
    const saveSearch = localStorage.getItem('save-search');
    if (saveSearch !== null) {
      try {
        this.setState({
          query: JSON.parse(saveSearch),
        })
      } catch (error) {
        console.log('Opps! Помилочка!', error)
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      try {
        localStorage.setItem('save-search', JSON.stringify(this.state.query))
      } catch (error) {
        console.log('Помилка збереження данних!', error)
      }
    }
  }

  fetchImagesByQuery = async (newQuery, page = 1) => {
    try {
      const queryImage = await FetchItem(newQuery, page);
      return queryImage;
    } catch (error) {
      console.log('Error fetching images:', error)
      return [];
    }
  }

  changeQuery = async (newQuery) => {
    const queryImage = await this.fetchImagesByQuery(newQuery);
    this.setState({
      query: newQuery,
      image: queryImage,
      page: 1, 
      showLoadMoreButton: queryImage.length >= 12,
    });
  }

  loadMoreImages = async () => {
    const { query, page } = this.state;
    this.setState({ loader: true });

    try {
      const newImages = await this.fetchImagesByQuery(query, page + 1);
      this.setState((prevState) => ({
        image: [...prevState.image, ...newImages],
        page: prevState.page + 1,
        loader: false,
        showLoadMoreButton: newImages.length >= 12,
      }));
    } catch (error) {
      console.log('Неможливо завантажити картики!', error);
      this.setState({ loader: false });
    }
  }

  render() {
    const { image, loader, showLoadMoreButton } = this.state;
    return (
      <div>
        <Searchbar changeQuery={this.changeQuery} />
        <Gallery images={image} />
        {showLoadMoreButton && (
          <LoadMore
            loadMoreImages={this.loadMoreImages}
            loaderVisible={loader}
          />
        )}
        <GlobalStyled />
      </div>
    );
  }
}