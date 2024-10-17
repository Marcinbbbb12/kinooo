
import React from 'react';
import MovieList from './components/MovieList';

const App = () => {
  const movies = [
    {
      title: "DZIKI ROBOT",
      genre: "Akcja",
      showtimes: ["12:00", "16:00"],
      image: "https://www.stylowy.net/data/film/35/3599_500x720.jpg",
      isPremiere: false,
      labels: []
    },
    {
      title: "TODYS KSIEGA DŻUNGLI",
      genre: "Komedia",
      showtimes: ["14:00", "18:00"],
      image: "https://emp-scs.img-osdw.pl/img-p/1/egmont/c477cb96/std/10e-19a/80479259o.webp",
      isPremiere: true,
      labels: ["Dla Dzieci"]
    },
    {
      title: "KULEJ. DWIE STRONY MEDALU",
      genre: "Dramat",
      showtimes: ["10:00", "20:00"],
      image: "https://www.stylowy.net/data/film/35/3593_500x720.jpg",
      isPremiere: true,
      labels: []
    },
    {
      title: "MÓJ PRZYJACIEL PINGWIN",
      genre: "Horror",
      showtimes: ["11:00", "21:00"],
      image: "https://www.stylowy.net/data/film/35/3592_500x720.jpg",
      isPremiere: false,
      labels: ["Sala Studyjna"]
    },
    {
      title: "TERRIFIER 3",
      genre: "Familijny",
      showtimes: ["13:00", "19:00"],
      image: "https://www.stylowy.net/data/film/36/3603_500x720.jpg",
      isPremiere: false,
      labels: ["Studyjny"]
    }
  ];

  return (
      <div className="app">
        <h1>Repertuar Kina Stylowy</h1>
        <MovieList movies={movies} />
      </div>
  );
};

export default App;