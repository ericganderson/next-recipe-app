import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About page</h1>
      <Link href="/">
        <a>go home</a>
      </Link>
    </div>
  )
}
