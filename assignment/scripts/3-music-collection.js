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


// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

//maybe change the for loop
function showCollection(collectionParam){
  console.log(collectionParam.length);
  let contentDiv = document.querySelector('#content');
  for(let music of collectionParam){
    contentDiv.innerHTML +=`
        <h3> ${music.title} by ${music.artist} published in ${music.yearPublished} </h3>
    `;
  }
}
showCollection(collection);

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!

function findByArtist(artist){
  let artistArray = [];
  for (let index = 0; index < collection.length; index++) {
     if (collection[index].artist === artist) {
     artistArray.push(collection[index])
     return artistArray;
     }  
  }
  
}
findByArtist('SZA')
findByArtist('Selena')

