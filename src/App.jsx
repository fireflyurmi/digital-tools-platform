import './App.css'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Ui/Banner'
import Counter from './Components/Ui/Counter'
import Pricing from './Components/Ui/Pricing'
import Steps from './Components/Ui/Steps'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <DigitalTools></DigitalTools>
      <Steps></Steps>
      <Pricing></Pricing>
    </>
  )
}

export default App
