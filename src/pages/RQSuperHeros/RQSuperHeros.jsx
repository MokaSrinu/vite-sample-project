import React from 'react';
import { useQuery } from 'react-query';
import classes from './RQSuperHeros.module.scss';
import axios from 'axios';

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheroes');
}

const RQSuperHeros = () => {
    const { isLoading, data, isError, error } = useQuery('super-heroes', fetchSuperHeros);

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error?.message}</h2>
    }
  return (
    <>
        <h2>RQSuperHeros</h2>
        {data?.data?.map((hero) => (<div key={hero?.name}>{hero?.name}</div>))}
    </>
  )
};

export default RQSuperHeros;
