const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100] // > 90

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "css", price: 100},
    {title: "js", price: 200},
    {title: "react", price: 150}
]

const cheepPredicate = (course: CourseType) => {
    return course.price < 160
}

const cheepCourses = [{title: "css", price: 100}, {title: "react", price: 150}]
