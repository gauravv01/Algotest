import React from 'react';
import { useSelector} from 'react-redux';
import constants from '../../constants/Constants';
import styles from './FetchedLegs.module.css';


function FetchedLegs() {
    const FetchedLegs=useSelector(state=>state.FormDataSlice.FetchedLegs.data);
    const loading=useSelector(state=>state.FormDataSlice.FetchedLegs.loading);


  return (
    <ol className={styles.list}>
        {loading ? <p>{constants.LOADING}</p>
    : FetchedLegs.map((item,i)=>
    {return <table className={styles.table} key={i}>
        {<thead><tr><th>{i+1}</th></tr></thead>}
        <tbody> {Object.keys(item).map((prop,i)=>
        {return <tr key={i}>
            
            <td>{i+1}</td>
            <td>{prop}</td>
            <td>{item[prop]}</td>
            </tr>})}</tbody>
            </table>})}
    </ol>
  )
}

export default FetchedLegs
