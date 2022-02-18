import './App.css'
import { CakeView } from './features/cake/CakeView'
import { IcecreamView } from './features/icecream/IcecreamView'
import { UserView } from './features/user/UserView'

function App() {
  return (
    <div className='App'>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}

export default App
