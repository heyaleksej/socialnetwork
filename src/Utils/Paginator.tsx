import s from "../components/Users/Users.module.css";
import React, {useState} from "react";

type PaginatorPropsType = {
    CurrentPage: number
    SetPageHandler: (m: number) => void
    totalCount: number
    pageSize: number
    PortionSize: number
}

export const Paginator = ({totalCount, pageSize, CurrentPage, SetPageHandler, PortionSize}: PaginatorPropsType) => {

    let PagesCount = Math.ceil(totalCount / pageSize)

    let pages = []
    for (let i = 1; i <= PagesCount; i++) {
        pages.push(i)
    }

    let PortionCount = Math.ceil(PagesCount / PortionSize)
    let [PortionNumber, setPortionNumber] = useState(1)
    let leftPageNumber = (PortionNumber - 1) * PortionSize + 1
    let rightPageNumber = PortionNumber * PortionSize


    return <div>
        <button onClick={()=>setPortionNumber(1)}>start</button>
        {PortionNumber > 1 &&
            <button onClick={()=>setPortionNumber(PortionNumber-1)}>Prev</button>
        }
        {pages.filter(f => f >= leftPageNumber && f <= rightPageNumber).map((m, index) => {
            return <span key={index}
                         className={CurrentPage === m ? s.currentPage : ''}
                         onClick={() => {
                             SetPageHandler(m)
                         }}>{m} </span>
        })}
        {PortionNumber < PortionCount &&
            <button onClick={()=>setPortionNumber(PortionNumber+1)}>next</button>
        }<button onClick={()=>setPortionNumber(PortionCount)}>end</button>
    </div>
}