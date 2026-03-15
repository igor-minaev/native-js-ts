import type {GovernmentBuildingType, HouseType} from "../02/02_02.ts";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => buildings.map(b => b.address.street.title)

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => houses.map(h => h.address.street.title)

export function createMessages(houses: Array<HouseType>) {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}