import { useFetchPodCasts } from "./getPodCast";

const podcasts = useFetchPodCasts;

export default function getLen() {
  return podcasts.length;
}
