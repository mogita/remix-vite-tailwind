import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <div className="container mt-10 mx-auto p-10 rounded bg-blue-500 text-white">
      <h1>Template for Remix (with Vite) + TailwindCSS</h1>
      <ul>
        <li>
          <a
            className="underline hover:text-pink-600"
            target="_blank"
            href="https://github.com/mogita/remix-vite-tailwind"
          >
            Checkout the Template on GitHub
          </a>
        </li>
        <li>
          <a
            className="underline hover:text-pink-600"
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            className="underline hover:text-pink-600"
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a className="underline hover:text-pink-600" target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  )
}
