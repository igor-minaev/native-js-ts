import {createGreetingMessage, type ManType} from "./05_01.ts";
import {beforeEach} from "vitest";

let people: ManType[]

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexandr Petrov", age: 24},
        {name: "Dmitriy Sidorov", age: 18}
    ]
})

test("should get array of greeting messages", () => {

    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT-Incubator!")
    expect(messages[1]).toBe("Hello Alexandr. Welcome to IT-Incubator!")
    expect(messages[2]).toBe("Hello Dmitriy. Welcome to IT-Incubator!")
})