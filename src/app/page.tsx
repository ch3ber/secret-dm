// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

function fetchResponse () {
  return fetch('http://localhost:3000/api/hello', { cache: 'no-store' }).then(res => res.json())
}

export default async function Home () {
  const res = await fetchResponse()
  console.log(res)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <main>
        {res.name}
      </main>
    </>
  )
}
