import { useQuery } from '@tanstack/react-query';

export function useYoutubeVideos(videoName) {
  const Key = process.env.REACT_APP_YOUTUBE_API;

  return useQuery(
    ['items', videoName],
    async () => {
      console.log('fetching video');
      return fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${videoName}&key=${Key}&type=video`
      ).then((res) => res.json());
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
}
