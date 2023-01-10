import React from 'react';
import { useDispatch} from 'react-redux';
import { FetchLegs } from '../../redux/actions';
import Button from '../Common/Button/Button';
import { Link } from 'react-router-dom';
import constants from '../../constants/Constants';
import styles from './Submit.module.css';

function Fetch() {
    const dispatch=useDispatch();
    
    const getData=()=>{
        dispatch(FetchLegs())
    }
   
  return (
    <>
    <Link to={constants.DATA_PAGE}><Button className={styles.button} onClick={getData}>{constants.FETCH}</Button></Link>
    </>
  )
}

export default Fetch
