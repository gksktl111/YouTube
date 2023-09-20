import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from '../Components/CardList/CardList';

export default function Video() {
  let [searchParams] = useSearchParams();
  let searchTerm = searchParams.get('search');

  return (
    <>
      <CardList newVideo={searchTerm} />
    </>
  );
}
