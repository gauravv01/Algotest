import { createSlice } from "@reduxjs/toolkit";
import { validation , entryType , setForm , addLeg} from "./functions";
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
                let obj={};
                addLeg(state,obj,state)
                delete obj.leg_data;
                delete obj.FetchedLegs;
                 
            }
            else if(!state.leg_data.length){
                let obj={};
                obj=JSON.parse(JSON.stringify({...state,id:1}))
                delete obj.leg_data;
                delete obj.FetchedLegs;
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
                let obj={};
                addLeg(state,obj,leg)
            },
       setFormInput(state,action){
           setForm(action,state);
        },
        setLegInput(state,action){
            const id=action.payload.id;
            const item=state.leg_data.find(item=>item.id===id);
            setForm(action,item);
        }, 
        validateInput(state){
           validation(state);
        }, 
        validateLegInput(state,action){
            const id=action.payload.id;
            const item=state.leg_data.find(item=>item.id===id);
          validation(item)
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
                entryType(data[key][i].Booleans,item);
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