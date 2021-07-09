import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8060/api";
// axios.defaults.headers.common["Authorization"] = localStorage.getItem(
//   "auth-user"
// );
// axios.defaults.headers.post["Content-Type"] = "application/json";
export default axios.create({
  baseURL: "http://localhost:8060/api",
  headers: {
    "Content-type": "application/json",
    Authorization: localStorage.getItem("auth-user")
  }
});
