import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const elem = React.createElement('h1', {}, 'hello from react')

createRoot(document.getElementById('root')).render(elem);
