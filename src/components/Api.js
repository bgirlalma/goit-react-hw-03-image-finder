import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/38170214-8c71bc4e5e037f06482b3b999';

export const fetchItem = async () => {
    const response = await axios.get();
    return response.data;
};