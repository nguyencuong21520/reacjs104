import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {


//Get dataa
  const getData = async (param) => {
    const api = `https://mindx-mockup-server.vercel.app/api/resources/${param}?apiKey=67fe6ce4c590d6933cc126d9`
    try {
      const response = await axios.get(api)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error('Error fetching users:', error)
      return []
    }
  }

  //Add data to user
  const addData = async (param, data) => {
    const api = `https://mindx-mockup-server.vercel.app/api/resources/${param}?apiKey=67fe6ce4c590d6933cc126d9`
    try {
      const response = await axios.post(api, data)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error('Error fetching users:', error)
      return []
    }
    
  }

  //update data to user
  const updateData = async (param,data , id) => {
    const api = `https://mindx-mockup-server.vercel.app/api/resources/${param}/${id}?apiKey=67fe6ce4c590d6933cc126d9`
    try {
      const response = await axios.put(api, data)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error('Error fetching users:', error)
      return []
    }
  }

  //TODO:
  // deleteData

  getData("users")



  return (

    <div>
          <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>


    <button
      className="px-4 py-2 rounded bg-blue-500 text-white"
      onClick={()=>{
        addData("users", {
          "name": "Nguyen Van A",
          "email": "dData@gmail.com",
          "phone": "0987654321",
          "address": "Ha Noi"
        })
      }}
    >
      add Data
    </button>

    <button
      className="px-4 py-2 rounded bg-blue-500 text-white"
      onClick={()=>{
        updateData("users", {
          "name": "Nguyen Van B",
        }, "67fe7a53c339f51f6af67bb0")
      }}
    >
      update Data
    </button>

    <div>

<button>Users</button>
<button>Users</button>
<button>Users</button>
<button>Users</button>


    </div>

    </div>

  )
}