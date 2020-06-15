export const NAVI_LOCATION = 'NAVI_LOCATION'

//---------Navigation Token ------------------------------------*

export function naviLocation(text) {
    return {
        type: NAVI_LOCATION,
        text
    }
}

