const searchData = (searchInput) => {
  fetch(
    `http://www.omdbapi.com/?apikey=8f368fd8&s=${searchInput}`,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    }
  )
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default searchData;