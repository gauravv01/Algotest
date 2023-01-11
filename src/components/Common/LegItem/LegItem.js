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
    const {Lots,PostionType,OptionType,ExpiryKind,EntryType,StrikeParameter,LowerRange,UpperRange,PremiumParameter,StraddleParameter,StraddleValue,MomentumType,MomentumValue,Trail_SLType,Trail_SLValue,Trail_SLValue2}=Form_data;
    const arrSelect=[OptionType,ExpiryKind];
    const arrPremium=[LowerRange,UpperRange];

    function validateInput(){
        if(Booleans.strike)return <SelectInput value={StrikeParameter} onChange={setLegInput.bind(null,id)}  name={key[5]}  data={constants.STRIKE_TYPE.DATA} />
        else if(Booleans.premium)return constants.PREMIUM_DATA.map((item,i)=>{return <PremiumInput key={i} value={arrPremium[i]} label={item} name={key[i+6]} onChange={setLegInput.bind(null,id)}/>})
        else if(Booleans.closest)return <PremiumInput value={PremiumParameter} label={constants.CLOSEST_PREMIUM} name={key[8]} onChange={setLegInput.bind(null,id)}/>
        else if(Booleans.straddle)return <StraddleInput value={StraddleParameter} value_2={StraddleValue} name={key[9]} input_name={key[10]} onChange={setLegInput.bind(null,id)} />
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
        <Input value={Lots} onChange={setLegInput.bind(null,id)} name={key[0]}/>
        </div>
    <SelectInput  value={PostionType} name={key[1]}  data={constants.POSITION.DATA} onChange={setLegInput.bind(null,id)}/>
    {!futures && constants.FORM_DATA.map((item,i)=>{return <SelectInput key={i}  value={arrSelect[i]} name={key[i+2]} data={item.DATA} onChange={setLegInput.bind(null,id)}/>})}
    {!futures && <SelectInput  value={EntryType} label={constants.SELECT_STRIKE} data={constants.STRIKE_CRITERIA.DATA}  onChange={changeStrike.bind(null,id) } name={key[4]}/>}
    {!futures && validateInput()}
    </div>
    <div className={stylezz.leg_item_row}>
    <div className={stylezz.leg_input}>
        <div className={stylezz.momentum_container}>
            <div className={stylezz.container}>
            <CheckboxContainer onClick={validate_momentum.bind(null,id)}>{constants.SIMPLE_MOMENTUM}</CheckboxContainer>
            </div>
            <div className={stylezz.momentum_input_container} style={momentum}>
                <SelectContainer data={constants.SIMPLE_MOMENTUM_DATA} name={key[11]} value={MomentumType} onChange={setLegInput.bind(null,id)}/>
                <Input name={key[12]} value={MomentumValue} onChange={setLegInput.bind(null,id)}/>
            </div>
        </div>
    </div>
    <div className={stylezz.leg_input}>
        <div className={stylezz.optional_container}>
            <CheckboxContainer onClick={validate_trail_Sl.bind(null,id)}>{constants.TRAIL_SL}</CheckboxContainer>
            <div className={stylezz.momentum_input_container} style={trail_Sl}>
                <SelectContainer data={constants.TRAIL_SL_DATA} name={key[13]} value={Trail_SLType} onChange={setLegInput.bind(null,id)}/>
                <Input name={key[14]} value={Trail_SLValue} onChange={setLegInput.bind(null,id)}/>
                <Input name={key[15]} value={Trail_SLValue2} onChange={setLegInput.bind(null,id)}/>
            </div>
        </div>
    </div>
    </div>
    <br/>
  </div>
  )
}

export default LegItem
