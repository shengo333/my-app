import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Shengo Github Projects Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://gist.github.com/shengo333">Portfolio By Shengo333</a>
        </h1>

        <p className={styles.description}>
          Get started{' '}

        </p>

        <div className={styles.grid}>
          <a href="https://github.com/shengo333/vissit" className={styles.card}>
            <h2>Visit &rarr;</h2>
            <p>Find in-depth information about Visit style page by Shengo333</p>
          </a>

          <a href="https://github.com/shengo333/keyboard" className={styles.card}>
            <h2>Keyboard &rarr;</h2>
            <p>Learn about Keyboard created by shengo333created by shengo333</p>
          </a>

          <a
            href="https://github.com/shengo333/quote-machine"
            className={styles.card}
          >
            <h2>Quote Machine &rarr;</h2>
            <p>Learn about quote-machin created by shengo333</p>
          </a>

          <a
            href="https://github.com/shengo333/colorful-box"
            className={styles.card}
          >
            <h2>Colorful-Box &rarr;</h2>
            <p>
            Learn about Colorful Box created by shengo333.
            </p>
          </a>
          <a
            href="https://github.com/shengo333/drum-machine"
            className={styles.card}
          >
            <h2>Drum-Machine &rarr;</h2>
            <p>
            Learn about Drum-Machine created by shengo333.
            </p>
          </a>
          <a
            href="https://github.com/shengo333/markdown"
            className={styles.card}
          >
            <h2>Markdown page &rarr;</h2>
            <p>
            Learn about Markdown page created by shengo333.
            </p>
          </a>
          <a
            href="https://github.com/shengo333/colorful-box"
            className={styles.card}
          >
            <h2>Ugly-Calculator&rarr;</h2>
            <p>
            Learn about Ugly-Calculator created by shengo333.
            </p>
          </a>
          <a
            href="https://github.com/shengo333/calculator"
            className={styles.card}
          >
            <h2>Beautiful-CalCulator &rarr;</h2>
            <p>
            Learn about Beautiful-CalCulator created by shengo333.
            </p>
          </a>


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" Shengo333"}
          <span className={styles.logo}>
            <Image src="/johnlogo.jpg" alt="John Logo" width={92} height={45}/>
          </span>
        </a>
      </footer>
    </div>
  )
}
