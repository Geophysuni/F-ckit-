document.getElementById('updatestuffbut').addEventListener('click', function() {
    fetch('./variants/stuff.txt')
    .then(response => response.text())
    .then(data => {
      // Split the text content into lines
      const lines = data.split('\n');
      const randNum = Math.floor(Math.random() * lines.length)
      const randomLine = lines[randNum];
      
      document.getElementById('stufftext').textContent = randomLine;
      document.getElementById('itemImage').style.backgroundImage = "url(./images/stuff/"+String(randNum)+".jpg)";
    })
});