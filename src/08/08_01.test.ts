type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '2323434': {id: 2323434, name: 'Natasha'},
        '2132': {id: 2132, name: 'Valera'},
        '3': {id: 3, name: 'Katya'}
    }
})

test('should update corresponding user', () => {
    users['3'].name = 'Ekaterina'
    expect(users['3'].name).toBe('Ekaterina')
    expect(users['3']).toEqual({id: 3, name: 'Ekaterina'})
})

test('should delete corresponding user', () => {
    delete users['3']
    expect(users['3']).toBeUndefined()

})