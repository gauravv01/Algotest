import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { FormActions } from '../../redux/FormSlice';
import constants from '../../constants/Constants';
import styles from './Header.module.css';

function Header() {
  const dispatch=useDispatch();
const toggle=useSelector(state=>state.FormDataSlice.futures);

  const setFutures=()=>{
    dispatch(FormActions.setFutures())
  }
  const setOptions=()=>{
    dispatch(FormActions.setOptions())
  }
  const futureClassName=toggle ? styles.options:'';
  const optionClassName=!toggle ? styles.options:'';

  return (
    <div className={styles.trading_options}>
      <label className={styles.heading}>{constants.SELECT_SEGMENT}</label>
      <div className={styles.trading_options}  >
        <input id='futures' type='radio'  className={futureClassName} />
        <label htmlFor='futures'  className={styles.label} onClick={setFutures}>{constants.FUTURES}</label>
        <input id='option' type='radio' className={optionClassName}/>
        <label htmlFor='option' className={styles.label} onClick={setOptions}>{constants.OPTIONS}</label>
      </div>
    </div>
  )
}

export default Header
