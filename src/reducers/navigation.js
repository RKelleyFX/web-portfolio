import { NAVI_LOCATION } from '../actions/actions'

const initialState = {
    navPage: "nav page"
};

function navigationReducer(state = initialState, { type, payload }) {
    switch (type) {
        // case DEFINE_USER_DETAIL:
        //     return {
        //         ...state,
        //         updateEmail: payload.email,
        //         updatePassword: payload.password,
        //         updatePhone: payload.phone
        //     };

        case NAVI_LOCATION:
            return {
                ...state,
                navPage: payload.navPage
            };
        
        default:
            return state;
    }
}

export default navigationReducer