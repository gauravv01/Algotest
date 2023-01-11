import { createSlice } from "@reduxjs/toolkit";
import constants from "../constants/Constants";


const initialState={
    futures:false,
    momentum:constants.OPACITY_0,
    trail_Sl:constants.OPACITY_0,
    leg_data:[],
    Form_data:{
        Lots: '1',
        PostionType:constants.POSITION.DATA[1],
        OptionType:constants.FORM_DATA[0].DATA[0],
        ExpiryKind:constants.FORM_DATA[1].DATA[0],
        EntryType:constants.STRIKE_CRITERIA.DATA[0],
        StrikeParameter:constants.STRIKE_TYPE.DATA[0],
        LowerRange:'50',
        UpperRange:'100',
        PremiumParameter:'50',
        StraddleParameter:constants.STRADDLE_INPUTS.INPUTS[0],
        StraddleValue:'0.5',
        MomentumType:constants.SIMPLE_MOMENTUM_DATA[0],
        MomentumValue:'0',
        Trail_SLType:constants.TRAIL_SL_DATA[0],
        Trail_SLValue:'0',
        Trail_SLValue2:'0',
},
    Booleans:{
    strike:true,
    premium:false,
    closest:false,
    straddle:false,
    },
    FetchedLegs:{check:false,data:[],loading:false}
}

const FormSlice=createSlice({
    name:'FormDataSlice',
    initialState: initialState,
    reducers:{
        setFutures(state){
            state.futures=true;
        },
        setOptions(state){
            state.futures=false;
        },
        validateMomentum(state,action){
            const id=action.payload.id;
            const check=action.payload.check;
            const item=state.leg_data.find(item=>item.id===id);
            if(check){
             item.momentum=constants.OPACITY_10
            }
            else if(!check){
                item.momentum=constants.OPACITY_0
                }
        },
        validatetrail_Sl(state,action){
            const id=action.payload.id;
            const check=action.payload.check;
            const item=state.leg_data.find(item=>item.id===id);
            if(check){
             item.trail_Sl=constants.OPACITY_10
            }
            else if(!check){
                item.trail_Sl=constants.OPACITY_0
                }
        },
        AddLeg(state){
            if(state.leg_data.length){
                const key= state.leg_data[state.leg_data.length-1].id +1;
                let obj={};
                obj=JSON.parse(JSON.stringify({...state,id:key}))
                delete obj.leg_data;
                delete obj.FetchedLegs;
                 state.leg_data.push(obj)
            }
            else if(!state.leg_data.length){
                let obj={};
                obj=JSON.parse(JSON.stringify({...state,id:1}))
                delete obj.leg_data;
                delete obj.FetchedLegs;
                console.log(constants.NEWNAMES)
                state.leg_data.push(obj)
            }
        },
        DeleteLeg(state,actions){
            const id=actions.payload;
            state.leg_data=state.leg_data.filter(item=>item.id!==id)
            },
            CopyLeg(state,action){
                const id=action.payload;
                const leg= state.leg_data.find(item=>item.id===id);
                const key= state.leg_data[state.leg_data.length-1].id +1;
                let obj={};
                obj=JSON.parse(JSON.stringify({...leg,id:key}))
                state.leg_data.push(obj)
            },
       setFormInput(state,action){
            const input=action.payload.value;
            const key=action.payload.id;
            state.Form_data={...state.Form_data,[key]:input}
        },
        setLegInput(state,action){
            const input=action.payload.value;
            const key=action.payload.key;
            const id=action.payload.id;
            const item=state.leg_data.find(item=>item.id===id);
            item.Form_data={...item.Form_data,[key]:input}
        }, 
        validateInput(state){
            if (state.Form_data.EntryType===constants.STRIKE_CRITERIA.DATA[0]){
                state.Booleans=false;
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
        }, 
        validateLegInput(state,action){
            const id=action.payload.id;
            const item=state.leg_data.find(item=>item.id===id);
            if (item.Form_data.EntryType===constants.STRIKE_CRITERIA.DATA[0]){
                item.Booleans.closest=false;
                item.Booleans.premium=false;
                item.Booleans.straddle=false;
                item.Booleans.strike= true
            }
            else if(item.Form_data.EntryType===constants.STRIKE_CRITERIA.DATA[1]){
                item.Booleans.strike=false;
                item.Booleans.closest=false;
                item.Booleans.straddle=false;
                item.Booleans.premium=true;
            }
            else if(item.Form_data.EntryType===constants.STRIKE_CRITERIA.DATA[2]){
                item.Booleans.strike=false;
                item.Booleans.straddle=false;
                item.Booleans.premium=false;
                item.Booleans.closest=true;
            }
            else if(item.Form_data.EntryType===constants.STRIKE_CRITERIA.DATA[3]){
                item.Booleans.closest=false;
                item.Booleans.premium=false;
                item.Booleans.strike=false;
                item.Booleans.straddle=true;
            }
        },
        clearLegs(state){
            // state.leg_data=state.leg_data.splice(0,state.leg_data.length)
            state.leg_data=[]
        },
        getFetchedLegs(state,action){
            state.FetchedLegs.data=[];
            const data=action.payload;
            for(let key in data){
                let i=0;
                while(i<data[key].length){
                const item=data[key][i].Form_data        
                if( data[key][i].momentum.opacity===constants.OPACITY_0.opacity){
                    item.MomentumType='None';
                    delete item.MomentumValue
                }
                if( data[key][i].trail_Sl.opacity===constants.OPACITY_0.opacity){
                    item.Trail_SLType='None';
                    delete item.Trail_SLValue;
                    delete item.Trail_SLValue2
                }
                state.FetchedLegs.data.push(item)
                i++;
            }
            }
        },
        dataPosted(state){
            state.FetchedLegs.check=true;
        },
        startLoading(state){
            state.FetchedLegs.loading=true;
        },
        loadingDone(state){
            state.FetchedLegs.loading=false;
        }
    
    }

});


export const FormActions=FormSlice.actions;

export default FormSlice;