import axios  from "../axios/axios";
import { FormActions } from "./FormSlice";

export const FetchLegs=()=>{
    return async (dispatch)=>{
        dispatch(FormActions.startLoading())
            try{
                const data= await sendReq();
                dispatch(FormActions.getFetchedLegs(data));
                dispatch(FormActions.loadingDone())
            } catch(error){
                console.log(error)
            }
            async function sendReq(){
                const response=await axios.get('/Legs.json');
                const data=response.data;
                return data;
            }
        }
    }

export const PostLegs=(items)=>{
    return async (dispatch)=>{
        dispatch(FormActions.startLoading());
            try{
                await sendReq();
                dispatch(FormActions.clearLegs());
                dispatch(FormActions.loadingDone())
                dispatch(FormActions.dataPosted());
            } catch(error){
                console.log(error)
            }
            async function sendReq(){
                const response=await axios.post('/Legs.json',items);
                return response;
            }
        }
    }


