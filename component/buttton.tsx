interface btnType{
    btn:string
}

function Button({btn}:btnType):JSX.Element{
    return(
        <div>
            <button>{btn}</button>
        </div>
    )
}

export default Button