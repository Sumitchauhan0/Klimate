import  { type PropsWithChildren } from 'react'
import Headers from './header'

const Layout =({children}:PropsWithChildren) =>{
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
    <Headers/>

    <main className='main-h-screen container mx-auto px-4 py-8'>
      {children}
      </main>
      <footer className='border-t backdrop-blur py-12'>
        
        <div className='container mx-auto px-4 py-8 text-center text-gray-500'>
          <p>Made by sumit Chauhan</p>
        </div>
      </footer>
      </div>



    
  )
}

export default Layout;