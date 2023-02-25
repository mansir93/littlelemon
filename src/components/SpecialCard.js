import styles from './SpecialCard.module.css';

function SpecialCard(props) {
  return (
    <article className={styles.specialCard}>
      <img src={props.image} alt={props.title} />

      <div className={styles.cardBody}>
        <h4>{props.title}</h4>
        <em>${props.price}</em>

        <p>{props.description}</p>

        <a href={props.href}>Order a delivery</a>
      </div>
    </article>
  );
}

export default SpecialCard;
