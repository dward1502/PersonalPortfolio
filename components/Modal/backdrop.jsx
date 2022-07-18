import styles from '../../sass/Home.module.scss';

const backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

export default backdrop;
