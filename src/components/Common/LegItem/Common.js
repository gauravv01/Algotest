import { SelectDiv } from '../SelectInput/SelectInput';
import styles from './LegItem.module.css';

export function CheckboxContainer({children,onClick}){
    return  <div className={styles.checkbox_container}>
    <input className={styles.checkbox_input} type='checkbox' id='handle_checkbox' onClick={onClick}/>
    <label className={styles.checkbox_label} htmlFor='handle_checkbox'>
        <span className={styles.checkbox_checkmark}>{children}</span>
    </label>
</div>
}

export function SelectContainer({data,name,value,onChange}){
    return  <div className={styles.select_select_container}>
    <SelectDiv data={data} name={name} value={value} onChange={onChange}/>
</div>
}