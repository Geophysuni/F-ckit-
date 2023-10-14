document.getElementById('updatedrinkbut').addEventListener('click', function() {
  fetch('./variants/drinks.txt')
  .then(response => response.text())
  .then(data => {
    // Split the text content into lines
    const lines = data.split('\n');
    const randNum = Math.floor(Math.random() * lines.length)
    const randomLine = lines[randNum];
    
    document.getElementById('drinktext').textContent = randomLine;
    document.getElementById('itemImage').style.backgroundImage = "url(./images/drinks/"+String(randNum)+".jpg)";
  })
});