export const getMatchesResults = (matchday) => {
  return fetch(`${process.env.NODE_ENV === "production" ? "":'http://localhost:8000'}/footballAPI/matches/${matchday}`).then( res => res.json()).then(data => {
    return data;
})
};