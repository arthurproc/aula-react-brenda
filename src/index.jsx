import './style.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// O que é um componente react?
// É uma função que retorna um JSX
 
// Criando a nossa própria tag html
const root = createRoot(document.getElementById('root'));
root.render(<App />);
