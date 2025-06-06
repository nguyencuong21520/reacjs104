
import './App.css'
import Hello from './components/Hello/Hello'

function App() {

  return (
    <>
    <h1>Bai Bai</h1>
    <p>Hôm nay tôi học ReactJS</p>

    <Hello name="Cuong" age={20} />
    <Hello name="Khanh" age={21} />
    <Hello name="Tâm" age={16} />

    </>
  )
}

export default App
