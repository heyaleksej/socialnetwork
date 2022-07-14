import s from "../components/Users/Users.module.css";
import React from "react";

type PaginatorPropsType ={
    CurrentPage: number
    SetPageHandler: (m: number) => void
    totalCount: number
    pageSize: number


}


export const Paginator =(props: PaginatorPropsType)=>{

    let PagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= PagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map((m, index) => {
            return <span key={index} className={props.CurrentPage === m ? s.currentPage : ''} onClick={() => {
                props.SetPageHandler(m)
            }}>{m} </span>
        })}
    </div>
}