import React, { useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { FetchLegs } from '../../redux/actions';
import constants from '../../constants/Constants';
import styles from './FetchedLegs.module.css';


function FetchedLegs() {
    const dispatch=useDispatch();
    const FetchedLegs=useSelector(state=>state.FormDataSlice.FetchedLegs.data);
    const loading=useSelector(state=>state.FormDataSlice.FetchedLegs.loading);

  useEffect(()=>{
  dispatch(FetchLegs())
  },[])

  return (
    <ol className={styles.list}>
        {loading ? <p>{constants.LOADING}</p>
    : FetchedLegs.map((item,i)=>{return <table className={styles.table} key={i}>{Object.keys(item).map((prop,i)=>{return <tr key={i}><td>{i+1}</td><td>{prop}</td><td>{item[prop]}</td></tr>})}</table>})}
    </ol>
  )
}

export default FetchedLegs
