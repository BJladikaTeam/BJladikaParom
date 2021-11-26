import React, { useEffect, useState } from 'react'
import { Marker } from 'react-native-maps'


const toRad = (Value) => {
    return (Value * Math.PI) / 180
}
const calcCrow = (lat1, lon1, lat2, lon2) => {
    const R = 6371 // km
    const dLat = toRad(lat2 - lat1)
    const dLon = toRad(lon2 - lon1)
    const lat1 = toRad(lat1)
    const lat2 = toRad(lat2)

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c
    return d
}


const Ship = ({ initialCoordIndex, way, direction, speed }) => {


    const [currentCoordIndex, setCurrentCoordIndex] = useState(initialCoordIndex)
    const [currentPos, setCurrentPos] = useState(initialCoordIndex)
    const [direction, setDirection] = useState(direction)

    const [currentWayPos, setCurrentWayPos] = useState(0)
    const [lengthWay, setLengthWay] = useState()

    const getNextCoord = (current, target) => {
        const lat = current + (target.lat - current.lat) / 100
    }
    const calcLengthWay = (currentPos, targetPos) => {
        const row = calcCrow(currentPos.lat,currentPos.lon,targetPos.lat,targetPos.lon)
        const length= row/speed
    }


    useEffect(() => {
        const currentWay=way[currentCoordIndex]
        const nextWay= way[direction? currentCoordIndex+1:currentCoordIndex-1]
        setLengthWay (calcLengthWay(currentWay,nextWay))

        setTimeout(() => {
            if (direction) {
            }
        }, 1000)
    },[])
    return <Marker title={'Нижний Бестях'} coordinate={micro203} />
}

export default Ship
