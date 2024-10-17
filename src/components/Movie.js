
import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ title, genre, showtimes, image, isPremiere, labels }) => {
    return (
        <div className={`movie ${isPremiere ? 'premiere' : ''}`}>
            <img src={image} alt={title} className="movie-image" />
            <div className="movie-details">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-genre">{genre}</p>
                <div className="movie-showtimes">
                    {showtimes.map((time, index) => (
                        <span key={index} className="showtime">{time}</span>
                    ))}
                </div>
                {isPremiere && <div className="premiere-label">Premiera</div>}
                {labels && labels.length > 0 && (
                    <div className="labels">
                        {labels.map((label, index) => (
                            <span key={index} className="label">{label}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    showtimes: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    isPremiere: PropTypes.bool,
    labels: PropTypes.arrayOf(PropTypes.string),
};

Movie.defaultProps = {
    isPremiere: false,
    labels: [],
};

export default Movie;