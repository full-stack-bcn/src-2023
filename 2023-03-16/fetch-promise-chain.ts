fetch(`https://randomuser.me/apizzzz`)
  .then((response) => response.json())
  .then((json) => console.log(json.results[0].email))
  .catch((err) => console.error("He cazado el error:", err));