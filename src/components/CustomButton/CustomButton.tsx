import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './CustomButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    name?:string
    cn?:string
    children?:any
}

const CustomButton: React.FC<SuperButtonPropsType> = (
    {
        cn,name, red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.button} ${red ? s.red : s.default} ${className}`

    return (
        <button
            className={cn ? cn: finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >{name}</button>
    )
}

export default CustomButton
