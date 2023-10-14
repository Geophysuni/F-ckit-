document.getElementById('updatefoodbut').addEventListener('click', function() {
    fetch('./variants/food.txt')
    .then(response => response.text())
    .then(data => {
      // Split the text content into lines
      const lines = data.split('\n');
      const randNum = Math.floor(Math.random() * lines.length)
      const randomLine = lines[randNum];
      
      document.getElementById('foodtext').textContent = randomLine;
      document.getElementById('itemImage').style.backgroundImage = "url(./images/food/"+String(randNum)+".jpg)";
    })
});