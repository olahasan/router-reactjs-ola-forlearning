import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
        Contact 
        <nav>
            <Link to="Ola">Ola</Link>
            <Link to="Ali">Ali</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Contact