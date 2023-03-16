
const loadUser = async () => {
  let response;
  try {
    response = await fetch(`https://randomuser.me/api`);
  } catch (e) {
    return null;
  }
  let json;
  try {
    json = await response.json();
  } catch (e) {
    return null;
  }
  return json.results[0];
}

let { email, gender, name } = await loadUser();
console.log(`${email}, ${gender}, ${name.first} ${name.last}`);