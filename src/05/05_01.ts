export type ManType = {
    name: string
    age: number
}

export const createGreetingMessage=(people:ManType[])=>{
    return people.map(m=>`Hello ${m.name.split(" ")[0]}. Welcome to IT-Incubator`)
}