//your code here

let bandNames = ['The Rolling Stones', 'Aerosmith', 'Led Zeppelin', 'The Who', 'Pink Floyd'];

// Function to remove articles ('a', 'an', 'the') from band names
function removeArticles(name) {
  return name.replace(/^(The|A|An) /i, '').trim();
}

// Sort the array while ignoring articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the ul element to insert the list
const ul = document.getElementById('band');

// Create and append li elements for each band name
bandNames.forEach((bandName) => {
  const li = document.createElement('li');
  li.textContent = bandName;
  ul.appendChild(li);
});