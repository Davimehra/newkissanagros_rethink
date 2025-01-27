import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'typeface-roboto';

const root = ReactDOM.createRoot(document.querySelector('#root'))

function Index() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

root.render(<Index />)
