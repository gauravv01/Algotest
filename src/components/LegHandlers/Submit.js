import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { PostLegs } from '../../redux/actions';
import Button from '../Common/Button/Button';
import loadingbar from '../../constants/Images/loading.gif';
import constants from '../../constants/Constants';
import styles from './Submit.module.css';

function Submit() {
    const dispatch=useDispatch();
    const legs=useSelector(state=>state.FormDataSlice.leg_data);
    const loading=useSelector(state=>state.FormDataSlice.FetchedLegs.loading)

    const submitLegs=()=>{
        dispatch(PostLegs(legs))
    }
    // 
  return (
    <>
    <Button className={styles.button} onClick={submitLegs}>{loading ? <img className={styles.loading} src={loadingbar}/>:constants.SUBMIT}</Button> 
    </>
  )
}

export default Submit
