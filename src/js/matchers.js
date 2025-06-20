
const heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

function displayHeroesByHealth(heroes) {
  return heroes.slice().sort((a, b) => b.health - a.health);
}

export default displayHeroesByHealth;

displayHeroesByHealth(heroes);


