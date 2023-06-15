type Beer = Record<string, any>;

import styles from './Beer.module.css';

type Props = {
  beer: Beer;
};
export default function Beer({ beer }: Props) {
  return (
    <div className={styles.beer}>
      <img className={styles.image} src={beer.image_url} alt="Beer Photo" />
      <div className={styles.text}>
        <div className={styles.name}>{beer.name}</div>
        <div className={styles.tagline}>{beer.tagline}</div>
      </div>
    </div>
  );
}
