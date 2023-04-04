import { useState } from 'react'
import styles from './index.module.scss'
import { Button } from 'antd'
const App: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={styles.app}>
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
        {count}
      </Button>
    </div>
  )

}

export default App
