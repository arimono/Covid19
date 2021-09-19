import axios from "axios"

const apiClient = axios.create({
  //database link maybe
  baseURL: "",
  withCredentials: false,
  headers: {
    Accept: "application/jason",
    "Content-Type": "application/jason",
  },
})
export default {
  postEvent(clientForm) {
    return apiClient.post("/clientForm", clientForm)
  },
}
