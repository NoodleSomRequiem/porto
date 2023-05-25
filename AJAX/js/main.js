window.addEventListener('load', init);

//Globals
let apiUrl = 'http://localhost/porto/webservice/index.php';
let bossData = {};
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let gallery;
let detailModal;
let detailModalContent;
let detailModalCloseButton;


/**
 * Initialize after the DOM is ready
 */
function init()
{
  //Retrieve gallery and add  click events
  gallery = document.getElementById('boss-gallery');
  gallery.addEventListener('click', bossClickHandler);
  gallery.addEventListener('click', favClickHandler);

  //Retrieve modal elements, and add click event for closing modal
  detailModal = document.getElementById('boss-detail');
  detailModalContent = detailModal.querySelector('.modal-content');
  detailModalCloseButton = detailModal.querySelector('.modal-close');
  detailModalCloseButton.addEventListener('click', detailModalCloseClickHandler);

  //Start the application with loading the API data
  ajaxRequest(apiUrl, createBossCards);//!
}

/**
 * AJAX-call to retrieve data from a webservice
 *
 * @param url
 * @param successHandler
 */

function ajaxRequest(url, successHandler, index)
{

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(successHandler)
    .catch(ajaxErrorHandler);
} //als tie fetched maakt ie kaarten

/**
 * Create initial Pokémon cards based on initial API data
 *
 * @param data
 */
function createBossCards(data) //maak de kaarten
{
  //Loop through the list of bosses
  for (let boss of data) {
    //Wrapper element for every Pokémon card. We need the wrapper now, because adding it later
    //will result in bosses being ordered based on the load times of the API instead of chronically
    let bossCard = document.createElement('div');
    bossCard.classList.add('boss-card');
    bossCard.dataset.name = boss.name;

    //Append boss card to the actual HTML
    gallery.appendChild(bossCard);

    //Retrieve the detail information from the API
    //ajaxRequest(boss.url, createBossCards);

    bossCard = document.querySelector(`.boss-card[data-name='${boss.name}']`);


    let title = document.createElement('h2');
    title.innerHTML = `${boss.name} (#${boss.id})`;
    bossCard.appendChild(title);

    let image = document.createElement('img');
    image.src = boss.image;
    bossCard.appendChild(image);

    let button = document.createElement('button');
    button.setAttribute("class", "description")
    button.innerHTML = 'Beschrijving';
    button.dataset.id = boss.id;
    bossCard.appendChild(button);

    let buttonFav = document.createElement('button');
    buttonFav.setAttribute("class", "favorites")
    buttonFav.innerHTML = 'favorite';
    for (favorite of favorites){
      if (favorite == boss.id){
        buttonFav.classList.replace("favorites","favorited");
      }
    }
    buttonFav.dataset.id = boss.id;
    bossCard.appendChild(buttonFav);

    //Store boss data globally for later use in other functions
    bossData[boss.id] = boss;
  }
}

/**
 * Create the actual contents of the card based on the loaded API information
 *
 * @param boss
 */


/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data)
{
  let error = document.createElement('div');
  error.classList.add('error');
  error.innerHTML = 'Er is helaas iets fout gegaan met de API, probeer het later opnieuw';
  gallery.before(error);
}

/**
 * Open the detailview with information of a Pokémon
 *
 * @param e
 */
function bossClickHandler(e)
{
  let clickedItem = e.target;

  //Check if we clicked on a button
  if (clickedItem.className !== 'description') {
    return;
  }

  //Get the information from the global stored data
  let boss = bossData[clickedItem.dataset.id];

  //Reset the content
  detailModalContent.innerHTML = '';

  //Show the name we used on the main grid
  let title = document.createElement('h1');
  title.innerHTML = `${boss.name} (#${boss.id})`;
  detailModalContent.appendChild(title);
  ajaxRequest(apiUrl+`?id=${boss.id}`, bossDescription);//!


}

function bossDescription(data){
  //console.log(data);
  let description = document.createElement('p');
  description.innerHTML = `${data.description}`
  detailModalContent.appendChild(description);
  detailModal.classList.add('open');
}

/**
 * Close the modal
 *
 * @param e
 */
function detailModalCloseClickHandler(e)
{
  detailModal.classList.remove('open');
}
window.addEventListener('load', init);
//maakt fav button aan

function favClickHandler(e) {
  let clickedItem = e.target;

  //Check if we clicked on a button
  if (clickedItem.className === 'favorites') {
    addFavorites(clickedItem);
  }
  //veranderd de class naam
  else{
    removeFavorites(clickedItem)
  }
}
//pushed naar localstorage
function addFavorites(clickedItem){
  clickedItem.classList.replace("favorites","favorited");
favorites.push(clickedItem.dataset.id);
localStorage.setItem("favorites", JSON.stringify(favorites)); }


function removeFavorites(clickedItem){
  let index = favorites.indexOf(clickedItem.dataset.id);
  clickedItem.classList.replace("favorited","favorites");
  favorites.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}
