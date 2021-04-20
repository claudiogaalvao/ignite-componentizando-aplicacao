import { Star, Clock } from 'react-feather';

interface FooterCard {
    title: string;
    rating: string;
    runtime: string;
}

export function FooterCard({title, rating, runtime}: FooterCard) {
    return(
        <div>
            <div className="movie-info">
                <span>{title}</span>
                <div className="meta">
                    <div>
                        <Star /> {rating}
                    </div>

                    <div>
                        <Clock /> {runtime}
                    </div>
                </div>
            </div>
        </div>
    );
}