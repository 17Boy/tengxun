import * as TYPES from '../action-types';

let INIT_STATE = {
    bannerData: [],
    listData: {
        total: 1,
        limit: 10,
        page: 1,
        data: []
    },

};
export default function course(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.COURSE_QUERY_BANNER:
            let {code, data} = action.bannerData;
            if (parseFloat(code) === 0) {
                state.bannerData = data;
            }
            break;
        case TYPES.COURSE_QUERY_LIST:
            let {result, flag, courseType} = action;
            if (result.code === 0) {
                state.listData.total = parseFloat(result.total);
                state.listData.limit = parseFloat(result.limit);
                state.listData.page = parseFloat(result.page);
                state.listData.data = state.listData.data.concat(result.data);
            }
            break;
    }
    return state;
};
