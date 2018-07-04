import * as TYPES from '../action-types';

let INIT_STATE = {
    bannerData:[],
    courseData: {
        total: 1,
        limit: 10,
        page: 1,
        data: []
}};
export default function course(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.COURSE_QUERY_BANNER:
            console.log(action);
            let{code,data} = action.bannerData;
            console.log(data);
            if(parseFloat(code)===0){
                state.bannerData=data;
            }

            break;


    }
    return state;
};
