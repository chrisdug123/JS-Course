let player = {
  age: 99,
  name: 'Chris',
  hasMotion: 'Yes',
  outfit: {
    hat: 'baseball cap',
    shirt: 't-shirt',
    pants: 'shorts',
    shoes: 'sneakers'
  }
};

console.log(player.name);
console.log(player['name']);

player.health = 100;
player['height'] = 190;

console.log(player)

delete player.health

player.outfit.shirt = 'tank top';
console.log(player)
