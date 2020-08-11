// DOM Elements
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search states.json, filter it, and call display function
const searchStates = async searchText => {
  // Get json data
  const res = await fetch('../data/states.json');
  const states = await res.json();
  // Filter matches to current text input
  let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex);
  });
  if (searchText.length == 0) matches = [];
  // Output html
  displayStates(matches);
}

// Display states in matchList html
const displayStates = states => {
  const html = states.map(state => `
    <div class="card mb-1">
      <div class="card-header"><i class="fas fa-search"></i></div>
      <div class="card-body">
        <h5 class="card-title">${state.name} <span class="text-info">(${state.abbr})</span></h5>
        <ul class="list-group">
          <li class="list-group-item"><span class="text-info">Capital:</span> ${state.capital}</li>
          <li class="list-group-item"><span class="text-info">Lat:</span> ${state.lat} / Long: ${state.long}</li>
        </ul>
      </div>
      <div class="card-footer">
        <i class="fas fa-map"></i>
        <a href="https://www.google.com/maps/@?api=1&map_action=map&center=${state.lat},${state.long}&zoom=12" class="">${state.capital},</a>
        <a href="https://www.google.com/maps/search/?api=1&query=${state.name}">${state.name}</a>
      </div>
    </div>
  `).join('');
  matchList.innerHTML = html;
}

// Add input event listener
search.addEventListener('input', () => searchStates(search.value));

