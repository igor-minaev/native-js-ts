type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

// users[1]
// const user = {id: 100500, name: 'Igor'}
// users[user.id] = user
// delete users[user.id]
// user[user.id].name = 'Vitya'

export const usersArray = [
    {id: 101, name: 'Dimych'}, {id: 3232312, name: 'Natasha'}, {id: 1212, name: 'Valera'}, {id: 1, name: 'Katya'}
]

// usersArray.find(u => u.id === 1)
// usersArray.push(user)
// const usersCopy = [...usersArray.filter(), user]
// const users = usersArray.filter(u => u.id !== = user.id)



