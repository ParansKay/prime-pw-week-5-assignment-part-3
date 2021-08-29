console.log('***** Music Collection *****')
// - Create a variable `Record Collection` that starts as an empty array.
let recordCollection = [];
// - Add a function named `addToCollection`. This function should:
  //   - Take in the album's `title`, `artist`, `yearPublished` as input parameters 
function addToCollection( newTitle, newArtist, newYearPublished ){ 
//     - Create a new object having the above properties
  let newRecord = {
      title : newTitle,
      artist : newArtist,
      year: newYearPublished
    }; //end object literal
//   - Add the new object to the end of the `collection` array
recordCollection.push( newRecord );
//   - Return the newly created object
return console.log( 'New record added to the collection:', newRecord );
} //end addToCollection


// - Test the `addToCollection` function:
    //   - Add 6 albums to your collection. 
    //   - Aim to have a mix of both same and different artists and published years. 
    //   - (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
    //   - Console.log each album as added using the returned value.

addToCollection( 'Chromatica', 'Lady Gaga', 2020 );
addToCollection( 'Happier Than Ever', 'Billie Eilish', 2021 );
addToCollection( 'Joanne', 'Lady Gaga', 2016 );
addToCollection( 'Future Nostalgia', 'Dua Lipa', 2020 );
addToCollection( 'Black Holes and Revelations', 'Muse', 2006 );
addToCollection( 'The 2nd Law', 'Muse', 2012 );

//   - After all are added, console.log the `collection` array.
console.log( 'Record collection:', recordCollection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. 
//   - (This allows it to be reused to show any collection, like the results from the find or search.)
function showCollection( array ){
//   - Console.log the number of items in the array.
console.log( 'The number of records in the collection is:', recordCollection.length );
for( let i = 0; i<recordCollection.length; i++ ){
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
    console.log( recordCollection[i].title, 'by', recordCollection[i].artist, 'published in', recordCollection[i].year ); 
} //end function

} //end showCollection

// - Test the `showCollection` function.
showCollection( recordCollection );

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
function findByArtist( artist ){
//   - Create an array to hold any results, empty to start
let matchingRecords = []; 
//   - Loop through the `collection` and add any objects with a matching artist to the array.
for( let i = 0; i<recordCollection.length; i++ ){
    if( artist === recordCollection[i].artist ){
        matchingRecords.push( recordCollection[i] );
    } //end if
} // end for loop
//   - Return the array with the matching results. If no results are found, return an empty array.
return matchingRecords && console.log( 'Matching records for', artist, 'are:', matchingRecords );
}// end findByArtist

// - Test the `findByArtist` function. 
// Make sure to test with an artist you know is in the collection,
findByArtist( 'Lady Gaga' );
findByArtist( 'Muse' );
//  as well as an artist you know is not in your collection. 
findByArtist( 'Elton John' );
// Check that for artists with multiple matches, all are found.


// > When testing your functions, write all tests in the JavaScript file!
//////
// Stretch Goals 
// - Create a function called `search`. This function should:
function search( searchArtist, searchYear ){
    let searchArtistYearMatches = [];
//   - Take an input parameter for a search criteria object.
// Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }
//   - The returned output from `search` should meet these requirements:
    for( let i = 0; i<recordCollection.length; i++ ){
    //  - Return a new array of all items in the `collection` matching *all* of the search criteria.
        if( searchArtist === recordCollection[i].artist && searchYear === recordCollection[i].year ){
        searchArtistYearMatches.push( recordCollection[i] );
        return console.log( 'here are the search results matching all the criteria:', searchArtistYearMatches );
        } // end if 
        else if( !searchArtist && !searchYear ){
        return console.log ( 'here are all of the albums:', recordCollection ); 
        } // end else if
        else if( searchArtist !== recordCollection[i].artist || searchYear !== recordCollection[i].year ){
        return console.log( 'here are the search results:', searchArtistYearMatches );
        } // end else if 
         // end else
    //     - If no results are found, return an empty array.
    //     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.     
    }// end for loop
}; // end search

search( 'Lady Gaga', 2020 ); //both criteria met 
search( 'Banana Hammock', 2020 ); // one criteria doesn't match
search( 'Lady Gaga', 1998 ); // the other criteria doesn't match
search( ); //no input given

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`.
// You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

// > Make sure to test all your code!



// ## Assignment Submission
// Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!