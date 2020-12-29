import Head from 'next/head'
import Generator from '../components/generator'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Minecraft Pixel Art Aniation Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>Minecraft Pixel Art Animation Generator</h1>
        <p>Create pixel art animations for minecraft here!</p>
        <Generator />
      </div>
    </div>
  )
}
