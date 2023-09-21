import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Loding from '../Components/Loding/Loding';
import style from './Detail.module.css';

export default function Detail() {
  let [vidoeIds] = useSearchParams();
  let videoId = vidoeIds.get('video');

  const Key = process.env.REACT_APP_YOUTUBE_API;

  const {
    isLoading,
    error,
    data: items,
  } = useQuery(['items', videoId], async () => {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${Key}`
    ).then((res) => res.json());
  });

  if (isLoading) return <Loding />;

  if (error) return <p>{error.message}</p>;

  return (
    <div className={style.container}>
      <iframe
        className={style.video}
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen // 변경된 부분
      ></iframe>
      <span className={style.video__title}>{items.items[0].snippet.title}</span>
      <div className={style.video__description}>
        {items.items[0].snippet.description}
      </div>
    </div>
  );
}
