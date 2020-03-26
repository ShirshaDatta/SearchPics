import axios from'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5c31db6975c58db464308243acbf03004a4d0a2196a3ec9520c9a66d0e8d0556'
    }

});
