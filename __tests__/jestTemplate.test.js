import { RPG } from './../src/rpg.js'

describe ('RPG', () => {
  test ('Should check if the fight works properly for a win', ()=>
  {
    let range = new RPG("Bounty Hunter", 10, 5, 1);
    let bot = new RPG("Enemy", 5, 10, 1);
    expect(range.fight(bot)).toEqual(range.name + ": Chicken Dinner");
  });
  test ('Should check if the fight works properly for a loss', ()=>
  {
    let range = new RPG("Bounty Hunter", 10, 3, 1);
    let bot = new RPG("Enemy", 5, 10, 1);
    expect(range.fight(bot)).toEqual("Your moves are weak");
  });
  test ('Should check if leveling up occurs when you win', ()=>
  {
    let range = new RPG("Bounty Hunter", 10, 5, 1);
    let bot = new RPG("Enemy", 5, 10, 1);
    range.fight(bot);
    expect(range.lvl).toEqual(2);
  });
  test ('Should check if leveling works properly for a loss', ()=>
  {
    let range = new RPG("Bounty Hunter", 10, 3, 1);
    let bot = new RPG("Enemy", 5, 10, 1);
    range.fight(bot);
    expect(range.lvl).toEqual(1);
  });
  test ('Should check if items effect stats properly', ()=>
  {
    let range = new RPG("Bounty Hunter", 10, 3, 1);
    let pGlove = ["dmg", 5];
    range.equip(pGlove);
    expect(range.dmg).toEqual(8);
  });
  test ('Should check if items effect stats properly', ()=>
  {
    let range = new RPG("Bounty Hunter", 10, 3, 1);
    let jacket = ["hp", 5];
    range.equip(jacket);
    expect(range.hp).toEqual(15);
  });
});
