import {CityType, GovernmemtBuildingType} from "../02/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buidings: GovernmemtBuildingType[], count: number) => {
    return buidings.filter(b => b.staffCount > count)
}
