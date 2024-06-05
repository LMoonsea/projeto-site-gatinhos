async function obterGato() {
  let gato = null;
  const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "live_yKBQKV7fHBw0PVsygqZWMHX2IBC4G4Tpe1FavdftrfpwFb7AAoyZPzI3mrvJmmtV"
  });
  
  const requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
  };
  
  try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      gato = result;
  } catch (error) {
      console.log('Error:', error);
  }

  return gato;
}

obterGato().then(gato => console.log(gato));
