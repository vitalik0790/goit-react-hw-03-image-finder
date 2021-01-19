import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const APIkey = '19535506-9e76d01e5d644620db638e0a4';

const fetchApi = async (query, page) => {
    return await axios
        .get(`${baseURL}?q=${query}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`)
        .then((response) => response.data.hits)
};

export default fetchApi;