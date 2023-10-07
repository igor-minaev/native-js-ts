import {CourseType} from "./04";

test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]
    const oldAges = ages.filter(age => age > 90)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("should take courses cheaper then 160", () => {
    const courses = [
        {title: 'css', price: 100},
        {title: 'js', price: 200},
        {title: 'react', price: 150}
    ]

    const cheapCourses = courses.filter(course => course.price < 160)
    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe("css")
    expect(cheapCourses[1].title).toBe("react")

})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: true},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Tomato", isDone: false}
    ]
    const completedTasks = tasks.filter(t => t.isDone)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe("Bread")
    expect(completedTasks[1].title).toBe("Milk")
})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: true},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Tomato", isDone: false}
    ]
    const uncompletedTasks = tasks.filter(t => !t.isDone)
    expect(uncompletedTasks.length).toBe(1)
    expect(uncompletedTasks[0].title).toBe("Tomato")
})