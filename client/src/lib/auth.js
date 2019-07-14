import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "":'http://localhost:8000',
  withCredentials: true
});

export class AuthAPI {
  static errorHandler(e) {
    console.error("AUTH API ERROR");
    console.error(e);
    throw e;
  }

  static currentUser() {
    return instance
      .get("/auth/currentuser")
      .then(res => res.data.user)
      .catch(AuthAPI.errorHandler);
  }

  static login(email, password) {
    return instance
      .post("/auth/login", { email, password })
      .then(res => res.data)
      .catch(AuthAPI.errorHandler);
  }

  static signup(name, email, password) {
    return instance
      .post("/auth/signup", { name, email, password })
      .then(res => res.data.user)
      .catch(AuthAPI.errorHandler);
  }
  static logout() {
    return instance
      .get("/auth/logout")
      .then(() => console.log("Logout"))
      .catch(AuthAPI.errorHandler);
  }

  static getUsers() {
    return instance
      .get("auth/allUsers")
      .then((res) => res.data)
      .catch(AuthAPI.errorHandler);
  }
}
