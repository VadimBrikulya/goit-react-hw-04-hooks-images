function fetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=21823632-4a78800005356d3e545615fc9&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`There is no images with name ${name}`));
  });
}
const api = { fetchImages };
export default api;