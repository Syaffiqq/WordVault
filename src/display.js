const fs = require('fs');
const path = require('path');

var btnView = document.getElementById('btnView');
var listInput = document.getElementById('listName');
var listContents = document.getElementById('listContents');

const pathName = path.join(__dirname, 'Files');

btnView.addEventListener('click', function () {
  const listName = listInput.value.trim();
  if (!listName) {
    alert('Please enter a list name.');
    return;
  }
  const filePath = path.join(pathName, `${listName}.txt`)

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      console.error(err);
    }
    listContents.textContent = `Contents of "${listName}.txt":\n\n` + data;
  });
});