import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "":'http://localhost:8000',
  withCredentials: true
});

export class PointsAPI {
  static errorHandler(e) {
    console.error("AUTH API ERROR");
    console.error(e);
    throw e;
  }

  static updatePoints() {
    return instance
      .post("/points/points")
      .then(res => res.data)
      .catch(PointsAPI.errorHandler);
  }
}
