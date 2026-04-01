import {expect} from "vitest";

function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}

test('reference type test', () => {
    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    expect(user.age).toBe(32)

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)


})

test('array reference test', () => {
    const users: UserType[] = [
        {
            name: 'Dimych',
            age: 32,
            address: {
                title: 'Minsk'
            }
        }, {
            name: 'Dimych',
            age: 32,
            address: {
                title: 'Minsk'
            }
        }
    ]

    const admins = users
    admins.push({
        name: 'Bandugan', age: 10, address: {
            title: 'Minsk'
        }
    })


    expect(users[2]).toEqual({
        name: 'Bandugan', age: 10, address: {
            title: 'Minsk'
        }
    })


})

test('value type test', () => {
    const userCount = 100
    let adminsCount = userCount
    adminsCount = adminsCount + 1


    expect(adminsCount).toBe(101)


})

test('reference type test', () => {

    const address = {
        title: 'Minsk'
    }
    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    // let addr = user.address

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    address.title = 'Kanary'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Kanary')


})

test('reference type array test', () => {

    const address = {
        title: 'Minsk'
    }
    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }


    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')

})

test('sort array test',()=>{
    const letters=['c','d','a','z','e']

    letters.sort()
    expect(letters).toEqual(['a','c','d','e','z'])
})



