import {Dimensions} from 'react-native'

export const width=Dimensions.get('screen').width
export const height=Dimensions.get('screen').height
export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const BG='white'