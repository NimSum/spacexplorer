const fetchAnything = async (url) => {
  const corsFixUrl = `https://cors-anywhere.herokuapp.com/${url}`
  const response = await fetch(corsFixUrl);
  
  if (!response.ok) {
    throw Error('Failed to get space stuff :(')
  }

  return response.json();
}

export default fetchAnything;