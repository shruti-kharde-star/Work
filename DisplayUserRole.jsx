import React from 'react'

const DisplayUserRole = (props) => {
  return (
    <div className=" h-[100vh] w-full text-3xl flex justify-center items-center">
        {
        (props.role==="admin") ? <h1>Hello admin!</h1> : (props.role==="user") ? <h1>Hello user!</h1> : <h1>Please sign up!</h1>
        }
    </div>
  )
}

export default DisplayUserRole