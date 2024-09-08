import { useEffect, useState } from "react"

function UseState(){
    const [count , setCount] = useState(0)
    const [data , setData] = useState({
        name : "nirmal dhakal"
    })

    const increaseCount = ()=>{
        setCount(count + 1)
    }

    const decreaseCount = ()=>{
        setCount(count - 1)
       
    }
    useState()
    return (
       <>
       <h1>{count}</h1>
       <h1>{data.name}</h1>

       <button onClick={increaseCount}>Plus</button>
       <button onClick={decreaseCount}>Minus</button>
       </>
    )
}

export default UseState