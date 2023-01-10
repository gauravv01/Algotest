import React, { useEffect } from 'react';
import LegItem from '../Common/LegItem/LegItem';
import { useSelector } from 'react-redux';
import styles from './AllLegs.module.css'

function AllLegItem() {

const items=useSelector(state=>state.FormDataSlice.leg_data);
useEffect(()=>{
  console.log(items)

},[items])
  return (
    <div className={styles.all_legs}>
     {items.map((item,i)=><LegItem key={item.id} leg={item}/>) }
     {/* <LegItem/> */}
    </div>
  )
}

export default AllLegItem


