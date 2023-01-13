import React from 'react';
import { Input, PremiumInput, SelectInput, StraddleInput, Label} from '../Common/SelectInput/SelectInput';
import { useSelector,useDispatch } from 'react-redux';
import { FormActions } from '../../redux/FormSlice';
import styles from './LegForm.module.css';
import constants from '../../constants/Constants';

function Legform({label}) {
    const dispatch=useDispatch();
    const data=useSelector(state=>state.FormDataSlice);
   
     const handleChange=(e)=>{
     dispatch(FormActions.setFormInput({key:e.target.name,value:e.target.value}))
       }
       const changeStrike=(e)=>{
        handleChange(e);
        dispatch(FormActions.validateInput())
       }

const {Booleans,Form_data,futures}=data;
const {Lots,PostionType,OptionType,ExpiryKind,EntryType,StrikeParameter,LowerRange,UpperRange,PremiumParameter,StraddleParameter,StraddleValue}=Form_data;
const {strike,premium,closest,straddle}=Booleans;
const arrSelect=[OptionType,ExpiryKind];
const arrPremium=[LowerRange,UpperRange];
const key=Object.keys(Form_data);

function validateInput(){
    if(strike)return <SelectInput  value={StrikeParameter} onChange={handleChange} label={constants.STRIKE_TYPE.LABEL} name={key[5]}  data={constants.STRIKE_TYPE.DATA} />
    else if(premium)return constants.PREMIUM_DATA.map((item,i)=>{return <PremiumInput key={i} value={arrPremium[i]} label={item} name={key[i+6]} onChange={handleChange}/>})
    else if(closest)return <PremiumInput value={PremiumParameter} label={constants.CLOSEST_PREMIUM} name={key[8]} onChange={handleChange}/>
    else if(straddle)return <StraddleInput value={StraddleParameter} value_2={StraddleValue} name={key[9]} input_name={key[10]} onChange={handleChange} />
}

  return (
    <div className={ styles.Legbuilder}>
        <div className={styles.number}>
        <Label className={styles.number_label} label={ constants.TOTAL_LOT}/>
        <Input value={Lots} onChange={handleChange} name={key[0]}/>
        </div>
     <SelectInput  value={PostionType} name={key[1]} label={constants.POSITION.LABEL} data={constants.POSITION.DATA} onChange={handleChange}/>
    {!futures && constants.FORM_DATA.map((item,i)=>{return <SelectInput key={i}  value={arrSelect[i]} name={key[i+2]} label={item.LABEL} data={item.DATA} onChange={handleChange}/>})}
    {!futures && <SelectInput  value={EntryType} label={label || constants.STRIKE_CRITERIA.LABEL} data={constants.STRIKE_CRITERIA.DATA}  onChange={changeStrike } name={key[4]}/>}
    {!futures && validateInput()}
    </div>
  )
}

export default Legform
