type CustomButtonType={
    title:string;
    onClick:()=>void
}

export const CustomButton =(props:CustomButtonType)=>{

    const onClickHandler = () => {
        props.onClick()
    }
    return <>
        <button onClick={onClickHandler}>{props.title}</button>
    </>
}