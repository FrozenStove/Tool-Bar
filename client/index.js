import { createRoot, Root } from 'react-dom/client';
import React from 'react'
import Home from './components/Home';
import './styles.css';
// import App from './components/App';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Fail to get root element in index.js');

const root = createRoot(rootElement);

root.render(<Home />);