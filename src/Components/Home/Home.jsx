import React from 'react';
import './Home.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BiPlay } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { useEffect } from 'react';

import { useState } from 'react';

const apiKey = '7952a001d275bd6cf522f9259c1d9d9e';
const url = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/original';
const upcoming = 'upcoming';
const nowPlaying = 'now_playing';
const popular = 'popular';
const topRated = 'top_rated';

const Card = ({ img }) => (
  <Link>
    {' '}
    <img className="card" src={img} alt="cover" />
  </Link>
);

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const [upcomingMovies, SetUpcomingMovies] = useState([]);
  const [nowPlayingMovies, SetUpNowPlayingMovies] = useState([]);
  const [topRatedMovies, SetTopRatedMovies] = useState([]);
  const [populerMovies, SetPopulerMovies] = useState([]);
  const [genres, SetGenre] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      SetUpcomingMovies(results);
    };
    const fetchtopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      SetTopRatedMovies(results);
    };

    const fetchUpopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      SetPopulerMovies(results);
    };

    const fetchnowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      SetUpNowPlayingMovies(results);
    };

    const fetchAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      SetGenre(genres);
    };
    fetchAllGenre();
    fetchUpcoming();
    fetchnowPlaying();
    fetchtopRated();
    fetchUpopular();
  });

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: populerMovies[0]
            ? `url(${`${imgUrl}/${populerMovies[0].poster_path}`})`
            : 'rgb(16, 16, 16)',
        }}
      >
        {populerMovies[0] && <h1>{populerMovies[0].original_title}</h1>}
        {populerMovies[0] && <p>{populerMovies[0].overview}</p>}

        <div>
          <button onClick={() => navigate('/Player')}>
            <BiPlay />
            Play
          </button>
          <button>
            My List
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <Row title={'Now Playing '} arr={nowPlayingMovies} />
      <Row title={'Top Rated Movies'} arr={topRatedMovies} />
      <Row title={'Upcoming Movies'} arr={upcomingMovies} />
      <Row title={'Popular Movies'} arr={populerMovies} />

      <div className="genrebox">
        {genres.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
