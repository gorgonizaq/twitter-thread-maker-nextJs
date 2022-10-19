import constants from 'helpers/localizations.json';
import styles from './button.module.scss';

interface Props {
  active?: boolean;
  text?: string;
}

const Button = ({ active, text }: Props) => {
  const btnClass = styles.button;
  const activeClass = active ? styles.active : styles.inactive;
  return (
    <span className={`${btnClass} ${activeClass}`}>{text}</span>
  );
}

export default Button
