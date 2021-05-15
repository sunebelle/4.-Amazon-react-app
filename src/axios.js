import axios from "axios";

const instance = axios.create({
  baseURL: "https://create-amazon-server.herokuapp.com",
});
export default instance;
