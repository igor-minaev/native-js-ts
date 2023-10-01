type LocalCityType = {
    title: string
    country: string
}

type AddressType = {
    streetTitle: string,
    city: LocalCityType
}

type TechnologyType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologyType[]
}

export const student: StudentType = {
    id: 1,
    'name': 'Igor',
    age: 31,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            country: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}


