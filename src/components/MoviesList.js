import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    console.log(movies);
    
    const renderMovies = Object.keys(movies).map((movieID) => (
        <li key={movieID}>
            <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
        </li>
    ));
    
    return (
        <div>
            <h2>Movies List</h2>
            <ul>
                {renderMovies}
            </ul>
        </div>
    );
}

export default MoviesList;
