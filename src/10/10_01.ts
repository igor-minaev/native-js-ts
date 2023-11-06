export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export const moveUser = (u: UserWithLaptopType, city: string) => {
    return {
        ...u,
        address: {
            ...u.address,
            city
        }
    }
}

export const upgradeLaptop = (u: UserWithLaptopType, title: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title
        }
    }
}