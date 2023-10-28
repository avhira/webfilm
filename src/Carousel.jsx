/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';

const Carousel = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    setStartIndex(0);
  }, [data]);

  const itemsToShow = data.slice(startIndex, startIndex + 6);
  const handlePrevClick = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleNextClick = () => {
    setStartIndex(Math.min(data.length - 6, startIndex + 1));
  };

  return (
    <section id="Carousel" className="typeFilm container carousel">
      <div className="typeFilm-title">
        <h1>Dibintangi Oleh</h1>
        <div className="carousel-btn">
          <button onClick={handlePrevClick} disabled={startIndex === 0}>
            <ChevronLeft />
          </button>
          <button onClick={handleNextClick} disabled={startIndex >= data.length - 6}>
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="film-wrapper">
        <div className="carousel-container">
          <div className="carousel" style={{ display: 'flex', gap: '1rem' }}>
            {itemsToShow.map((data, i) => (
              <Link to={`/tayang`} className="card-film" key={i}>
                <img src={data.image} alt={data.title} />
                <h3>{data.title}</h3>
                <p>{data.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
