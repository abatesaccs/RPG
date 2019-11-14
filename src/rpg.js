export class RPG
{
  constructor (name, hp, dmg, lvl)
  {
    this.name = name,
    this.hp = hp,
    this.dmg = dmg,
    this.lvl = lvl,
    let inv = [];
    this.inv = inv;
  }
  win(){
    return this.name + ": Chicken Dinner";
  }
  lose(){
    return "Your moves are weak";
  }
  lvlUp(){
    this.lvl++;
    console.log('ayyy lmao');
  }
  randEnemy(){
    var enemy = [];
    enemy[1] = (Math.ceil(Math.random() * 15));
    enemy[2] = (Math.ceil(Math.random() * 10));
    enemy[3] = (Math.ceil(Math.random() * 2));
    return enemy;
  }
  fight(guy)
  {
    if (this.dmg >= guy.hp) {
      this.lvlUp();
      console.log(this.lvl);
      return this.win();
    } else {
      return this.lose();
    }
  }
}
