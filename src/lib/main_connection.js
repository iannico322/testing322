import axios from "axios";

 

axios.defaults.baseURL = "http://127.0.0.1:3000/"
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default axios