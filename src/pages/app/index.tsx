import { useState } from 'react'
import styles from './index.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
      </div>

    </div>
  )
}

export default App
