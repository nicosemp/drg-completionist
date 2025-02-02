import type { Overclock } from 'types/overclock';

const BoomstickOverclocks: Overclock[] = [
  {
    name: 'Compact Shells',
    id: 'FA40EE4A1F8CB04FBFAF916469E4B167',
    icon: 'Ammo',
    type: 'Clean',
    price: {
      credits: 8550,
      jadiz: 100,
      magnite: 65,
      umanite: 120,
    },
    effects: {
      buffs: ['+6 Max Ammo', '-0.2s Reload Time'],
      nerfs: [],
    },
    description:
      'You can carry a few more of these compact shells in your pockets, and they are a bit faster to reload with.',
  },
  {
    name: 'Special Powder',
    id: 'E6DAF7D6065004439EF966D6FDBD69A6',
    icon: 'ShotgunJump',
    type: 'Clean',
    price: {
      credits: 7050,
      bismor: 95,
      croppa: 125,
      enorPearl: 65,
    },
    effects: {
      buffs: ['+Shotgun Jump'],
      nerfs: [],
    },
    description:
      'Less like gunpowder and more like rocket fuel, this mixture gives a hell of a kick that you can use to get places.',
  },
  {
    name: 'Stuffed Shells',
    id: '3F68CB7C2FAB2843B1446D133BD92C1D',
    icon: 'ShotgunPellet',
    type: 'Clean',
    price: {
      credits: 7850,
      bismor: 100,
      enorPearl: 135,
      umanite: 80,
    },
    effects: {
      buffs: ['+1 Damage', '+1 Pellets'],
      nerfs: [],
    },
    description:
      "With a bit of patience and some luck, you can get one more pellet and a few more grains of powder into each shell without affecting the gun's performance or losing an eye in the process.",
  },
  {
    name: 'Shaped Shells',
    id: 'EF0CAC2AEF57BD41A72155B4DA395D47',
    icon: 'Aim',
    type: 'Balanced',
    price: {
      credits: 7700,
      bismor: 95,
      enorPearl: 70,
      jadiz: 135,
    },
    effects: {
      buffs: ['-50% Base Spread'],
      nerfs: ['-4 Ammo'],
    },
    description:
      'Specially shaped shells result in a tighter shot, but the number of pellets is reduced.',
  },
  {
    name: 'Double Barrel',
    id: '5F090BB3EFC96F4297F1BFC3F152C663',
    icon: 'Special',
    type: 'Unstable',
    price: {
      credits: 7950,
      croppa: 100,
      enorPearl: 75,
      umanite: 125,
    },
    effects: {
      buffs: ['+100% Pellets', '+450% Blast Wave Damage'],
      nerfs: [
        '-50% Magazine Size',
        '-50% Max Ammo',
        '+50% Spread',
        '+100% Recoil per Shot',
      ],
    },
    description:
      'Unload both barrels at once, no regrets. As an added bonus, the simultaneous firing of both shells has an amplifying effect on the blast wave.',
  },
  {
    name: 'Jumbo Shells',
    id: '0B1A2EC60168C54E9E47CA764C3B70BD',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 8800,
      bismor: 65,
      enorPearl: 105,
      jadiz: 125,
    },
    effects: {
      buffs: ['+8 Damage'],
      nerfs: ['-10 Max Ammo', '+0.5s Reload Time'],
    },
    description:
      'These large shells pack a lot more charge for a big increase in damage, but they also take up more space so total ammo is limited.',
  },
];

export default BoomstickOverclocks;
