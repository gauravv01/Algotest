import React from 'react';
import Button from '../Common/Button/Button';
import { Link } from 'react-router-dom';
import constants from '../../constants/Constants';
import styles from './Submit.module.css';

function AddLeg() {
   
  return (
    <div>
   <Link to={constants.HOME_PAGE}><Button className={styles.add_legs} >{constants.ADD_LEGS}</Button></Link>
    </div>
  )
}

export default AddLeg