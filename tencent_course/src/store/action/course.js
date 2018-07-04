import * as TYPES from '../action-types';
import { queryBanner, queryList } from '../../api/course';


let course = {
    queryBanner() {
        return async dispatch => {
            let bannerData = await queryBanner();
            dispatch({
                type: TYPES.COURSE_QUERY_BANNER,
                bannerData
            })
        };
    },
    queryList() {
        return async dispatch => {
            let listData = await queryList();
            dispatch({
                type: TYPES.COURSE_DETAILS,
                listData
            })
        }
    }
};
export default course;