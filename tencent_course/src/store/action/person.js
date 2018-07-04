import * as TYPES from '../action-types';
import { queryInfo, queryList } from '../../api/person';

let person = {
    queryUserInfo() {
        return {
            type: TYPES.QUERY_USER_INFO,
            payload: queryInfo()
        }
    },
    queryList() {
        return {
            type: TYPES.COURSE_DETAILS,
            payload: queryList()
        }
    }
};
export default person;