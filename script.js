// input with a space in it
// cycle through the drinks
// get an image from nasa

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const initialChoice = document.querySelector('input').value
  let choice 
  let testForSpaces = initialChoice.split(" ")
    if (testForSpaces.length > 1) {
      choice = testForSpaces.join('%20')}
    else choice = testForSpaces
    console.log(choice)

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
  .then(res => res.json()) 
  .then(data => {
      console.log(data.drinks)
        if (data.drinks.length > 1) {
          document.querySelector('h2').innerText = "Which one?"
          const lineBreak = document.createElement('br');
          document.querySelector('h2').appendChild(lineBreak)
          for (i = 0; i < data.drinks.length; i++){
            document.querySelector('h2').innerText += data.drinks[i].strDrink
            document.querySelector('h2').appendChild(lineBreak)
            document.querySelector('img').src = ""
            document.querySelector('h3').innerText = ""
          }
        }
        else if (data.drinks.length = 1) {
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions}
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

}