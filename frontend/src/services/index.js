import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3030/v1",
  timeout: 8000,
});
