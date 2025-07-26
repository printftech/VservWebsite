
import { createRoot } from 'react-dom/client'
import 'devextreme/dist/css/dx.light.css'; // ✅ should now work
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <App />
)
