const chuckNorrisJson = fetch(
  "https://api.chucknorris.io/jokes/random?category=dev"
);
let fact = "";

//première méthode, pas optimisée, préférable d'utiliser await
chuckNorrisJson
  .then((response) => {
    //stocke 'promise'
    const promesseFact = response.json();
    //récupère l'objet json
    promesseFact.then((facts) => {
      //récupère la valeur de la CN fact
      fact = facts.value;
      document.getElementById("fact").innerHTML = fact;
      console.log(fact);
    });
  })
  .catch((err) => console.log(err));
/* 
//Err console : await is only valid in async functions and the top level bodies of modules
chuckNorrisJson
  .then((response) => {
    console.log(response);
    //récupérer l'objet json
    try {
      const facts = await response.json();
      console.log(facts);
    } catch (e) {
      console.log(e);
    }
  })
  .catch((err) => console.log(err));
 */
