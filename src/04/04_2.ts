import type {CityType, GovernmentBuildingType} from "../02/02_02.ts";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingType>, number: number) => {
    return buildings.filter(b => b.stuffCount > number)
}