import type {StudentType} from "../02/02.ts";
import type {CityType, GovernmentBuildingType, HouseType} from "../02/02_02.ts";

export const addSkill =
    (student: StudentType, skill: string) => {
        student.technologies.push({id: new Date().getTime(), title: skill})
    }

export const makeStudentActive =
    (student: StudentType) => {
        student.isActive = true
    }

export const doesStudentLiveIn = (student: StudentType, cityTitle: string) => {
    return student.address.city.title === cityTitle
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
    building.stuffCount -= staffCountToFire
}


export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.stuffCount += staffCountToHire
}

export const createMessage = (city: CityType) => {
return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} people`
}