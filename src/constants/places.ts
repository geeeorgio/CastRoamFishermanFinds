import { PLACES_IMAGES } from './images';

import type { PLACE_INFO_TYPE } from 'src/types';

export const PLACES_LIST: PLACE_INFO_TYPE[] = [
  {
    id: 'willowbend_pool',
    title: 'Willowbend Pool (Alki Beach Park, Seattle)',
    coordinates: {
      latitude: 47.579,
      longitude: -122.4112,
    },
    country: 'United States',
    description:
      'A classic Seattle shoreline with long sightlines and easy shore access. On calm mornings the surface goes glossy and you can work slow retrieves along the edge where small baitfish gather. The vibe is pure “cast with a view”: open sky, water, and a clean horizon that makes even a short session feel like a mini trip.',
    fact: 'Shore structure and gentle current changes often create “feeding lanes” close to the beach.',
    image: PLACES_IMAGES.Willowbend_Pool,
  },
  {
    id: 'mistpine_lake_edge',
    title: 'Mistpine Lake Edge (Müggelsee, Berlin)',
    coordinates: {
      latitude: 52.4348,
      longitude: 13.635,
    },
    country: 'Germany',
    description:
      'Berlin’s biggest lake-feel escape: wide water, soft forest edges, and plenty of bank areas where anglers regularly fish (with the proper permit). Early in the day, light fog and still water make it feel cinematic. Work the transitions—edges near reeds, slight depth changes, and calmer pockets away from boat traffic.',
    fact: 'Overcast light can keep fish cruising longer because they feel less exposed.',
    image: PLACES_IMAGES.Mistpine_Lake_Edge,
  },
  {
    id: 'stonebridge_run',
    title: 'Stonebridge Run (Richmond Lock & Weir, River Thames)',
    coordinates: {
      latitude: 51.4625,
      longitude: -0.3169,
    },
    country: 'United Kingdom',
    description:
      'A legendary Thames stretch where moving water, seams, and eddies form naturally around the lock and weir. This is a “read the flow” spot: you can place casts right where fast meets slow and let the current deliver your presentation. The scenery is timeless London-river energy without feeling chaotic.',
    fact: 'Weirs create oxygenated, food-rich water—fish often hold just off the main push.',
    image: PLACES_IMAGES.Stonebridge_Run,
  },
  {
    id: 'blueglass_reservoir_point',
    title: 'Blueglass Reservoir Point (Gas Works Park, Lake Union)',
    coordinates: {
      latitude: 47.6456,
      longitude: -122.3343,
    },
    country: 'United States',
    description:
      'A clean urban-water session with a skyline backdrop—Lake Union is known for being fishable from accessible shoreline points. When wind lines appear, you can work the edges of surface texture changes and target shaded areas near structure. This spot feels “quick stop, real views,” perfect for a short cast-and-reset.',
    fact: 'Wind pushes surface food; predators often patrol the windward edges.',
    image: PLACES_IMAGES.Blueglass_Reservoir_Point,
  },
  {
    id: 'silver_current_narrows',
    title: 'Silver Current Narrows (Norrström, Central Stockholm)',
    coordinates: {
      latitude: 59.3281,
      longitude: 18.0672,
    },
    country: 'Sweden',
    description:
      'A surprisingly fishy city-water corridor connecting Lake Mälaren and the Baltic. Flow direction and speed create distinct seams; anglers work these like conveyor belts where food drifts through. It’s dramatic water in a compact area—great for focused casting and quick adjustment.',
    fact: 'Norrström is known as a sport-fishing area with species like sea trout and salmon.',
    image: PLACES_IMAGES.Silver_Current_Narrows,
  },
  {
    id: 'sunset_cliff_shore',
    title: 'Sunset Cliff Shore (Porto di Anzio, breakwater/harbor rocks)',
    coordinates: {
      latitude: 41.4499,
      longitude: 12.6287,
    },
    country: 'Italy',
    description:
      'Harbor structure + open sea = a reliable “evening cast” scene. The breakwater creates calm pockets beside moving water, and dusk brings that classic golden horizon over the Tyrrhenian. Fish the edge where waves meet the protected side—clean, repeatable lines with a strong coastal vibe.',
    fact: 'Low light at dusk often increases shoreline activity for many coastal species.',
    image: PLACES_IMAGES.Sunset_Cliff_Shore,
  },
  {
    id: 'fernshadow_creek',
    title: 'Fernshadow Creek (River Dodder, Dublin)',
    coordinates: {
      latitude: 53.296,
      longitude: -6.3052,
    },
    country: 'Ireland',
    description:
      'A real city-creek that still feels green and intimate. The Dodder is known for trout fishing stretches; it’s a “quiet steps, short casts” kind of water where undercut banks, roots, and bends matter more than distance. Perfect for a calm session with scenery that feels surprisingly wild for a city.',
    fact: 'Trout commonly hold in shade lines and deeper pockets along bends.',
    image: PLACES_IMAGES.Fernshadow_Creek,
  },
  {
    id: 'amber_sandbar_bend',
    title: 'Amber Sandbar Bend (Lac Daumesnil, Bois de Vincennes)',
    coordinates: {
      latitude: 48.8305,
      longitude: 2.4137,
    },
    country: 'France',
    description:
      'A Paris fishing classic inside a huge park—calm water, tree reflections, and easy walk-up access. It’s great for slow, patient techniques and relaxed sessions where the scenery does half the work. Expect structured edges, small bays, and quiet corners that fish use as cover.',
    fact: 'Public fishing in France typically requires a permit (“carte de pêche”).',
    image: PLACES_IMAGES.Amber_Sandbar_Bend,
  },
  {
    id: 'pinecone_peninsula',
    title: 'Pinecone Peninsula (Trevignano Romano, Lake Bracciano shore)',
    coordinates: {
      latitude: 42.1557,
      longitude: 12.2458,
    },
    country: 'Italy',
    description:
      'Lake Bracciano’s shoreline near Trevignano gives you that perfect peninsula-style advantage: multiple casting angles, gentle wave action, and clear scenic water with mountain-lake calm. It’s an “all-day view” location—walk, pause, cast, repeat.',
    fact: 'Points/peninsulas act like underwater crossroads—fish often pass along their edges.',
    image: PLACES_IMAGES.Pinecone_Peninsula,
  },
  {
    id: 'glassy_dawn_marina',
    title: 'Glassy Dawn Marina (Odaiba Marine Park, Tokyo Bay)',
    coordinates: {
      latitude: 35.629,
      longitude: 139.7734,
    },
    country: 'Japan',
    description:
      'A famous waterfront park with rocky shoreline sections where people fish while looking at Rainbow Bridge views. Early morning can be incredibly still, and structure (rocks/edges) gives fish shade and ambush points. It’s ideal for short sessions that feel visually “big.”',
    fact: 'Shoreline structure concentrates baitfish; predators often patrol the same lines.',
    image: PLACES_IMAGES.Glassy_Dawn_Marina,
  },
  {
    id: 'cedar_echo_cove',
    title: 'Cedar Echo Cove (Brockton Point, Stanley Park Seawall)',
    coordinates: {
      latitude: 49.292,
      longitude: -123.1442,
    },
    country: 'Canada',
    description:
      'A scenic seawall headland with iconic Vancouver views and known shore-fishing potential. Currents and depth changes near points make this a classic “work the edge” spot—cast along the contour, then adjust depth and retrieve speed. The scenery is top-tier: water, mountains, and city in one frame.',
    fact: 'Headlands often have stronger current breaks that fish use for ambush.',
    image: PLACES_IMAGES.Cedar_Echo_Cove,
  },
  {
    id: 'startrail_riverwalk',
    title: 'Startrail Riverwalk (Riumar, Ebro Delta access area)',
    coordinates: {
      latitude: 40.728,
      longitude: 0.8343,
    },
    country: 'Spain',
    description:
      'Ebro Delta energy: wide skies, open water, and that “where freshwater meets coastal influence” feel nearby. This is a roam-friendly base point—easy to explore banks and channels, find calmer pockets, and fish edges where flow direction subtly changes. It’s scenic, flat, and perfect for a travel mini-app vibe.',
    fact: 'Delta zones often create mixed conditions (current + tide influence) that shift fish positioning hour to hour.',
    image: PLACES_IMAGES.Startrail_Riverwalk,
  },
  {
    id: 'wildflower_lake_path',
    title: 'Wildflower Lake Path (Spiez, Lake Thun shore)',
    coordinates: {
      latitude: 46.6847,
      longitude: 7.6911,
    },
    country: 'Switzerland',
    description:
      'Alpine-lake scenery with clean water and postcard mountains. Along the Spiez shoreline you get walkable access, clear visibility, and that “calm precision” style of fishing—lighter gear, careful movement, and targeting depth changes close to shore. Even a short stop feels premium.',
    fact: 'In clear water, subtle presentation and lighter line can matter a lot.',
    image: PLACES_IMAGES.Wildflower_Lake_Path,
  },
  {
    id: 'rainkissed_canal_corner',
    title: 'Rainkissed Canal Corner (Amstel River by Magere Brug)',
    coordinates: {
      latitude: 52.3635,
      longitude: 4.9023,
    },
    country: 'Netherlands',
    description:
      'A canal/river edge with classic Amsterdam reflections—best right after rain when the surface turns into soft ripples and light streaks. Fish relate to hard edges, corners, and shadow lines; you don’t need huge casts, just neat placement.',
    fact: 'In structured waterways, shade lines and corners are repeatable “hold zones.”',
    image: PLACES_IMAGES.Rainkissed_Canal_Corner,
  },
  {
    id: 'driftwood_beach_pocket',
    title: 'Driftwood Beach Pocket (Piha, West Coast Auckland)',
    coordinates: {
      latitude: -36.9565,
      longitude: 174.4676,
    },
    country: 'New Zealand',
    description:
      'Black sand, dramatic surf, and an instantly cinematic coastline. This is a “watch the water first” beach: look for outgoing channels, darker troughs, and wave irregularities that hint at depth. Even if you stay only an hour, it feels like a full trip.',
    fact: 'Surf structure changes constantly—fishable lanes can appear and disappear with tide and swell.',
    image: PLACES_IMAGES.Driftwood_Beach_Pocket,
  },
  {
    id: 'whisperfall_bend',
    title: 'Whisperfall Bend (Remic Rapids Park, Ottawa River)',
    coordinates: {
      latitude: 45.4104,
      longitude: -75.7442,
    },
    country: 'Canada',
    description:
      'A scenic riverside park with rapids nearby—moving water creates oxygen and food drift, and the shoreline is easy to roam. It’s great for that “walk, read the current, cast into seams” style. The mood is outdoorsy and calm without being remote.',
    fact: 'Fish often sit just off the fastest water and strike as food drifts past the seam.',
    image: PLACES_IMAGES.Whisperfall_Bend,
  },
  {
    id: 'mirrorcloud_lagoon',
    title: 'Mirrorcloud Lagoon (Harlem Meer, Central Park)',
    coordinates: {
      latitude: 40.7965,
      longitude: -73.9519,
    },
    country: 'United States',
    description:
      'A real, fishable city lake known for catch-and-release style sessions. The shoreline wraps with small coves and gentle edges—perfect for relaxed casting and light tackle. It’s the definition of “quick escape,” where the view is surprisingly peaceful for Manhattan.',
    fact: 'Harlem Meer is a recognized fishing area in Central Park.',
    image: PLACES_IMAGES.Mirrorcloud_Lagoon,
  },
  {
    id: 'frostlight_river_terrace',
    title: 'Frostlight River Terrace (Vanhankaupunginkoski, Helsinki rapids)',
    coordinates: {
      latitude: 60.2163,
      longitude: 24.981,
    },
    country: 'Finland',
    description:
      'One of Helsinki’s best-known fishing spots: rapids, park paths, and that crisp northern light that makes water look sharp and dramatic. The flow creates pockets, seams, and holding zones; you can rotate angles easily and keep the session active without moving far.',
    fact: 'Rapids often stay oxygen-rich, which can keep fish responsive even in cooler periods.',
    image: PLACES_IMAGES.Frostlight_River_Terrace,
  },
];
