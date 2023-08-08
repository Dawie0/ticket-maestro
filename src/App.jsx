import { ApiContextProvider } from './contexts/APIContext'
import MainWindow from './components/MainWindow'
import './App.css'

function App() {
  return (
    <ApiContextProvider>
      <MainWindow />
    </ApiContextProvider>
  )
}

export default App
