import React from 'react';
import { Link } from 'react-router-dom';
import { SlotMachine } from './SlotMachine';
import { Play, Share2 } from 'lucide-react';

// Featured games with actual IDs
const FEATURED_GAMES = [
  {
    id: '0b68392b-df3f-43dd-97d6-959a4d4dd089',
    name: 'My Neighbor Totoro',
    slots: [
      [
        "Totoro",
        "Mei",
        "Satsuki",
        "Catbus",
        "Chibi",
        "Chu",
        "Kanta",
        "Granny",
        "Tatsuo",
        "Yasuko"
      ],
      [
        "floats",
        "grows",
        "sleeps",
        "purrs",
        "sprouts",
        "umbrellas",
        "whispers",
        "dreams",
        "flies",
        "dances"
      ],
      [
        "at bus stop",
        "under rain",
        "in forest",
        "on tree top",
        "at shrine",
        "in garden",
        "near tunnel",
        "on cat bus",
        "in field",
        "by creek"
      ]
    ]
  },
  {
    id: '9815fbc7-3675-49a6-a2c5-18a755fda8e2',
    name: 'Dandy World Draw',
    slots: [
      [
        "Goob",
        "Shelly",
        "Toodles",
        "Poppy",
        "Pebble",
        "Chester",
        "Shrimpo",
        "Tisha",
        "Dandy",
        "Boxten"
      ],
      [
        "dances",
        "sneezes",
        "tumbles",
        "sings",
        "giggles",
        "naps",
        "knits",
        "skates",
        "paints",
        "meditates"
      ],
      [
        "on the moon",
        "in jelly",
        "on rainbow bridge",
        "in the clouds",
        "in bubbles",
        "on cotton candy",
        "in hot air balloon",
        "on banana peel",
        "in front of mirror",
        "on pizza"
      ]
    ]
  },
  {
    id: '0bd2171b-80e6-45fd-91da-070f1f36360d',
    name: 'SpongeBob SquarePants',
    slots: [
      [
        "SpongeBob",
        "Patrick",
        "Squidward",
        "Sandy",
        "Mr.Krabs",
        "Plankton",
        "Gary",
        "Pearl",
        "Mrs.Puff",
        "Larry"
      ],
      [
        "flips",
        "bubbles",
        "jellyfishes",
        "dances",
        "snores",
        "cooks",
        "laughs",
        "karates",
        "slides",
        "bounces"
      ],
      [
        "in Krusty Krab",
        "under a rock",
        "in jellyfish fields",
        "in a pineapple",
        "at Goo Lagoon",
        "in Sandy's dome",
        "at driving school",
        "in Chum Bucket",
        "in bubble world",
        "on a seahorse"
      ]
    ]
  }
];

export const FeaturedGames: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {FEATURED_GAMES.map((game) => (
        <div 
          key={game.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-indigo-100"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{game.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{game.description}</p>
            
            {/* Mini Slot Machine Preview */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-4">
              <SlotMachine 
                slots={game.slots}
                isPreview={true}
              />
            </div>

            <div className="flex gap-2">
              <Link
                to={`/game/${game.id}`}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold"
              >
                <Play className="w-4 h-4" />
                Play Now
              </Link>
              <button
                onClick={() => {
                  // Copy share URL to clipboard
                  navigator.clipboard.writeText(`${window.location.origin}/game/${game.id}`);
                }}
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors border border-indigo-200 text-sm font-semibold"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};