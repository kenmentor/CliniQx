// Curated real-world clinical photography (Unsplash CDN).
// All URLs are direct images.unsplash.com assets with crop params —
// no local binaries needed, lazy-loaded, with brand-tinted fallbacks.

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  heroMain: u('photo-1576091160399-112ba8d25d1d', 1400),
  heroTeam: u('photo-1551601651-2a8555f1a136', 800),
  clinical: u('photo-1579684385127-1ef15d508118', 900),
  operations: u('photo-1538108149393-fbbd81895907', 900),
  connected: u('photo-1576091160550-2173dba999ef', 900),
  consult: u('photo-1519494026892-80bbd2d6fd0d', 900),
  facility: u('photo-1504439468489-c8920d796a29', 900),
  billing: u('photo-1454165804606-c3d57bc86b40', 900),
  research: u('photo-1579154204601-01588f351e67', 900),
  emergency: u('photo-1516549655169-df83a0774514', 1000),
  lab: u('photo-1579154204601-01588f351e67', 1000),
  avatar1: u('photo-1559839734-2b71ea197ec2', 200),
  avatar2: u('photo-1612349317150-e413f6a5b16d', 200),
  avatar3: u('photo-1622253692010-333f2da6031d', 200),
};
