import {beforeEach, expect} from "vitest";
import type {ManType} from "./Destructuring.tsx";


let props: ManType;

beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2", name: "react"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})

test("", () => {
    // const age = props.age
    // const lessons = props.lessons
    const {age, lessons} = props
    const {title} = props.address.street

    const a = props.age
    const l = props.lessons

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)

    expect(a).toBe(32)
    expect(l.length).toBe(2)
    expect(title).toBe("Nezavisimosti street")

})

test("", () => {
    // const l1 = props.lessons[0]
    // const l2 = props.lessons[1]
    const [ls1, ...restLessons] = props.lessons

    expect(ls1.title).toBe("1")
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('2')
    expect(restLessons[0]).toEqual({title: "2", name: "react"})
})
