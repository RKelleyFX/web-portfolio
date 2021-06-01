export const NAVI_LOCATION = 'NAVI_LOCATION'
export const PARENT_INFO = 'PARENT_INFO'
export const CHILD_TOGGLE = 'CHILD_TOGGLE'

//---------Navigation Token ------------------------------------*

export function naviLocation(text) {
    return {
        type: NAVI_LOCATION,
        text
    }
}

//----------OFM Survey Data ----------------------------------*

export function surveyParentInfo(text) {
    return {
        type: PARENT_INFO,
        text
    }
}

export function surveyChildToggle(text) {
    return {
        type: CHILD_TOGGLE,
        text
    }
}

