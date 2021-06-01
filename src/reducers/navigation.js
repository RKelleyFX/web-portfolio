import { NAVI_LOCATION, PARENT_INFO, CHILD_TOGGLE } from '../actions/actions'

const initialState = {
    navPage: "nav page",
    fName: "first name",
    lName: "last name",
    email: "email",
    children: "# of children",
    childToggle: "false"
};

function navigationReducer(state = initialState, { type, payload }) {
    switch (type) {
        case PARENT_INFO:
            return {
                ...state,
                fName: payload.fName,
                lName: payload.lName,
                email: payload.email,
                children: payload.children
            };
    
        case CHILD_TOGGLE:
            return {
                ...state,
                childTottle: payload.childToggle
            };
        
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