import { useState } from 'react'
import styles from './index.module.css'
import { Button } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <div className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          {count}
        </Button>

      </div>

    </div>
  )
}

export default App
