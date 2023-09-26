import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Loding from '../Loding/Loding';
import styles from './CardList.module.css';
import { useYoutubeVideos } from '../../hooks/useYoutubeVideos';

export default function CardList({ newVideo }) {
  const [videoName, setVideoName] = useState('인기영상');

  useEffect(() => {
    if (newVideo) {
      setVideoName(newVideo);
    }
  }, [newVideo]);

  const { isLoading, error, data: items } = useYoutubeVideos(videoName);

  if (isLoading) return <Loding />;

  if (error) return <p>{error.message}</p>;

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
