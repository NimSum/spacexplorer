const fetchAnything = async (url) => {
  const corsFixUrl = `https://cors-anywhere.herokuapp.com/${url}`
  const response = await fetch(corsFixUrl);
  return response.json();
}

export default fetchAnything;