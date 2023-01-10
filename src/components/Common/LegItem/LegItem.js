import React from 'react';
import constants from '../../../constants/Constants';
import { Input, PremiumInput, SelectInput, StraddleInput, Label} from '../../Common/SelectInput/SelectInput';
import { useDispatch} from 'react-redux';
import { FormActions } from '../../../redux/FormSlice';
import { CheckboxContainer, SelectContainer } from './Common';
import Delete from '../../../constants/Images/delete_icon.png';
import Copy from '../../../constants/Images/copy_btn.svg';
import stylezz from './LegItem.module.css';
import styles from '../../LegForm/LegForm.module.css';


function LegItem({leg}) {
    const dispatch=useDispatch();
    const validate_momentum=(id,e)=>{
        dispatch(FormActions.validateMomentum({id:id,check:e.target.checked}))
    }
    const validate_trail_Sl=(id,e)=>{
        dispatch(FormActions.validatetrail_Sl({id:id,check:e.target.checked}))
    }

    const setLegInput=(id,e)=>{
        dispatch(FormActions.setLegInput({id:id,key:e.target.name,value:e.target.value}))
    }
    const changeStrike=(id,e)=>{
        dispatch(FormActions.setLegInput({id:id,key:e.target.name,value:e.target.value}));
        dispatch(FormActions.validateLegInput({id:id}))
    }
  
    const deleteLeg=(id)=>{
        dispatch(FormActions.DeleteLeg(id))
    }
    const legCopy=(id)=>{
        dispatch(FormActions.CopyLeg(id))
    }
    const {futures,Booleans,Form_data,id,momentum,trail_Sl}=leg;
    const key=Object.keys(Form_data);
    const { total_lot,position,option_type,expiry,criteria,strike_type,lower_range,upper_range,premium_data,straddle_data,straddle_input,momentum_dropdown,momentum_input,trail_Sl_dropdown,trail_Sl_input,trail_Sl_input_2}=Form_data;
    const arrSelect=[option_type,expiry];
    const arrPremium=[lower_range,upper_range];
    

    function validateInput(){
        if(Booleans.strike)return <SelectInput value={strike_type} onChange={setLegInput.bind(null,id)}  name={key[5]}  data={constants.STRIKE_TYPE.DATA} />
        else if(Booleans.premium)return constants.PREMIUM_DATA.map((item,i)=>{return <PremiumInput key={i} value={arrPremium[i]} label={item} name={key[i+6]} onChange={setLegInput.bind(null,id)}/>})
        else if(Booleans.closest)return <PremiumInput value={premium_data} label={constants.CLOSEST_PREMIUM} name={key[8]} onChange={setLegInput.bind(null,id)}/>
        else if(Booleans.straddle)return <StraddleInput value={straddle_data} value_2={straddle_input} name={key[9]} input_name={key[10]} onChange={setLegInput.bind(null,id)} />
      }

  return (
    <div className={stylezz.leg_item}>
    <img src={Delete} alt='Delete' className={stylezz.leg_delete_btn} onClick={deleteLeg.bind(null,id)}/>
    <div className={stylezz.leg_copy_btn} onClick={legCopy.bind(null,id)}>
        <img src={Copy} alt='copy' />
    </div>
    <div className={stylezz.leg_item_row}>
        <div className={stylezz.number}>
        <Label className={styles.number_label} label={constants.LOTS}/>
        <Input value={total_lot} onChange={setLegInput.bind(null,id)} name={key[0]}/>
        </div>
    <SelectInput  value={position} name={key[1]}  data={constants.POSITION.DATA} onChange={setLegInput.bind(null,id)}/>
    {!futures && constants.FORM_DATA.map((item,i)=>{return <SelectInput key={i}  value={arrSelect[i]} name={key[i+2]} data={item.DATA} onChange={setLegInput.bind(null,id)}/>})}
    {!futures && <SelectInput  value={criteria} label={constants.SELECT_STRIKE} data={constants.STRIKE_CRITERIA.DATA}  onChange={changeStrike.bind(null,id) } name={key[4]}/>}
    {!futures && validateInput()}
    </div>
    <div className={stylezz.leg_item_row}>
    <div className={stylezz.leg_input}>
        <div className={stylezz.momentum_container}>
            <div className={stylezz.container}>
            <CheckboxContainer onClick={validate_momentum.bind(null,id)}>{constants.SIMPLE_MOMENTUM}</CheckboxContainer>
            </div>
            <div className={stylezz.momentum_input_container} style={momentum}>
                <SelectContainer data={constants.SIMPLE_MOMENTUM_DATA} name={key[11]} value={momentum_dropdown} onChange={setLegInput.bind(null,id)}/>
                <Input name={key[12]} value={momentum_input} onChange={setLegInput.bind(null,id)}/>
            </div>
        </div>
    </div>
    <div className={stylezz.leg_input}>
        <div className={stylezz.optional_container}>
            <CheckboxContainer onClick={validate_trail_Sl.bind(null,id)}>{constants.TRAIL_SL}</CheckboxContainer>
            <div className={stylezz.momentum_input_container} style={trail_Sl}>
                <SelectContainer data={constants.TRAIL_SL_DATA} name={key[13]} value={trail_Sl_dropdown} onChange={setLegInput.bind(null,id)}/>
                <Input name={key[14]} value={trail_Sl_input} onChange={setLegInput.bind(null,id)}/>
                <Input name={key[15]} value={trail_Sl_input_2} onChange={setLegInput.bind(null,id)}/>
            </div>
        </div>
    </div>
    </div>
    <br/>
  </div>
  )
}

export default LegItem
