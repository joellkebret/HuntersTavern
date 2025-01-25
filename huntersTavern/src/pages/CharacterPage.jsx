import React from 'react';
import '../styles/CharacterPage.css';

const characters = [
  {
    name: 'Gon Freecss',
    age: '12',
    ability: 'Jajanken',
    imgSrc: 'Gon-Card.jpg',
    description:
      "Gon Freecss is a cheerful and determined young boy with a boundless sense of adventure. Raised on Whale Island, he embarks on a journey to become a Hunter in hopes of finding his father, the legendary Hunter Ging Freecss. Gon demonstrates remarkable resilience, sharp instincts, and unwavering loyalty to his friends.",
  },
  {
    name: 'Killua Zoldyck',
    age: '12',
    ability: 'Godspeed',
    imgSrc: 'Killua-Card.jpg',
    description:
      "Killua Zoldyck is a prodigy from the infamous Zoldyck family of assassins, but he seeks to break free from his dark past to forge his own destiny. Despite his cold and calculating assassin instincts, Killua possesses a playful and loyal nature, forming an unbreakable bond with Gon during the Hunter Exam.",
  },
  {
    name: 'Kurapika',
    age: '17',
    ability: 'Emperor Time',
    imgSrc: 'Kurapika-Card.jpg',
    description:
      "Kurapika is the last surviving member of the Kurta Clan, a once-peaceful tribe known for their Scarlet Eyes, which glow a brilliant red in moments of intense emotion. Driven by an unshakable resolve, Kurapika's primary goal is to avenge his fallen clan by hunting down the Phantom Troupe.",
  },
  {
    name: 'Leorio Paradinight',
    age: '19',
    ability: 'Remote Punch',
    imgSrc: 'Leorio-Card.jpg',
    description:
      "Leorio Paradinight is a passionate and ambitious young man who aspires to become a doctor to provide affordable medical care to those in need. Though he initially appears materialistic and brash, his true motivation is rooted in compassion and a desire to help others.",
  },
  {
    name: 'Hisoka Morow',
    age: 'Unknown',
    ability: 'Bungee Gum',
    imgSrc: 'Hisoka-Card.jpg',
    description:
      "Hisoka Morow is a mysterious and deadly Hunter with an insatiable thirst for powerful opponents. With his unsettling charisma and unpredictable nature, Hisoka thrives on the thrill of battle, often viewing combat as an art form.",
  },
];

function CharacterCard({ name, age, ability, imgSrc, description }) {
  return (
    <div className='Character'>
      <div className='CharacterCard'>
        <img src={imgSrc} alt={`${name} Portrait`} className='CharacterImage' />
        <div className='CharacterContainer'>
          <h4>{name}</h4>
          <p>Age: {age}</p>
          <p>Nen Ability: {ability}</p>
        </div>
      </div>
      
      <div className='CharacterDescription'>
        <p>{description}</p>
      </div>
    </div>
  );
}

function CharacterPage() {
  return (
    <div className='CharacterPage'>
      <div className='CharactersContainer'>
        {characters.map((character, index) => (
          <CharacterCard key={index} {...character} />
        ))}
      </div>
    </div>
  );
}

export default CharacterPage;
