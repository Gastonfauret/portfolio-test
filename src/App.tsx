import Header from "./components/Header"
import Article from "./components/Article"
import Main from "./components/Main";
import { Card } from "./components/Card";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Article />
      <Main />
      <div className='flex m-5 flex-wrap '>
        <div className=' w-auto  sm:w-1/2 md:w-1/3 px-20 sm:px-10 my-3  sm:my-2'>
          <Card photo='https://picsum.photos/200/200' />
        </div>
        <div className=' w-auto  sm:w-1/2 md:w-1/3 px-20 sm:px-10 my-3 sm:my-2'>
          <Card photo='https://picsum.photos/200/200' />
        </div>
        <div className=' w-auto sm:w-1/2 md:w-1/3 px-20 sm:px-10 my-3 sm:my-2'>
          <Card photo='https://picsum.photos/200/200' />
        </div>
      </div>
      <News />
      <Footer />
    </>
  )
}

export default App
