import {StudentType} from "../02/02";
import {CityType, GovernmemtBuildingType, HouseType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b
}

function sum2(a: number, b: number) {
    return a + b
}

const res = sum(sum(1, 2), sum(1, 3))

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export const doesStudentLiveIn = (st: StudentType, cityName: string) => {
    return st.address.city.title === cityName
}

export function addMoneyToBudget(building: GovernmemtBuildingType, budget: number) {
    building.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export function toFireStaff(building: GovernmemtBuildingType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: GovernmemtBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}

export function createMessage(props: CityType){
    return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`
}