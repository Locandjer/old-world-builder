import rulesIndexExport from "./rules-index-export.json";

const additionalOWBRules = {
  "throwing spears": { url: "weapons-of-war/throwing-spear" },
  halberds: { url: "weapons-of-war/halberd" },
  "additional hand weapons": {
    url: "weapons-of-war/two-hand-weapons-additional-hand-weapon",
  },
  "cavalry spears": { url: "weapons-of-war/cavalry-spear" },
  "repeater handguns": { url: "weapons-of-war/repeater-handgun" },
  "hand weapons": { url: "weapons-of-war/hand-weapon" },
  flails: { url: "weapons-of-war/flail" },
  "plague censers": { url: "weapons-of-war/plague-censer" },
  "great weapons": { url: "weapons-of-war/great-weapon" },
  whips: { url: "weapons-of-war/whip" },
  spears: { url: "weapons-of-war/spears" },
  "morning stars": { url: "weapons-of-war/morning-star" },
  blowpipes: { url: "weapons-of-war/blowpipe" },
  "warplock jezzails": { url: "weapons-of-war/warplock-jezzail" },
  handguns: { url: "weapons-of-war/handgun" },
  lances: { url: "weapons-of-war/lance" },
  shortbows: { url: "weapons-of-war/shortbow" },
  "thrusting spears": { url: "weapons-of-war/thrusting-spear" },
  javelins: { url: "weapons-of-war/javelin" },
  longbows: { url: "weapons-of-war/longbow" },
  pistols: { url: "weapons-of-war/pistol" },
  "throwing axes": { url: "weapons-of-war/throwing-axe" },
  warbows: { url: "weapons-of-war/warbow" },
  hellblades: { url: "weapons-of-war/hellblade" },
  "repeater pistols": { url: "weapons-of-war/repeater-pistol" },
  "blackbriar javelins": { url: "weapons-of-war/blackbriar-javelin" },
  drakeguns: { url: "weapons-of-war/drakegun" },
  "great hammers": { url: "weapons-of-war/great-hammer" },
  "brimstone guns": { url: "weapons-of-war/brimstone-gun" },
  clatterguns: { url: "weapons-of-war/clattergun" },
  crossbows: { url: "weapons-of-war/crossbow" },
  "throwing weapons": { url: "weapons-of-war/throwing-weapons" },
  slings: { url: "weapons-of-war/sling" },
  blunderbusses: { url: "weapons-of-war/blunderbuss" },
  "repeater handbows": { url: "weapons-of-war/repeater-handbow" },
  "repeater crossbows": { url: "weapons-of-war/repeater-crossbow" },
  "daemons of khorne": { url: "special-rules/daemon-of-khorne" },
  "daemons of tzeentch": { url: "special-rules/daemon-of-tzeentch" },
  "daemons of nurgle": { url: "special-rules/daemon-of-nurgle" },
  "daemons of slaanesh": { url: "special-rules/daemon-of-slaanesh" },
  "asrai spears": { url: "weapons-of-war/asrai-spear" },
  "asrai longbows": { url: "weapons-of-war/asrai-longbow" },
  ironfists: { url: "weapons-of-war/ironfist" },
  general: { url: "characters/the-general-characters" },
  "moonfire shots": { url: "weapons-of-war/moonfire-shot" },
  "battle standard bearer": { url: "characters/the-battle-standard" },
  champions: { url: "command-groups/champions" },
  musician: { url: "command-groups/musicians" },
  "standard bearer": { url: "command-groups/standard-bearers" },
  "level 1 wizard": { url: "magic/levels-of-wizardry" },
  "level 2 wizard": { url: "magic/levels-of-wizardry" },
  "level 3 wizard": { url: "magic/levels-of-wizardry" },
  "level 4 wizard": { url: "magic/levels-of-wizardry" },
};

