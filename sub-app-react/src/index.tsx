import './public-path'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

function render(props: any) {
  const { container } = props

  const root = ReactDOM.createRoot(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  )

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props: any) {
  console.log('[react16] props from main framework', props)
  render(props)
}

export async function unmount(props: any) {
  const { container } = props


  // @ts-ignore
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  )
}
