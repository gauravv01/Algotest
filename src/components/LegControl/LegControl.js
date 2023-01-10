import React from 'react'
import Button from '../Common/Button/Button';
import { useDispatch } from 'react-redux';
import { FormActions } from '../../redux/FormSlice';
import constants from '../../constants/Constants';
import styles from './LegControl.module.css';

function LegControl() {
const dispatch=useDispatch();

const LegAddition=()=>{
dispatch(FormActions.AddLeg())
}

  return (
    <div className={styles.legControl}>
     <Button className={`${styles.button} ${styles.button_primary}`} onClick={LegAddition}>{constants.ADD_LEG}</Button> 
     <Button className={`${styles.button} ${styles.button_cancel}`}>{constants.CANCEL}</Button> 
    </div>
  )
}

export default LegControl
