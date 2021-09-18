import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://localhost:4001/database/fake-server/data/",
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
