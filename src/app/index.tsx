import { Link } from 'react-router-dom'
import styles from './index.module.scss'
const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Link to={"/home"}>home</Link>
    </div>
  )

}

export default App
