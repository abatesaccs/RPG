export class RPG
{
  constructor (name, hp, dmg, lvl)
  {
    this.name = name,
    this.hp = hp,
    this.dmg = dmg,
    this.lvl = lvl,
    this.xp = 0,
    this.inv = [];
  }
  win(){
    return this.name + ": Chicken Dinner";
  }
  lose(){
    return "Your moves are weak";
  }
  lvlUp(){
    this.lvl++;
  }
  randEnemy(){
    var enemy = [];
    enemy[1] = (Math.ceil(Math.random() * 15));
    enemy[2] = (Math.ceil(Math.random() * 10));
    enemy[3] = (Math.ceil(Math.random() * 2));
    return enemy;
  }
  equip(item){
    if (item[0] == "hp") {
      this.hp += item[1];
    } else if (item[0] == "dmg") {
      this.dmg += item[1];
    } else if (item[0] == "lvl") {
      this.lvl += item[1];
    }
  }
  fight(guy)
  {
    if (this.dmg >= guy.hp) {
      if (guy.lv == 1) {
        this.xp += (guy.lvl * 5);
      }
      if (this.xp >= (guy.lvl * 50)) {
        this.lvlUp();
      }
      return this.win();
    } else {
      return this.lose();
    }
  }

}
