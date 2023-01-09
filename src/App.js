import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import './App.css'
import {Home} from './Pages/Home/Home'
import AddTodo from './Pages/AddTodo/AddTodo'
import ViewTodo from './Pages/ViewTodo/View-Todo'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav className='container'>
         
              <Link to='/todo'><button className='todoButton'>Todos</button></Link>
            
              <Link to='/add-todo'><button className='todoButton'>Add Todos</button></Link>
        
        </nav>
        <Routes>
          <Route path='/add-todo' element={<AddTodo />} />
          <Route path="/todo/:id" element={<ViewTodo/>}/>
          <Route path='/todo' element={<Home/>} />
            
        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  )
}

export default App
