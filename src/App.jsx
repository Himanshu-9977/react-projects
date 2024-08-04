import React from 'react'
import { Accordion, ImgSlider, RandomColorGen, StartRating, LoadMore, ScollIndicator, TicTacToe, Hamburger } from './components'

const App = () => {
  return (
    <div className='bg-zinc-900 w-full min-h-screen text-zinc-300 py-20'>
      {/* <ScollIndicator /> */}
      {/* <Accordion /> */}
      {/* <RandomColorGen /> */}
      {/* <StartRating stars={10} /> */}
      {/* <ImgSlider url={"https://picsum.photos/v2/list?page=1&limit="} limit={"30"} /> */}
      {/* <LoadMore />  */}
      {/* <TicTacToe /> */}
      <Hamburger />
    </div>
  )
}

export default App