import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState({})

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/mykiiii')
    //     .then((res)=> res.json())
    //     .then((jsonResponse)=>{
    //         console.log(jsonResponse)
    //         setData(jsonResponse)
    //     })
    // } , [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>Github followers: {data.followers}
    <img className='p-4' src={data.avatar_url} alt="Github Picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mykiiii')
    return response.json()
}