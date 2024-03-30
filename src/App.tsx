import { Route, Routes } from 'react-router-dom'
import {Home} from './pages/home'
import { SignIn } from './pages/sign_in'
import {SignUp} from './pages/sign_up'
import DefaultLayout from './components/default_layout'
import PageNotFound from './pages/page_not_found'

function App() {

  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sing_up' element={<SignUp />} />
          <Route path='/sing_in' element={< SignIn />} />
          <Route path='*' element={< PageNotFound />} />
        </Routes>
      </DefaultLayout>
    </>
  )
}

export default App
