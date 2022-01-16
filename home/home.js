// main.js

// Here is where the recipes that you will fetch.
// Feel free to add your own here for part 2, if they are local files simply add their path as a string.
const default_card = [
    "/home/fake_data.json"
];

const friendlist = {};
  window.addEventListener('DOMContentLoaded', init);
  
  // This is the first function to be called, so when you are tracing your code start here.
  async function init() {
    // fetch the recipes and wait for them to load
    let fetchSuccessful = await fetchFriends();
    // if they didn't successfully load, quit the function
    if (!fetchSuccessful) {
      console.log('Fetch unsuccessful');
      return;
    };
    // Add the first three recipe cards to the page
    createUserCard();
  }
  
  async function fetchFriends() {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < default_card.length; i++) {
            fetch(default_card[i])
            .then(response => response.json())
            .then(data => {
              friendlist[`friend ${i}`] = data; 
              console.log("here");
              resolve("true");
            //   console.log("here");
            //   if (friendlist.length == Object.keys(default_card).length) {
            //     console.log("here");
            //     resolve("true");
                
            //   }
            })
            .catch(error => reject("false"));
          }
        }
    )}     
    //   for (let i = 0; i < recipes.length; i++) {
    //     fetch(recipes[i])
    //     .then(response => response.json())
    //     .then(data => {
    //       recipeData[`recipe ${i}`] = data; 
    //       if (recipes.length == Object.keys(recipeData).length) {
    //         resolve("true")
    //       }
    //     })
    //     .catch(error => reject("false"));
    //   }
//       // This function is called for you up above
//       // From this function, you are going to fetch each of the recipes in the 'recipes' array above.
//       // Once you have that data, store it in the 'recipeData' object. You can use whatever you like
//       // for the keys. Once everything in the array has been successfully fetched, call the resolve(true)
//       // callback function to resolve this promise. If there's any error fetching any of the items, call
//       // the reject(false) function.
  
//       // For part 2 - note that you can fetch local files as well, so store any JSON files you'd like to fetch
//       // in the recipes folder and fetch them from there. You'll need to add their paths to the recipes array.
  
//       // Part 1 Expose - TODO
//     });
  
  
//   }
  
  
  
  function createUserCard() {
    // This function is called for you up above.
    // From within this function you can access the recipe data from the JSON 
    // files with the recipeData Object above. Make sure you only display the 
    // three recipes we give you, you'll use the bindShowMore() function to
    // show any others you've added when the user clicks on the "Show more" button.
  
    // Part 1 Expose - TODO
    const userCard = document.createElement("user-card");
    console.log(friendlist);
    userCard.data = friendlist[`friend 0`];
    document.querySelector("main").append(userCard);
  }
  
  
