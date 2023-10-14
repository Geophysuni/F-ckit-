document.getElementById('updatebigbut').addEventListener('click', function() {
    fetch('./variants/bigthings.txt')
    .then(response => response.text())
    .then(data => {
      // Split the text content into lines
      const lines = data.split('\n');
      const randNum = Math.floor(Math.random() * lines.length)
      const randomLine = lines[randNum];
      
      document.getElementById('bigtext').textContent = randomLine;
      document.getElementById('itemImage').style.backgroundImage = "url(./images/bigthings/"+String(randNum)+".jpg)";
    })
});