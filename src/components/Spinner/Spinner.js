import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Spinner.module.css';

const Spinner = () => {
  return (
    <Loader
      className={s.loader}
      type="BallTriangle"
      color="rgb(11, 159, 196)"
      height={40}
      width={40}
    />
  );
};

export default Spinner;
