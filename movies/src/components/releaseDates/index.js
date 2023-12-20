import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner';
import { getReleaseDates } from '../../api/frontend-api';

const ReleaseDates = ({ movieId }) => {
    const { data, isLoading, isError, error } = useQuery(
      ['releaseDates', movieId],
      () => getReleaseDates(movieId)
    );

    const englishSpeakingCountries = ['US', 'GB', 'CA', 'AU', 'NZ', 'IE', 'ZA'];

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h2>Release Dates</h2>
        <ul>
          {data.results
            .filter(country => englishSpeakingCountries.includes(country.iso_3166_1))
            .map(country => (
              country.release_dates.map(release => (
                <li key={release.iso_3166_1}>
                  {country.iso_3166_1}: {release.release_date.split('T')[0]} 
                </li>
              ))
            ))}
        </ul>
      </div>
    );
};

export default ReleaseDates;