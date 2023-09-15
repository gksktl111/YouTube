import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.css';
import { useQuery } from '@tanstack/react-query';

export default function CardList() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(['items'], async () => {
    console.log('Loading cards');

    return fetch('data/jpopMockData.json').then((res) => res.json());
  });

  if (isLoading) return <p>Loding....</p>;

  if (error) return <p>{error}</p>;

  const itemsArray = Object.values(items); // items 객체의 값들을 추출하여 새로운 배열 생성

  return (
    <section className={styles.container}>
      {console.log(itemsArray)} {/* itemsArray 출력 */}
      {Array.isArray(itemsArray[5]) && // itemsArray의 마지막 요소가 배열인지 확인
        itemsArray[5].map((item) => (
          <Card
            cardkey={item.id.videoId}
            title={item.snippet.title}
            thumbnails={item.snippet.thumbnails.medium.url}
            channelTitle={item.snippet.channelTitle}
            publishTime={item.snippet.publishTime}
          />
        ))}
    </section>
  );
}
