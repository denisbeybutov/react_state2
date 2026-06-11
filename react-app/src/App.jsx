import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TabView from './tab/tab'
import UserFilter from './UserFilter/UserFilter'
import Menu from './menu/menu'
import SyncedInputs from './input/input'
import FilterableList from './list/list'
import MainComp from './MainComp/MainComp'
import PaymentForm from './PaymentForm/PaymentForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Фрома оплты */}
    <PaymentForm/>

    {/* Синхронизация выбора */}
    {/* <MainComp/> */}

    {/* <FilterableList/> */}
    {/* <SyncedInputs/> */}
    {/* <Menu/> */}
    {/* <UserFilter/> */}
    {/* <TabView/> */}
    </>
  )
}

export default App
