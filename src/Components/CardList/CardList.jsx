import React, { useState } from 'react';
import Card from '../Card/Card';
import Loding from '../Loding/Loding';
import styles from './CardList.module.css';
import { useQuery } from '@tanstack/react-query';

export default function CardList({ newVideo }) {
  const [videoName, setVideoName] = useState('jpopMockData');
  const Key = process.env.REACT_APP_YOUTUBE_API;

  if (newVideo) {
    console.log('asdad');
    setVideoName(newVideo);
  }

  const {
    isLoading,
    error,
    data: items,
  } = useQuery(['items'], async () => {
    console.log('Loading cards');
    return fetch(`data/${videoName}.json`).then((res) => res.json());

    // return fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=케이&key=${Key}&type=video`
    // ).then((res) => res.json());
  });

  if (isLoading) return <Loding />;

  if (error) return <p>{error}</p>;

  const itemsArray = Object.values(items); // items 객체의 값들을 추출하여 새로운 배열 생성

  return (
    <section className={styles.container}>
      {itemsArray[itemsArray.length - 1].map((item) => (
        <Card
          key={item.id.videoId}
          id={item.id.videoId}
          title={item.snippet.title}
          thumbnails={item.snippet.thumbnails.medium.url}
          channelTitle={item.snippet.channelTitle}
          publishTime={item.snippet.publishTime}
        />
      ))}
    </section>
  );
}
