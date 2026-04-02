export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export type CompanyType = {
    id: number
    title: string
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, city}}
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {...u, laptop: {title: laptop}}
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u, address: {...u.address, house}}
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: string[]) {
    return {...u, books: [...u.books, ...books]}
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, book: string, newBook: string) {
    return {...u, books: u.books.map(b => b === book ? newBook : b)}
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, book: string) => (
    {...u, books: u.books.filter(b => b != book)}
)

export function updateCompany(u: UserWithLaptopType & WithCompaniesType, id: number, title: string) {
    return {...u, companies: u.companies.map(c => c.id === id ? {...c, title} : c)}
}

export function updateCompany2(companies: {
    [key: string]: CompanyType[]
}, userName: string, companyId: number, newTitle: string) {
    return {...companies, [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)}
}