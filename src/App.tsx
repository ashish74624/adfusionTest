import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <iframe src="http://localhost:9000/adserve?zone_id=19&type=iframe" width="300" height="250" ></iframe>

      <p>new check</p>
      <iframe src="http://localhost:9000/adserve?zone_id=20&type=iframe" width="728" height="90" ></iframe>
    </>
  )
}

export default App
