export interface SlotTemplate {
  id: string;
  name: string;
  slots: string[][];
}

export const TEMPLATES: SlotTemplate[] = [
  {
    id: 'holiday-christmas',
    name: 'Holiday: Christmas',
    slots: [
      ['🎄','🎅','🎁','❄️','⭐'],
      ['lights','cookies','snow','bells','songs'],
      ['home','market','forest','church','square']
    ]
  },
  {
    id: 'holiday-newyear',
    name: 'Holiday: New Year',
    slots: [
      ['🎆','🥂','🎉','🕛','✨'],
      ['cheers','countdown','dance','toast','wish'],
      ['party','square','rooftop','river','home']
    ]
  },
  {
    id: 'education-rewards',
    name: 'Education: Classroom Rewards',
    slots: [
      ['⭐','🎓','📚','✏️','🧠'],
      ['bonus','free time','sticker','high five','badge'],
      ['math','science','art','music','sports']
    ]
  },
  {
    id: 'marketing-promo',
    name: 'Marketing: Promo Picker',
    slots: [
      ['10%','20%','30%','BOGO','FREE'],
      ['coupon','gift','shipping','upgrade','swag'],
      ['today','weekend','limited','flash','vip']
    ]
  },
  {
    id: 'party-games',
    name: 'Party: Game Night',
    slots: [
      ['🃏','🎲','🎮','🧩','🎯'],
      ['teams','solo','duo','challenge','speed'],
      ['first','next','last','wild','bonus']
    ]
  },
  {
    id: 'wheel-dinner',
    name: 'Life: Dinner Picker',
    slots: [
      ['🍣','🍕','🥗','🍔','🌮'],
      ['spicy','sweet','savory','fresh','crispy'],
      ['home','takeout','delivery','picnic','friends']
    ]
  },
  {
    id: 'content-ideas',
    name: 'Content: Idea Generator',
    slots: [
      ['tutorial','review','vlog','challenge','story'],
      ['short','long','live','series','collab'],
      ['tech','art','travel','food','music']
    ]
  },
  {
    id: 'emoji-fun',
    name: 'Emoji Fun',
    slots: [
      ['🎈','🎉','🎨','🎭','🎵'],
      ['spin','bounce','glow','sparkle','cheer'],
      ['garden','stage','park','street','studio']
    ]
  },
  {
    id: 'event-raffle',
    name: 'Event: Raffle',
    slots: [
      ['Bronze','Silver','Gold','Platinum','Diamond'],
      ['ticket','winner','bonus','jackpot','gift'],
      ['today','tonight','weekly','monthly','annual']
    ]
  },
  {
    id: 'team-selector',
    name: 'Team Selector',
    slots: [
      ['Alpha','Bravo','Charlie','Delta','Echo'],
      ['red','blue','green','yellow','purple'],
      ['1','2','3','4','5']
    ]
  },
  {
    id: 'genshin-style',
    name: 'Game: Gacha Style',
    slots: [
      ['⚔️','🛡️','🏹','🔮','💫'],
      ['rare','epic','legend','common','mythic'],
      ['artifact','weapon','skill','pet','mount']
    ]
  },
  {
    id: 'bfdi-characters',
    name: 'BFDI Characters',
    slots: [
      ['Leafy','Firey','Bubble','Coiny','Pin'],
      ['wins','fails','laughs','cries','tries'],
      ['today','tomorrow','soon','later','never']
    ]
  },
  {
    id: 'dandy-world',
    name: 'Dandy’s World',
    slots: [
      ['Goob','Shelly','Toodles','Poppy','Pebble'],
      ['dances','sneezes','tumbles','sings','giggles'],
      ['in jelly','on rainbow','in clouds','in bubbles','on pizza']
    ]
  },
  {
    id: 'class-name-picker',
    name: 'Class: Name Picker',
    slots: [
      ['Alice','Bob','Carol','Dave','Eve'],
      ['presents','answers','shares','leads','hosts'],
      ['morning','afternoon','evening','today','tomorrow']
    ]
  },
  {
    id: 'work-icebreaker',
    name: 'Work: Icebreaker',
    slots: [
      ['Tell a story','Share a tip','Show a photo','Give a fact','Ask a Q'],
      ['funny','serious','random','helpful','surprising'],
      ['now','next','later','end','break']
    ]
  },
  {
    id: 'music-mashup',
    name: 'Music Mashup',
    slots: [
      ['rock','pop','jazz','hiphop','classical'],
      ['fast','slow','chill','energetic','ambient'],
      ['morning','workout','study','party','sleep']
    ]
  },
  {
    id: 'random-adventure',
    name: 'Random Adventure',
    slots: [
      ['forest','city','beach','mountain','desert'],
      ['walk','drive','fly','sail','ride'],
      ['alone','friends','family','date','team']
    ]
  },
  {
    id: 'kids-rewards',
    name: 'Kids Rewards',
    slots: [
      ['sticker','toy','screen time','park','story'],
      ['5 min','10 min','15 min','30 min','60 min'],
      ['now','after lunch','evening','weekend','holiday']
    ]
  },
  {
    id: 'emoji-only',
    name: 'Emoji Only',
    slots: [
      ['😀','😎','🥳','🤩','🤖'],
      ['🍕','🍔','🍟','🌮','🍣'],
      ['🚗','🚌','🚲','✈️','🚀']
    ]
  },
  {
    id: 'events-challenge',
    name: 'Events: Challenge',
    slots: [
      ['speed','memory','balance','skill','luck'],
      ['easy','normal','hard','extreme','random'],
      ['solo','duo','team','vs','coop']
    ]
  }
];