//For Loops with arrays Mini Challenge: Print out 20 items from your own a

const nhlTeams = [
  'Hurricanes',
  'Blue Jackets',
  'Devils',
  'Islanders',
  'Rangers',
  'Flyers',
  'Penguins',
  'Capitals',
  'Bruins',
  'Sabres',
  'Red Wings',
  'Panthers',
  'Canadiens',
  'Senators',
  'Lightning',
  'Maple Leafs',
  'Blackhawks',
  'Avalanche',
  'Stars',
  'Wild',
  'Predators',
  'Blues',
  'Jets',
  'Ducks',
  'Coyotes',
  'Flames',
  'Oilers',
  'Kings',
  'Sharks',
  'Canucks',
  'Golden Knights'
];

console.warn('\nNHL Teams: (for-loop)');
for (let i = 0; i < 20 && i < nhlTeams.length; i++) {
  console.log(i+1+'-' + nhlTeams[i]);
}

console.warn('\nNHL Teams: (forEach)');
nhlTeams.forEach((t,i) => console.log(`${i+1}-${t}`));
