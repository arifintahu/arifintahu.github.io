export function getArticles(username, perPage = 5) {
  return new Promise((resolve) => {
    fetch(
      `https://dev.to/api/articles/latest?username=${username}&per_page=${perPage}`,
      {
        cache: 'no-cache'
      }
    )
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error(error);
        resolve(null);
      });
  });
}
