import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router'

export const LoginPage = () => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <h1 className='text-4xl font-bold'> Login Page</h1>
      <hr/>
      <form className='flex flex-col gap-2 my-10'>
        <input type="text" placeholder='ID del usuario'
        />
        <Button type='submit' >Loing</Button>
      </form>
      <Link to="/about">
        <Button variant="ghost">volver a la pagina principal</Button>
      </Link>
    </div>
  )
}
