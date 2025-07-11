const fs = require('fs');
const path = require('path');

const btnCreate = document.getElementById('btnCreate');
const btnRead = document.getElementById('btnRead');
const btnUpdate = document.getElementById('btnUpdate');
const btnDelete = document.getElementById('btnDelete');
const fileName = document.getElementById('fileName');
const fileContents = document.getElementById('fileContents');

let pathName = path.join(__dirname, 'Files');

// Ensure Files folder exists
if (!fs.existsSync(pathName)) {
  fs.mkdirSync(pathName);
}

btnCreate.addEventListener('click', () => {
  const file = path.join(pathName, fileName.value);
  const contents = fileContents.value;

  fs.writeFile(file, contents, (err) => {
    if (err) return console.log(err);
    alert(`${fileName.value} was created`);
    showAllFiles();
  });
});

btnRead.addEventListener('click', () => {
  const file = path.join(pathName, fileName.value);

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) return console.log(err);
    fileContents.value = data;
  });
});

btnUpdate.addEventListener('click', () => {
  const file = path.join(pathName, fileName.value);
  const contents = fileContents.value;

  fs.writeFile(file, contents, (err) => {
    if (err) return console.log(err);
    alert(`${fileName.value} was updated`);
    showAllFiles();
  });
});

btnDelete.addEventListener('click', () => {
  const file = path.join(pathName, fileName.value);

  fs.unlink(file, (err) => {
    if (err) return console.log(err);
    fileName.value = "";
    fileContents.value = "";
    alert(`${fileName.value} was deleted`);
    showAllFiles();
  });
});

// Display all saved files
function showAllFiles() {
  const listContainer = document.getElementById('listContents');
  listContainer.innerHTML = '';

  fs.readdir(pathName, (err, files) => {
    if (err || files.length === 0) {
      listContainer.innerText = '📭 No saved files found.';
      return;
    }

    files.forEach(file => {
      const filePath = path.join(pathName, file);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (!err) {
          listContainer.innerHTML += `📁 ${file}\n${data}\n----------------------------\n`;
        }
      });
    });
  });
}

// Show files on load
window.addEventListener('DOMContentLoaded', showAllFiles);
