console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let addCollection = {
  title: title,
  artist: artist,
  yearPublished: yearPublished,
  }
  collection.push(addCollection);
  return addCollection;
}

console.log(addToCollection('Pleasure', 'Janelle Monae', 2023 ));
console.log(addToCollection('Dirty Computer', 'Janelle Monae', 2018));
console.log(addToCollection('Epiphany' , 'T-Pain' , 2007));
console.log(addToCollection('Rappa Ternt Sanga' , 'T-Pain' , 2005));
console.log(addToCollection('Ctrl' , 'SZA' , 2017));
console.log(addToCollection('Cupid Deluxe' , 'Blood Orange' , 2013));

console.log(collection);

function showCollection([]){
  let contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = [];
  for(let [] of collectionsToDisplay){
    contentDiv.innerHTML =+`
      <div>
        <h3> ${title} by ${artist} published in ${yearPublished} </h3>
      </div>
    `;
  }
}
showCollection(collection);

