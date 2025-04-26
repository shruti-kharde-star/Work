import React from 'react'

const ListMessage = () => {
    const List=["movie1","movie2","movie3","movie4","movie5"];
  return (
    <div className=" h-[100vh] w-full text-3xl flex justify-center items-center flex-col">{
        (List.length===0) ? <h1>No Movies found....!!!</h1> : (List.map((a) => <h1>{a}</h1>))}
    </div>
  )
}

export default ListMessage