import axios from 'axios'

//const instance = axios.create();
//https://stackoverflow.com/questions/53057788/create-request-inside-axios-interceptor
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0f4944d511713570f8578ef6b127964ab1018df030e19ec64f2ecca83f107abc'

    }
});