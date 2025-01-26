import React from 'react';
import '../styles/LocationPage.css';

const locations = [
  {
    name: 'Whale Island',
    imgSrc: 'whale-island.jpg',
    description:
      "Whale Island is a peaceful and scenic place where Gon Freecss grew up. Surrounded by lush forests and beautiful seas, it is known for its close-knit community and fishing culture.",
  },
  {
    name: 'Yorknew City',
    imgSrc: 'yorknew-city.jpg',
    description:
      "Yorknew City is a bustling metropolis filled with skyscrapers, markets, and hidden dangers. It's home to the famous Yorknew Auction, where priceless treasures and dark secrets await.",
  },
  {
    name: 'Kukoroo Mountain',
    imgSrc: 'kukuroo-mountain.jpg',
    description:
    "Kukuroo Mountain is the secluded and heavily guarded home of the infamous Zoldyck family, the world's most feared assassins. Nestled within towering peaks and surrounded by dense forests, the mountain conceals a massive estate equipped with deadly traps and elite guards. Few outsiders have ever set foot beyond its gates and lived to tell the tale."
  },
  {
    name: 'Greed Island',
    imgSrc: 'greed-island.jpg',
    description:
      "Greed Island is a mysterious and dangerous virtual world created by Nen users. It serves as a real-life video game where players must collect cards and overcome various challenges to succeed.",
  },
];

function Location({ name, imgSrc, description }) {
  return (
    <div className='Location'>
      <img src={imgSrc} alt={`${name}`} className='LocationImage' />
      <div className='LocationContent'>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function LocationPage() {
  return (
    <div className='LocationPage'>
      <div className='LocationsContainer'>
        {locations.map((location, index) => (
          <Location key={index} {...location} />
        ))}
      </div>
    </div>
  );
}

export default LocationPage;
