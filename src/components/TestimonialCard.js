import styles from './TestimonialCard.module.css';
import { ReactComponent as Star } from '../assets/star.svg';
import repeat from '../utils/repeat';

function TestimonialCard(props) {
  return (
    <article className={styles.testimonialCard}>
      <figure>
        <img src={props.avatar} alt={`${props.name}'s avatar`} />
        <figcaption>{props.name}</figcaption>
      </figure>
      <em>
        {repeat(<Star width={24} height={24} />, props.rating, props.avatar)}
      </em>

      <blockquote cite="https://maps.google.com">{props.review}</blockquote>
    </article>
  );
}

export default TestimonialCard;
