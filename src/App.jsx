import './App.css'
import CardModels from './Components/CardModels/CardModels'
// import DigitalTools from './Components/DigitalTools/DigitalTools'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Ui/Banner'
import Counter from './Components/Ui/Counter'
import Pricing from './Components/Ui/Pricing'
import Steps from './Components/Ui/Steps'



const getCardModels = async () => {
  const res = await fetch("/cardModels.json")
  return res.json()
}

const cardModelPromise = getCardModels()

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      {/* <DigitalTools></DigitalTools> */}
      <CardModels cardModelPromise = {cardModelPromise}></CardModels>
      <Steps></Steps>
      <Pricing></Pricing>
    </>
  )
}

export default App
