import s from './CustomForms.module.css'

export const CustomInput = ({...props}) => {
    const hasError = props.meta.touched && props.meta.error
    return <div className={s.formControl + " " + (hasError ? s.error : '')}>
        <props.type  {...props.input} type={props.types}/>
        {hasError && <span>{props.meta.error}</span>}

    </div>
}

// export const CustomTextArea = ({...props}) => {
//     const hasError = props.meta.touched && props.meta.error
//     return <div className={s.formControl + " " + (hasError ? s.error : '')}>
//         <textarea   {...props.input}/>
//         {hasError && <span>{props.meta.error}</span>}
//
//     </div>
// }