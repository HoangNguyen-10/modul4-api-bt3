import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [columns, setColumns] = useState([])
  const [records, setRecords] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        console.log(columns)
        setRecords(res.data)
      })
  }, [])
  return (
    <div className="App">
      <Link to='/create'>Add</Link>
      <table>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <Link to={`/update/${d.id}`}>Edit</Link> {' '}
                  <button onClick={() => handleDelete(d.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );

  function handleDelete(id) {
    const confirm = window.confirm('Do you want to delete?')
    if (confirm) {
      axios.delete('http://localhost:3000/users/' + id)
        .then(res => {
          alert('item has been deleted')
          navigate('/')
        })
        .catch(err => console.log(err))
    }
  }

}

export default App;
