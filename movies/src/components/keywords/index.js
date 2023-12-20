import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner';
import { getKeywords } from '../../api/frontend-api';

const MovieKeywords = ({ movieId }) => {
    const { data, isLoading, isError, error } = useQuery(
      ['movieKeywords', movieId],
      () => getKeywords(movieId)
    );

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h2>Movie Keywords</h2>
        <ul>
          {data.keywords.map(keyword => (
            <li key={keyword.id}>{keyword.name}</li>
          ))}
        </ul>
      </div>
    );
};

export default MovieKeywords;