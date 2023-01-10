import axios from "axios";

const instance=axios.create({
    baseURL: 'https://algotest-d8919-default-rtdb.firebaseio.com/'
});

export default instance;