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

export type UserWithBooksType = UserType & {
    books: string[]
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type CompanyType = { id: number, title: string }
export type WithCompaniesType = {
    companies: CompanyType[]
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

export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {
        ...u,
        address: {
            ...u.address,
            house
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

export const addNewBookToUser = (u: UserWithLaptopType & UserWithBooksType, books: string[]) => {
    return {
        ...u,
        books: [...u.books, ...books]
    }
}

export const updateBookToUser = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBooks: string) => {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBooks : b)
    }
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, book: string) => {
    return {
        ...u,
        books: u.books.filter(b => b !== book)
    }
}

export const addCompany = (u: UserWithLaptopType & WithCompaniesType, company: { id: number, title: string }) => {
    return {
        ...u,
        companies: [...u.companies, company]
    }
}

export const updateCompany = (u: WithCompaniesType, id: number, title: string) => {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title} : c)
    }
}

export const updateCompany2 = (companies: { [key: string]: CompanyType[] }, userName: string, companyId: number, newTitle: string) => {
    return {
        ...companies,
        [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    }
}