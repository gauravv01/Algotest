const constants={

// Headers

    SELECT_SEGMENT:'Select segments',
    FUTURES:'Futures',
    OPTIONS:'Options',

    // Form Inputs
    TOTAL_LOT:'Total lot',
    POSITION:{
        LABEL:'Position',
        DATA:['Buy','Sell'],
    },
    FORM_DATA:[
    {LABEL:'Option Type',
    DATA:['Call','Put'],
},
    { LABEL:'Expiry',
    DATA:['Weekly','Monthly'],
}],
STRIKE_CRITERIA:{ LABEL:'Select Strike Criteria',DATA:['Strike Type','Premium Range','Closest Premium','Straddle Width']},
STRIKE_TYPE:{LABEL:'Strike Type',DATA:['ATM','ITM1','ITM2','ITM3','ITM4','ITM5']},
CLOSEST_PREMIUM:'Premium',
PREMIUM_DATA:['Lower Range','Upper Range'],
STRADDLE_INPUTS:{
    LABEL_1:'[',
    LABEL_2:'ATM STRIKE',
    INPUTS:['+','-'],
    LABEL_3:'(',
    LABEL_4:'*',
    LABEL_5:'ATM Straddle Price',
    LABEL_6:')]',   
},

// Leg Control

ADD_LEG:'Add Leg',
CANCEL:'Cancel',

// Leg Items


LOTS:'Lots',
SELECT_STRIKE:'Select Strike',
SIMPLE_MOMENTUM: 'Simple Momentum',
SIMPLE_MOMENTUM_DATA:['PointsUp','PointsDown','PercentageUp','PercentageDown','Underlying PointsUp','Underlying PointsDown','Underlying PercentageUp','Underlying PercentageDown'],
TRAIL_SL:'Trail SL',
TRAIL_SL_DATA:['Points','Percentage'],
OPACITY_0:{opacity:'0.3',pointerEvents:'none'},
OPACITY_10:{opacity:'1',pointerEvents:'all'},

// Submit
SUBMIT:'Submit',
FETCH:'Fetch All Data',
ADD_LEGS:'+ Add legs',

//  Pages

HOME_PAGE:'/',
DATA_PAGE:'/retrieved',

    // Loading
    
LOADING:'Loading...',
   

   
   
   
   
   
    
    
   
}

export default constants