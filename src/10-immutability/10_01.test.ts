import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompany2,
    upgradeUserLaptop,
    type UserType,
    type UserWithBooksType,
    type UserWithLaptopType, type WithCompaniesType
} from "./10_01.ts";
import {expect} from "vitest";


test('reference type test', () => {
    const user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk'}
    }

    const awesomeUser = makeHairstyle(user, 2)
    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    const user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk', house: 12},
        laptop: {
            title: "ZenBook"
        }
    }

    const movedUser = moveUser(user, 'Kiev')
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook with books', () => {
    const user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk', house: 12},
        laptop: {
            title: "ZenBook"
        }
    }

    const upgradedUser = upgradeUserLaptop(user, 'Macbook')
    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(user.address).toBe(upgradedUser.address)
    expect(upgradedUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('upgrade laptop to macbook', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk', house: 12},
        laptop: {
            title: "ZenBook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)
    expect(user).not.toBe(userCopy)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)
    expect(user.address.house).toBe(12)
})

test('add new books to user', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk', house: 12},
        laptop: {
            title: "ZenBook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books.length).toBe(6)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
})

test('update js to ts', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk', house: 12},
        laptop: {
            title: "ZenBook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books.length).toBe(4)
    expect(userCopy.books[2]).toBe('ts')
    expect(user.books[2]).toBe('js')
})


test('remove js book', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk', house: 12},
        laptop: {
            title: "ZenBook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books.length).toBe(3)
    expect(user.books.length).toBe(3)
    expect(userCopy.books[2]).toBe('react')
    expect(user.books[2]).toBe('js')
})

test('update company', () => {
    const user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk', house: 12},
        laptop: {
            title: "ZenBook"
        },
        companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const userCopy = updateCompany(user, 1, 'Epam')
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.companies[0].title).toBe('Epam')
    expect(user.companies[0].title).toBe('Епам')
})

test('update company2', () => {
    const user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk', house: 12},
        laptop: {
            title: "ZenBook"
        }
    }
    const companies = {
        'Dimych': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem': [{id: 1, title: 'IT-INCUBATOR'}]
    }

    const copy = updateCompany2(companies, 'Dimych', 1, 'Epam')

    expect(copy).not.toBe(companies)
    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('Epam')

})