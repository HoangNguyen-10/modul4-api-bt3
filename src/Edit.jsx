import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        axios.put('http://localhost:3000/users/' + id, data)
            .then(res => {
                alert('data update successfully!')
                navigate('/')
            })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="" name=''>ID</label><br />
                <input type="text" name="id" value={data.id} disabled id=""

                /> <br />
                <label htmlFor="">name</label><br />
                <input type="text" name="name" id="" value={data.name}
                    onChange={e => setData({ ...data, name: e.target.value })}
                /><br />
                <label htmlFor="">email</label><br />
                <input type="text" name="email" id="" value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value })}
                /><br />
                <label htmlFor="">phone</label><br />
                <input type="text" name='phone' value={data.phone}
                    onChange={e => setData({ ...data, phone: e.target.value })}
                /><br />
                <button>update</button>
            </form>
        </div>
    )
}
