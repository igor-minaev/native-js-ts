import {useState} from "react";

type LessonType = {
    title: string
    name?:string
}
export type ManType = {
    name: string
    age: number,
    lessons: LessonType[]
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    food: string[]
    car: { model: string }
}

function useDimychState(m: string) {
    return [m, function () {
    }]
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    const [message, setMessage] = useState<string>("hello")
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}