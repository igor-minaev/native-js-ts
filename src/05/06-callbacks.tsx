// const callback = (): number => {
//     alert('hey')
//     return 12
// }

// window.setTimeout(callback, 1000)

import type {ChangeEvent} from "react";

export const User = () => {

    const deleteUser = (event: React.MouseEvent<HTMLButtonElement>) => {
        // alert('user have been deleted')
        console.log(event.currentTarget.name)
    }

    const saveUser = () => {
        alert('user have been saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed ' + e.currentTarget.value)
    }

    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input type="number" onChange={onAgeChanged}/>
        <button name="delete" onClick={deleteUser}>x</button>
    </div>
}