export function getArticles() {
  return new Promise((resolve) => {
    fetch('https://dev.to/api/articles/latest?username=arifintahu&per_page=5', {
      cache: 'no-cache'
    })
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
