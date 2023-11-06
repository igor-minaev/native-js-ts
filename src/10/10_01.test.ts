import {
    addCompany,
    addNewBookToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBookToUser, updateCompany, updateCompany2,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";


test("reference type test", () => {
    const user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)
    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test("change address", () => {
    const user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kiev')
    expect(user.laptop).toBe(movedUser.laptop)

})

test("upgrade laptop to macbook", () => {
    const user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradedLaptop = upgradeLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedLaptop)
    expect(user.address).toBe(upgradedLaptop.address)
    expect(upgradedLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
    expect(user.laptop).not.toBe(upgradedLaptop.laptop)

})

test("upgrade books", () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'js', 'react']
    }

    const changedHouse = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(changedHouse)
    expect(user.books).toBe(changedHouse.books)
    expect(user.address).not.toBe(changedHouse.address)
    expect(user.address.house).toBe(12)
    expect(changedHouse.address.house).toBe(99)
    expect(user.laptop).toBe(changedHouse.laptop)

})

test("add new book to user", () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'js', 'react']
    }

    const userCopy = addNewBookToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
    expect(user.laptop).toBe(userCopy.laptop)

})

test("update js to ts", () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'js', 'react']
    }

    const userCopy = updateBookToUser(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[2]).toBe('ts')
    expect(user.books[2]).toBe('js')
    expect(user.laptop).toBe(userCopy.laptop)

})

test("remove js book", () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'js', 'react'],

    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books.length).toBe(3)
    expect(userCopy.books[2]).toBe('react')
    expect(user.books.length).toBe(4)
    expect(user.laptop).toBe(userCopy.laptop)

})

test("add new company", () => {
    const user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]

    }

    const copyUser = addCompany(user, {id: 3, title: 'I-SOFT'})
    expect(copyUser).not.toBe(user)
    expect(copyUser.address).toBe(user.address)
    expect(copyUser.laptop).toBe(user.laptop)
    expect(copyUser.companies).not.toBe(user.companies)
    expect(copyUser.companies.length).toBe(3)
    expect(user.companies.length).toBe(2)


})

test("update company", () => {
    const user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]

    }

    const copyUser = updateCompany(user, 1, 'Epam') as UserWithLaptopType & WithCompaniesType
    expect(copyUser).not.toBe(user)
    expect(copyUser.address).toBe(user.address)
    expect(copyUser.laptop).toBe(user.laptop)
    expect(copyUser.companies).not.toBe(user.companies)
    expect(copyUser.companies[0].title).toBe('Epam')
    expect(user.companies[0].title).toBe('Епам')


})

test("update company in associative array", () => {

    const companies = {
        'Dimych': [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'IT-INCUBATOR'}
        ],
        'Artem': [
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }

    const copy = updateCompany2(companies, 'Dimych', 1, 'Epam')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('Epam')
})