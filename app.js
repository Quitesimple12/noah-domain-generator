let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net", ".io", ".us"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + extension[l]);
      }
    }
  }
}

//This project got denied, but when I open it in codespaces it loads in the console and works as it is supposed to. 
//I am not sure why the console would not load.