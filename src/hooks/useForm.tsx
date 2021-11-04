import { useState } from "react"

export const useForm = <T extends Object>(form: T ) => {
    const [state, setState] = useState(form)

    //<T extends Object> es un generico que devuelve el tipo de dato que se le envia, 
    //es decir si se le envia un objeto es un tipo objeto, si manda un arreglo es un tipo arreglo y así
    const onChange = <K extends Object> (value: K, campo: keyof T) => {
        setState({
            ...state,
            [campo]:value
        })
    }
    
    return {
        ...state,
        form: state,
        onChange
    }
}