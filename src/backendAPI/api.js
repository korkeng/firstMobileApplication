import axios from 'axios'


const getMovieApi = async (queryTerm, pageNo) => {
    return response = await api.get('/api/movies/search', {
      params: {
        query: queryTerm,
        page: pageNo
      }
    });
}

const api = axios.create({
    baseURL: 'http://scb-movies-api.herokuapp.com',
    headers: {
        'api-key': 'd92396fae7d4f667d687c1da49c800c79e3dd210'
    }
});

export default getMovieApi