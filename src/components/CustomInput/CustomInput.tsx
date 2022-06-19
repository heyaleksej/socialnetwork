import {ChangeEvent, useState} from "react";

type CustomInputType = {
    title: string;
    onClick?: () => void
    onChange?:(event:ChangeEvent<HTMLInputElement>)=> void | undefined
    value: string

}

export const CustomInput = (props: CustomInputType) => {

    return <>
        <input  value={props.value} onChange={props.onChange}/>
        <button onClick={props.onClick}>{props.title}</button>
    </>
}