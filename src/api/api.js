import * as axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "cd15c007-31db-47b6-b737-d5df452f1ba3",
  },
})

export const usersAPI = {
  getUsers(pageNumber = 1, pageSize = 10) {
    return axiosInstance.get( `users?page=${pageNumber}&count=${pageSize}` )
    .then( response => response.data )
  },

  checkMyAuth() {
    return axiosInstance.get(`auth/me`)
    .then( response => response.data )
  }
}

export const followAPI = {
  removeFollowParam(userId) {
    return axiosInstance.delete(`follow/${userId}`)
    .then( response => response.data )
  },

  setFollowParam(userId) {
    return axiosInstance.post(`follow/${userId}`, {})
    .then( response => response.data )
  }
}
