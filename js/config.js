export {
    config,
    agendaDates
}

const video = {
    length: (25000 - 6000),
    speedFactor: 0.68
}
const autoScroll = {
    duration: 1500
}

const config = {
    video,
    autoScroll: {
        delay: video.length / video.speedFactor - 1000,
        duration: autoScroll.duration
    }
}

const agendaDates = [
  {
    date: "04/11/25",
    venue: "Théâtre de Cornouaille",
    location: "Scène Nationale de Quimper (29)",
    language: "français"
  },
  {
    date: "05/11/25",
    venue: "Théâtre de Cornouaille",
    location: "Scène Nationale de Quimper (29)",
    language: "français & LSF"
  },
  {
    date: "06/11/25",
    venue: "Théâtre de Cornouaille",
    location: "Scène Nationale de Quimper (29)",
    language: "breton"
  },
  {
    date: "13/11/25",
    venue: "La Passerelle",
    location: "Scène Nationale de Saint-Brieuc (22)",
    language: "français & LSF"
  },
  {
    date: "14/11/25",
    venue: "La Passerelle",
    location: "Scène Nationale de Saint-Brieuc (22)",
    language: "breton"
  },
  {
    date: "16/11/25",
    venue: "La Grande Boutique",
    location: "Kergrist-Moelou (22)",
    language: "français"
  },
  {
    date: "20/11/25",
    venue: "Le Sillon",
    location: "Pleubian (22)",
    language: "français"
  },
  {
    date: "10 et 11/12/25",
    venue: "Maison du Théâtre",
    location: "Brest (29)",
    language: "français"
  },
  {
    date: "15 et 16/01/25",
    venue: "La Paillette",
    location: "Rennes (35)",
    language: "français"
  },
  {
    date: "31/01/26",
    venue: "Festival Le Goût des Langues",
    location: "La Balise, Saint Hilaire de Riez (85)",
    language: "français & LSF"
  },
  {
    date: "05/02/26",
    venue: "L'Atelier Culturel",
    location: "Le Family, Landerneau (29)",
    language: "français & LSF"
  }
];