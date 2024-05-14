import Footer from '../components/Footer';
import Header from '../components/Header';
import Review from '../components/Review';
import SwapComponent from '../components/SwapComponent';

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-[#2D242F]'>
      <Header />
      <section className='py-8 z-10'>
        <div className='flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto'>
          <div className='flex flex-col gap-4 w-full md:w-1/2 py-8 text-center'>
            <h2 className='text-5xl lg:text-6xl font-extrabold text-white mb-6 md:!leading-[55px]'>
              Start Swap Cryptocurrencies
            </h2>
            <p>
              DEXchange finds the lowest price for your trade across all
              exchanges and aggregators, such as Uniswap and 1inch - and
              protects you from MEV, unlike the others.
            </p>
          </div>
          <div className='w-full md:w-1/2 py-8'>
            <img src='./hero.svg' className='g-image' alt='' />
          </div>
        </div>
      </section>

      <div>
        <link href='https://unpkg.com/pattern.css' rel='stylesheet' />
        <section className='text-gray-200'>
          <div className='max-w-6xl mx-auto px-5 py-5'>
            <div className='text-center mb-20'>
              <h2 className='text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px] text-center'>
                Features
              </h2>
              <div className='flex mt-6 justify-center'>
                <div className='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
              </div>
            </div>
            <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
              <div className='p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col'>
                <div className='pattern-dots-md gray-light'>
                  <div className='rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6'>
                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2'>
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                        ></path>
                      </svg>
                    </div>
                    <div className='flex-grow'>
                      <h2 className='text-xl title-font font-medium mb-3'>
                        Sign-up is not required
                      </h2>
                      <p className='leading-relaxed text-sm text-justify'>
                        SimpleSwap provides cryptocurrency exchange without
                        registration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col'>
                <div className='pattern-dots-md gray-light'>
                  <div className='rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6'>
                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0'>
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                        ></path>
                      </svg>
                    </div>
                    <div className='flex-grow'>
                      <h2 className='text-xl title-font font-medium mb-3'>
                        1000 cryptocurrencies
                      </h2>
                      <p className='leading-relaxed text-sm text-justify'>
                        Hundreds of crypto and fiat currencies are available for
                        exchange.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col'>
                <div className='pattern-dots-md gray-light'>
                  <div className='rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6'>
                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0'>
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
                        ></path>
                      </svg>
                    </div>
                    <div className='flex-grow'>
                      <h2 className='text-xl title-font font-medium mb-3'>
                        You won't be left alone
                      </h2>
                      <p className='leading-relaxed text-sm text-justify'>
                        Our support team is easy to reach and ready to answer
                        your questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Review />

      <div className='p-8 font-[sans-serif]'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-4'>
          <div className='text-center md:text-left'>
            <h2 className='text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px]'>
              Start Swap Cryptocurrencies
            </h2>
            <p className='text-lg lg:text-xl text-white mb-8'>
              Just make the first exchange to see how easy and profitable it is.
            </p>
            <a
              href='#'
              className='bg-[#a91079] hover:bg-opacity-80 text-white py-3 px-10 rounded-full text-lg lg:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block'
            >
              Create Exchange
            </a>
          </div>
          <div className='text-center'>
            <img
              src='./exchange.svg'
              alt='Premium Benefits'
              className='w-11/12 mx-auto'
            />
          </div>
        </div>
      </div>

      <div className='w-full py-12 bg-gray-100'>
        <section>
          <h2 className='text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px] text-center text-gray-700'>
            How It Works
          </h2>

          <div className='content-center lg:flex lg:justify-center lg:items-center'>
            <div className='flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8'>
              <div className='relative w-64 h-48'>
                <div className='absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg'>
                  <div className='w-1/3 h-40'></div>
                  <div className='w-2/3 h-32 pr-4'>
                    <h3 className='pt-1 text-xl font-semibold text-gray-700'>
                      Analyse
                    </h3>
                    <p className='pt-1 text-sm text-gray-600'>
                      Select currencies you want to swap and click the Exchange
                      button.
                    </p>
                  </div>
                </div>
                <div className='absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full'>
                  <svg
                    className='mt-2 ml-2'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='#e53e3e'
                    width='32px'
                    height='32px'
                  >
                    <path d='M0 0h24v24H0z' fill='none' />
                    <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' />
                  </svg>
                </div>
                <div className='absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-red-600 rounded-lg'>
                  01
                </div>
                <div className='absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-red-600'></div>
              </div>
            </div>
            <div className='flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8'>
              <div className='relative w-64 h-48'>
                <div className='absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg'>
                  <div className='w-1/3 h-40'></div>
                  <div className='w-2/3 h-32 pr-4'>
                    <h3 className='pt-1 text-xl font-semibold text-gray-700'>
                      Design
                    </h3>
                    <p className='pt-1 text-sm text-gray-600'>
                      The currency you want to receive will be sent to this
                      address after the exchange.
                    </p>
                  </div>
                </div>
                <div className='absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full'>
                  <svg
                    className='mt-2 ml-2'
                    xmlns='http://www.w3.org/2000/svg'
                    enable-background='new 0 0 24 24'
                    viewBox='0 0 24 24'
                    fill='#38a169'
                    width='32px'
                    height='32px'
                  >
                    <g>
                      <rect fill='none' height='24' width='24' />
                    </g>
                    <g>
                      <g>
                        <path d='M6.36,18.78L6.61,21l1.62-1.54l2.77-7.6c-0.68-0.17-1.28-0.51-1.77-0.98L6.36,18.78z' />
                        <path d='M14.77,10.88c-0.49,0.47-1.1,0.81-1.77,0.98l2.77,7.6L17.39,21l0.26-2.22L14.77,10.88z' />
                        <path d='M15,8c0-1.3-0.84-2.4-2-2.82V3h-2v2.18C9.84,5.6,9,6.7,9,8c0,1.66,1.34,3,3,3S15,9.66,15,8z M12,9c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C13,8.55,12.55,9,12,9z' />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className='absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-green-600 rounded-lg'>
                  02
                </div>
                <div className='absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-green-600'></div>
              </div>
            </div>
            <div className='flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8'>
              <div className='relative w-64 h-48'>
                <div className='absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg'>
                  <div className='w-1/3 h-40'></div>
                  <div className='w-2/3 h-32 pr-4'>
                    <h3 className='pt-1 text-xl font-semibold text-gray-700'>
                      Develop
                    </h3>
                    <p className='pt-1 text-sm text-gray-600'>
                      Submit a developed solution to the given problem sets.
                    </p>
                  </div>
                </div>
                <div className='absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full'>
                  <svg
                    className='mt-2 ml-2'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='#3182ce'
                    width='32px'
                    height='32px'
                  >
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z' />
                  </svg>
                </div>
                <div className='absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-blue-600 rounded-lg'>
                  03
                </div>
                <div className='absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-blue-600'></div>
              </div>
            </div>
            <div className='flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8'>
              <div className='relative w-64 h-48'>
                <div className='absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg'>
                  <div className='w-1/3 h-40'></div>
                  <div className='w-2/3 h-32 pr-4'>
                    <h3 className='pt-1 text-xl font-semibold text-gray-700'>
                      Develop
                    </h3>
                    <p className='pt-1 text-sm text-gray-600'>
                      The exchange status “Finished” means that the swap process
                      is over
                    </p>
                  </div>
                </div>
                <div className='absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full'>
                  <svg
                    className='mt-2 ml-2'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='#3182ce'
                    width='32px'
                    height='32px'
                  >
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z' />
                  </svg>
                </div>
                <div className='absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-blue-600 rounded-lg'>
                  04
                </div>
                <div className='absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-blue-600'></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className='dark:text-white w-full'>
        <div className='container flex flex-col justify-center px-4 py-8 mx-auto md:p-8'>
          <h2 className='text-4xl text-center lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px]'>
            Frequently Asked Questions
          </h2>
          <div className='mx-auto w-full md:w-1/2 py-8 mt-4 mb-8'>
            <img src='./faq.svg' className='g-image' alt='' />
          </div>
          <div className='space-y-4'>
            <details className='w-full border rounded-lg' open=''>
              <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
                What is DEXchange?
              </summary>
              <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white'>
                DEXchange is the first trading interface built on top of Ice
                Protocol.
                <br /> DEXchange is a Meta DEX aggregator that allows you to buy
                and sell tokens using gasless orders that are settled
                peer-to-peer among its users, or into any on-chain liquidity
                source while providing MEV protection.
              </p>
            </details>
            <details className='w-full border rounded-lg'>
              <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
                What types of orders does DEXchange support?
              </summary>
              <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white'>
                Swap buy and sell orders, which are always Fill or kill.
                <br /> Limit buy and sell orders, which can either be Partially
                fillable or Fill or kill. By default, limit orders are Partially
                fillable. DEXchange is the first trading interface built on top
                of Bear Protocol.
              </p>
            </details>
            <details className='w-full border rounded-lg'>
              <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
                What token pairs DEXchange doesn't allow yout to trade?
              </summary>
              <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white'>
                Unfortunately, DEXchange does not support some tokens. While
                these tokens implement the typical ERC20 interface, when calling
                the transfer and transferFrom methods, the actual amount the
                receiver will get will be smaller than the specified sent
                amount. This causes problems with DEXchange's settlement logic
                which expects the received amount (e.g., from a Uniswap
                interaction) to be fully transferable to the trader.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
