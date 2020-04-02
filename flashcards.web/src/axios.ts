import axios from 'axios';

export default axios.create({
    baseURL: `https://persian-flashcard-server.herokuapp.com/`
});