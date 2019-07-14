import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "" : "http://localhost:8000",
  withCredentials: true
});

export class QuinielaAPI {
  static errorHandler(e) {
    console.error("QUINIELA API ERROR");
    console.error(e);
    throw e;
  }

  static getOneQuinielaResult() {
    return instance
      .post("/quinielaScrape/results")
      .then(res => res.data.results)
      .catch(QuinielaAPI.errorHandler);
  }
}

export const getQuinielaResults = () => {
  return fetch(
    `${
      process.env.NODE_ENV === "production" ? "" : "http://localhost:8000"
    }/quinielaScrape/quiniela`
  )
    .then(res => res.json())
    .then(data => {
      return data;
    });
};

export const getQuinielaBet = () => {
  return fetch(
    `${
      process.env.NODE_ENV === "production" ? "" : "http://localhost:8000"
    }/quinielaScrape/apuesta`
  )
    .then(res => res.json())
    .then(data => {
      return data;
    });
};

export const getFullTo15 = () => {
  return fetch(
    `${
      process.env.NODE_ENV === "production" ? "" : "http://localhost:8000"
    }/quinielaScrape/pleno`
  )
    .then(res => res.json())
    .then(data => {
      return data;
    });
};
