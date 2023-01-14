import constants from "../constants/Constants";

export function setForm(action,item){
    const input=action.payload.value;
    const key=action.payload.key;
    item.Form_data={...item.Form_data,[key]:input}
}

export function addLeg(state,obj,leg){
    const key= state.leg_data[state.leg_data.length-1].id +1;
                obj=JSON.parse(JSON.stringify({...leg,id:key}))
                state.leg_data.push(obj)
}


export function validation(state){
    if (state.Form_data.EntryType===constants.STRIKE_CRITERIA.DATA[0]){
        state.Booleans.closest=false;
        state.Booleans.premium=false;
       state.Booleans.straddle=false;
        state.Booleans.strike= true
    }
    else if(state.Form_data.EntryType===constants.STRIKE_CRITERIA.DATA[1]){
        state.Booleans.strike=false;
        state.Booleans.closest=false;
       state.Booleans.straddle=false;
        state.Booleans.premium=true;
    }
    else if(state.Form_data.EntryType===constants.STRIKE_CRITERIA.DATA[2]){
        state.Booleans.strike=false;
        state.Booleans.straddle=false;
       state.Booleans.premium=false;
        state.Booleans.closest=true;
    }
    else if(state.Form_data.EntryType===constants.STRIKE_CRITERIA.DATA[3]){
        state.Booleans.closest=false;
        state.Booleans.premium=false;
        state.Booleans.strike=false;
        state.Booleans.straddle=true;
    }
}

export function entryType(item){
    if(item.EntryType===constants.STRIKE_CRITERIA.DATA[0]){
      delete item.LowerRange;
      delete item.UpperRange
      delete item.PremiumParameter;
      delete item.StraddleParameter;
      delete item.StraddleValue
    }
    else if(item.EntryType===constants.STRIKE_CRITERIA.DATA[1]){
        delete item.StrikeParameter;
        delete item.PremiumParameter;
        delete item.StraddleParameter;
        delete item.StraddleValue
    }else if(item.EntryType===constants.STRIKE_CRITERIA.DATA[2]){
        delete item.StrikeParameter;
        delete item.LowerRange;
        delete item.UpperRange;
        delete item.StraddleParameter;
        delete item.StraddleValue
    } else if(item.EntryType===constants.STRIKE_CRITERIA.DATA[3]){
        delete item.StrikeParameter;
        delete item.LowerRange;
        delete item.UpperRange;
        delete item.PremiumParameter
    }
}