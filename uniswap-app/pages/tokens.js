import React from 'react'
import Header from '../components/Header'
import TokensComponent from '../components/TokensComponent'

const Tokens = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-[#2D242F]'>
      <Header />
      <TokensComponent />
      {/* <Footer /> */}
    </div>
  )
}

export default Tokens
