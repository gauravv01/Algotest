import constants from '../../../constants/Constants';
import styles from './SelectInput.module.css';

export function SelectInput({label,data,value,onChange,name}){
    return(
    <div className={styles.legbuilder_select}>
        <Label className={styles.select_label} label={label}/>
        <SelectDiv data={data} value={value} onChange={onChange} name={name}/>
    </div>
)}

export function SelectDiv({data,value,onChange,name}){
    return  <span className={styles.select_container}>
    <select className={styles.select_input} value={value} onChange={onChange} name={name}>
      {data.map((item,i)=>{ return <option key={i}>{item}</option>})}
    </select>
    <span className={styles.select_chevron}></span>
</span>
}

export function PremiumInput({label,value,onChange,name}){
    return(
    <div className={styles.number}>
        <Label className={styles.number_label} label={label}/>
        <span className={styles.number_input}>
           <input className={styles.number_number_input} type='number' min='1' value={value} onChange={onChange} name={name}/>
            {/* <span className={styles.select_chevron}></span> */}
        </span>
    </div>
)}

export function Label({className,label}){
    return <label className={className || styles.label_row_3}>{label}</label>
}

export function Input({value,onChange,name}){
    return <div className={styles.number}>
    <div className={styles.number_input}>
        <input className={styles.number_number_input} type='number' min='1' value={value} name={name} onChange={onChange}/> 
    </div>
  </div>
}

export function StraddleInput({value,value_2,onChange,name,input_name}){
    return(
        <div className={styles.legbuilder_straddle}>
            <Label label={constants.STRADDLE_INPUTS.LABEL_1}/>
            <Label label={constants.STRADDLE_INPUTS.LABEL_2}/>
            <div className={styles.legbuilder_div}>
              <SelectDiv data={constants.STRADDLE_INPUTS.INPUTS} value={value} onChange={onChange} name={name}/>
            </div>
            <Label label={constants.STRADDLE_INPUTS.LABEL_3}/>
            <Input value={value_2} onChange={onChange} name={input_name}/>
            <Label label={constants.STRADDLE_INPUTS.LABEL_4}/>
            <Label label={constants.STRADDLE_INPUTS.LABEL_5}/>
            <Label label={constants.STRADDLE_INPUTS.LABEL_6}/>
        </div>
    )
}