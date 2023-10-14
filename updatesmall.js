document.getElementById('updatesmallbut').addEventListener('click', function() {
    fetch('./variants/smallthings.txt')
    .then(response => response.text())
    .then(data => {
      // Split the text content into lines
      const lines = data.split('\n');
      const randNum = Math.floor(Math.random() * lines.length)
      const randomLine = lines[randNum];
      
      document.getElementById('smalltext').textContent = randomLine;
      document.getElementById('itemImage').style.backgroundImage = "url(./images/smallthings/"+String(randNum)+".jpg)";
    })
});