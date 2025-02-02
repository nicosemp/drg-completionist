import type { Overclock } from 'types/overclock';

const CryoCannonOverclocks: Overclock[] = [
  {
    name: 'Improved Thermal Efficiency',
    id: 'CE660C4DD9980043A802A17A4569C0AC',
    icon: 'ClipSize',
    type: 'Clean',
    price: {
      credits: 8350,
      croppa: 125,
      enorPearl: 70,
      magnite: 110,
    },
    effects: {
      buffs: ['+25 Tank Capacity', '-25% Pressure Drop Rate'],
      nerfs: [],
    },
    description:
      'Get all you can from your fuel and lose pressure slower from the main chamber.',
  },
  {
    name: 'Tuned Cooler',
    id: '6ADB23B3C8ED884086A88B8107C93CBE',
    icon: 'Cold',
    type: 'Balanced',
    price: {
      credits: 8750,
      bismor: 110,
      magnite: 65,
      umanite: 130,
    },
    effects: {
      buffs: ['+1 Freezing Power', '+0.8 Flow Rate'],
      nerfs: ['+0.2s Charge-up Time', '-20% Pressure Gain Rate'],
    },
    description:
      'Freeze things faster at the cost of a slower pump and turbine.',
  },
  {
    name: 'Flow Rate Expansion',
    id: '88F8EAB206EC7B46A31C8F034B44931A',
    icon: 'Duration',
    type: 'Balanced',
    price: {
      credits: 8900,
      enorPearl: 70,
      jadiz: 100,
      magnite: 125,
    },
    effects: {
      buffs: ['+170% Pressure Gain Rate', '+0.8 Flow Rate'],
      nerfs: ['+125% Pressure Drop Rate'],
    },
    description:
      'A low-volume, high-pressure chamber paired with a high-power pump increases the flow rate and repressurization speed, but lower the max duration of sustained flow.',
  },
  {
    name: 'Ice Spear',
    id: 'D518CB371A32A0449B345E4F58D34C91',
    icon: 'ProjectileSpeed',
    type: 'Balanced',
    price: {
      credits: 8950,
      enorPearl: 60,
      jadiz: 130,
      umanite: 110,
    },
    effects: {
      buffs: ['+Ice Spear'],
      nerfs: ['+1.0s Repressurization Delay'],
    },
    description:
      'Pressing the reload button dumps all the fluid in the chamber directly into the turbine, flash-freezing it and launching an ice projectile. Side effects include an increased recharge delay and, of course, the large amount of fuel used.',
  },
  {
    name: 'Ice Storm',
    id: '7B11755997B6564E97B1032A828EB90F',
    icon: 'Damage',
    type: 'Unstable',
    price: {
      credits: 7200,
      enorPearl: 130,
      magnite: 105,
      umanite: 75,
    },
    effects: {
      buffs: ['+100% Damage', '+100% Damage vs. Frozen'],
      nerfs: [
        '-3 Freezing Power',
        '-75 Tank Capacity',
        '+50% Pressure Drop Rate',
      ],
    },
    description:
      'A change in the fuel mixture (along with some heavy cooler unit tweaks) means a lot more damage -- especially to frozen targets. However, freezing takes longer, and the capacity of the pressure chamber is reduced.',
  },
  {
    name: 'Snowball',
    id: 'C1F16F970C9C1047AF836BF6CBFEBCAD',
    icon: 'Area',
    type: 'Unstable',
    price: {
      credits: 8400,
      jadiz: 90,
      magnite: 70,
      umanite: 130,
    },
    effects: {
      buffs: ['+Snowball', 'Targets Cannot Warm Up Briefly'],
      nerfs: ['-100 Tank Capacity', '+1.0s Repressurization Delay'],
    },
    description:
      'Pressing the reload button shoots all the cryofuel in the chamber at once as an AoE cryo-projectile. Besides the very large amount of fuel consumed, the operation overloads the whole system, resulting in a much longer delay before regaining pressure, and the modifications restrict the total amount of fuel you can carry.',
  },
];

export default CryoCannonOverclocks;
