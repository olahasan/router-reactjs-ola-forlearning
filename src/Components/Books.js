import React from 'react'
import { Link, Outlet  } from 'react-router-dom'

function Books() {
  return (
    <div className='Books'>
        Books
        <nav>
            <Link to="AddNewBook">AddNewBook</Link>
            <Link to="RelatedBooks">RelatedBooks</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Books