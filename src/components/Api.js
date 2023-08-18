import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38170214-8c71bc4e5e037f06482b3b999';

export const FetchItem = async (keyword, page =1, perPage = 12) => {
    const response = await axios.get('', {
        params: {
            key: API_KEY,
            q: keyword,
            page: page,
            per_page: perPage,
        }
    });
    return response.data.hits.map(item => ({
        id: item.id,
        webformatURL: item.webformatURL,
        largeImageURL: item.largeImageURL,
    }));
};