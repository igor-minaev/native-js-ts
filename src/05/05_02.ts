import {GovernmemtBuildingType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: GovernmemtBuildingType[]) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: HouseType[]) => {
    return houses.map(h=>`Hello guys from ${h.address.street.title}`)
}