import React from 'react';
import './App.css';

// Importation des images locales
import img1 from './images/betonnière.jpg';
import img2 from './images/switch.jpg';
import img3 from './images/tente.jpg';
import img4 from './images/mariage.jpg';
import img5 from './images/poussette.jpg';
import logo from './images/logo.png'; // Importation de l'image du logo

const articles = [
  {
    id: 1,
    title: 'Betonnière',
    content: 'Location bétonnière sur Montpellier',
    imageUrl: img1,
    price: '€50/mois'
  },
  {
    id: 2,
    title: 'Console de jeu switch',
    content: 'Location console de jeu Nintendo Switch + 2 manettes type Joycon',
    imageUrl: img2,
    price: '€30/mois'
  },
  {
    id: 3,
    title: 'Tente de camping',
    content: 'Location tente de camping Decathlon 2 places',
    imageUrl: img3,
    price: '€60/mois'
  },
  {
    id: 4,
    title: 'Mobilier pour mariage',
    content: 'Location de mobilier pour evenement type mariage, 100 personnes',
    imageUrl: img4,
    price: '€100/jour'
  },
  {
    id: 5,
    title: 'Poussette 1 place',
    content: 'Location poussette pour 2-6 ans 1 place.',
    imageUrl: img5,
    price: '€20/semaines'
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="MonLogo" /> {/* Utilisation de l'image du logo */}
        </div>
        <div className="search-bar">
          <button>Deposer une annonce !</button>
          <input type="text" placeholder="Rechercher..." />
        </div>
        <nav>
          <ul>
            <li>Accueil</li>
            <li>À propos</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        {articles.map(article => (
          <article key={article.id}>
            <img src={article.imageUrl} alt={article.title} />
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
            <div className="article-price">
              <p>{article.price}</p>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
