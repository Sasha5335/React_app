export const getUsers = (currentPage) => {
  return fetch(
    `https://randomuser.me/api/?results=25&page=${currentPage}&seed=fe2020-2`
  )
    .then(res => res.json())
};