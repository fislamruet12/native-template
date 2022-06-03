import { number } from "yup"


export type LatLong={
    latitude:number,
    longitude:number,
    latitudeDelta: number,
    longitudeDelta: number
}