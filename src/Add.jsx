import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Add() {
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:3000/users/', inputData)
            .then(res => {
                alert('Item added successfully!')
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Name</label><br />
                <input type="text" name="name" id="" onChange={e => setInputData({ ...inputData, name: e.target.value })} /><br />
                <label htmlFor="">Email</label><br />
                <input type="text" name="email" id="" onChange={e => setInputData({ ...inputData, email: e.target.value })} /><br />
                <label htmlFor="">Phone</label><br />
                <input type="text" name="phone" id="" onChange={e => setInputData({ ...inputData, phone: e.target.value })} />
                <button>add</button>
            </form>
        </div>
    )
}
