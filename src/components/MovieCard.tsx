

import '../styles/movie-card.scss';
import { FooterCard } from './FooterCard';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export function MovieCard(props: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={props.poster}
        alt={props.title}
      />

      <FooterCard title={props.title} rating={props.rating} runtime={props.runtime} />
    </div>
  )
}