import { createRoot, Root } from 'react-dom/client';
import React from 'react'
import App from './components/App';
import './styles.scss';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Fail to get root element in index.js');

const root = createRoot(rootElement);

root.render(<App />);