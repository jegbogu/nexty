import Button from "./buttton"
import React, { useState, useRef } from "react"
import data from "@/model/dataInterface"
import allUsers from "@/users"
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

function RegisterForm():JSX.Element{
   const[passErr, setPassErr] = useState<string>('') 
//    const[user18, setUser18] = useState<any>('')
const[show,setShow] = useState<boolean>(false)
const usernameInput = useRef<HTMLInputElement>(null)
const passwordInput = useRef<HTMLInputElement>(null)


function display(){
    setShow(!show)
}
 let user18;
 checkAge()
function checkAge(){
    const newData = allUsers.filter((el:data)=>{
        if(el.age<18){
            return el
        }
    })

    user18 = newData[0].username
}
 
async function submitHandler(e:React.FormEvent){
   e.preventDefault()
   
const enteredEmail = usernameInput.current!.value
const enteredPassword:any = passwordInput.current?.value


// console.log(enteredEmail,enteredPassword)
if (!validPassword.test(enteredPassword)) {
    setPassErr('Password must contain special character(s), and  uppercase');
    return;
} else {
    setPassErr('Good Password');
}

const response = await fetch('api/home/form',{
    method:'POST',
    body:JSON.stringify({enteredEmail,enteredPassword}),
    headers:{
        'Content-type':'application/json'
    }
})

const userData = await response.json()
}
// function check(e:React.FormEvent<HTMLInputElement>){
//     console.log(e.currentTarget.value )
// }


// const[num,setNum] = useState<(number | string )[] >([])

// const[num,setNum] = useState<number|string>('')
// function display(){
// setNum([566,445,''])
// }
    return(
        <div>
            <h3>All Users</h3>
            <div>
                {allUsers.map((el:data, i:number)=>{
                    return <li key= {i}>{el.username}</li>
                })}
            </div>
            <div>
                 {user18}
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username </label>
                    <div>
                        <input type="email" name="email" id="email" required ref={usernameInput}/>
                    </div>
                    <div>
                        {passErr}
                    </div>
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type={show?"text":"password"} name="email" id="password" required ref={passwordInput}/>
                        {/* <h3>{num}</h3> */}
                        <span onClick={display}>{show?'Hide': 'Show'}</span>
                    </div>
                </div>

                <div>
                   <Button btn='Submit'/>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm