import * as TYPES from '../action-types';
import { queryBanner, queryList ,queryShopCart} from '../../api/course';


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
    },
    queryUnpay(){
        return async dispatch=>{
            let result = await queryShopCart(0);
            dispatch({
                type:TYPES.COURSE_UNPAY,
                result
            });
        }
    }
};
export default course;