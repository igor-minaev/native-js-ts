import {makeHairStyle, moveUser, upgradeLaptop, UserType, UserWithLaptopType} from "./10_01";


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
    expect(user.laptop).not.toBe(upgradedLaptop.laptop)

})