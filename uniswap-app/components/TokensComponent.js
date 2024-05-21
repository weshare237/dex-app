import React from 'react'
import tokenList from './tokenList.json'
import Image from 'next/image'

function Tokens() {
  return (
    <div className='tokens'>
      <h2 className='text-2xl lg:text-3xl font-extrabold text-white mb-6 md:!leading-[55px] text-center'>
        Token List
      </h2>
      <ul className='list-group'>
        <li className='list-group-info'>
          <p>#</p>
          <p>Token Name</p>
        </li>
        {tokenList.map((token, index) => (
          <li key={index}>
            <div className='list-group-item'>
              <p>{index + 1}</p>
              <img src={token.img} alt={token.ticker} className='token-logo' />
              <h4>{token.name}</h4>
              <p>{token.ticker}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tokens
