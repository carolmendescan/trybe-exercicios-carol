const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
// =================================================================================
const damageDragon = (dragon) => {
  const minDamage = 15;
  const maxDamage = Math.floor(Math.random() * dragon.strength);

  const dragonDamage = maxDamage > minDamage ? maxDamage : minDamage;
  return dragonDamage;
};
// =================================================================================
const damageWarrior = (warrior) => {
  const minDamage = warrior.strength;
  const maxDamage = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg));

  const warriorDamage = maxDamage > minDamage ? maxDamage : minDamage;
  return warriorDamage;
};
// =================================================================================
const damageMage= (mage) => {
  const mageMana = mage.mana;
  const minDamage = mage.intelligence;
  const maxDamage = minDamage * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };
  if (mageMana > 15) {
    const mageDmg = minDamage < maxDamage ? maxDamage : minDamage;
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDmg;
    return turnStats;
  }
  return turnStats;
};
