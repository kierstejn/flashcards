import axios from 'axios';

export default axios.create({
    //baseURL: `https://persian-flashcard-server.herokuapp.com/`
    baseURL: `http://localhost:5000/`

});