export const synonyms = {
  "chracian great blades": "chracian great blade",
  "bows of avelorn": "bow of avelorn",
  "ceremonial halberds": "ceremonial halberd",
  shields: "shield",
  bellower: "bellowers & musicians",
  "revered guardian": "battle standard bearer",
  "patrol leader": "battle standard bearer",
  "sky leader": "battle standard bearer",
  "great cannon": "cannon",
  "repeater bolt thrower": "bolt throwers",
  "bolt thrower": "bolt throwers",
  plagueswords: "plaguesword",
  "steam guns dwarfs": "steam gun dwarfs",
  "har ganeth greatswords": "har ganeth greatsword",
  "dread halberds": "dread halberd",
  fanatics: "fanatic",
  "nasty skulkers": "nasty skulker",
  "leadbelcher guns": "leadbelcher gun",
  "grimfrost weapons": "grimfrost weapon",
  "tiranoc chariots": "tiranoc chariot",
  "steam tank": "empire steam tank",
  halberds: "halberd",
  polearms: "polearm",
  gyrocopters: "gyrocopter",
  boss: "champions",
  marksman: "champions",
  preceptor: "champions",
  seneschal: "champions",
  "skeleton champion": "champions",
  "inner circle preceptor": "champions",
  "doom wolf": "champions",
  "crypt haunter": "champions",
  "crypt ghast": "champions",
  "glade knight": "champions",
  kastellan: "champions",
  sharpshooter: "champions",
  hellwraith: "champions",
  crusher: "champions",
  "demigryph preceptor": "champions",
  "count's champion": "champions",
  vargoyle: "champions",
  lordling: "champions",
  reaver: "champions",
  hag: "champions",
  master: "champions",
  bloodshade: "champions",
  "tower master": "champions",
  "draich master": "champions",
  "wildwood warden": "champions",
  "first knight": "champions",
  "dread knight": "champions",
  bladesinger: "champions",
  "handmaiden of the thorn": "champions",
  "hell knight": "champions",
  plagueridden: "champions",
  "spawn leader": "champions",
  "iridescent horror": "champions",
  "ectoplasmic horror": "champions",
  heartseeker: "champions",
  alluress: "champions",
  "master moulder": "champions",
  sergeant: "champions",
  bloodreaper: "champions",
  nymph: "champions",
  guardian: "champions",
  harbinger: "champions",
  "high sister": "champions",
  groinbiter: "champions",
  snarefinger: "champions",
  "high helm": "champions",
  bloodkine: "champions",
  "gouge-horn": "champions",
  "true-horn": "champions",
  "half-horn": "champions",
  gorehoof: "champions",
  shartak: "champions",
  "maneater captain": "champions",
  thunderfist: "champions",
  "keeper of the flame": "champions",
  nightleader: "champions",
  assassin: "champions",
  greyback: "champions",
  "sea master": "champions",
  "pack leader": "champions",
  "grail guardian": "champions",
  champion: "champions",
  gutlord: "champions",
  desperado: "champions",
  "wild hunter": "champions",
  "wind rider": "champions",
  esquire: "champions",
  elder: "champions",
  "lord's bowmen": "champions",
  "ol' deadeye": "champions",
  "royal champion": "champions",
  sentinel: "champions",
  yeoman: "champions",
  gallant: "champions",
  pyroclaster: "champions",
  villein: "champions",
  paragon: "champions",
  warden: "champions",
  "militia leader": "champions",
  ironbeard: "champions",
  "ripperdactyl champion": "champions",
  prospector: "champions",
  "eternal warden": "champions",
  ironwarden: "champions",
  "prophet of doom": "champions",
  overseer: "champions",
  deathmask: "champions",
  "plague deacon": "champions",
  fangleader: "champions",
  clawleader: "champions",
  "master of arms": "champions",
  "master of arrows": "champions",
  "tomb captain": "champions",
  "master charioteer": "champions",
  "master of horse": "champions",
  kroxigors: "kroxigor",
  ancient: "champions",
  "venerable ancient": "champions",
  "necropolis captain": "champions",
  "boar chariot": "orc boar chariot",
  "wolf chariot": "goblin wolf chariot",
};

export const rulesMap = {
  ...rulesIndexExport,
  ...additionalOWBRules,
};
