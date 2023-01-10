import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import LegControl from '../components/LegControl/LegControl';
import Legform from '../components/LegForm/Legform';
import AllLegItem from '../components/LegItems/AllLegItem';
import Submit from '../components/LegHandlers/Submit';
import styles from './LegPage.module.css';
import Fetch from '../components/LegHandlers/Fetch';

function LegInterface() {
  const legData=useSelector(state=>state.FormDataSlice.leg_data.length);
  const FetchedData=useSelector(state=>state.FormDataSlice.FetchedLegs.check);
  return (
    <>
    <div className={styles.Legs_Leglist}>
      <Header/>
      <Legform/>
      <LegControl/>
    </div>
    <AllLegItem/>
    {legData>0 && <Submit/>}
    {FetchedData && <Fetch/>}
    </>
  )
}

export default LegInterface
