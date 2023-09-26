import React, { useState } from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';

export default function Card({
  id,
  title,
  thumbnails,
  channelTitle,
  publishTime,
}) {
  const publishedAt = new Date(publishTime);

  const navigate = useNavigate();

  const videoId = useState(id);

  const navigateToDetail = () => {
    navigate(`/detail?video=${videoId[0]}`);
  };

  return (
    <section className={styles.container} key={id} onClick={navigateToDetail}>
      <img src={thumbnails} alt='thumbnails' className={styles.img} />
      <div className={styles.videoDescription}>
        <span className={styles.videoTitle}>{title}</span>
        <div className={styles.videoSubTitle}>
          <span>{channelTitle}</span>
          <span>{formatTimeAgo(publishedAt)}</span>
        </div>
      </div>
    </section>
  );
}

function formatTimeAgo(date) {
  const now = new Date();
  const diff = Math.abs(now - date);

  // 하루가 안 지난 경우
  if (diff < 1000 * 60 * 60 * 24) {
    const hours = Math.floor(diff / (1000 * 60 * 60));
    return `${hours}시간 전`;
  }

  // 하루 이상, 한 달 미만인 경우
  if (diff < 1000 * 60 * 60 * 24 * 30) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `${days}일 전`;
  }

  // 한 달 이상인 경우
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  return `${months}달 전`;
}
