import { Route, Routes } from "react-router-dom"
import Memotest from "./screens/memotest"
import Pokemon from "./screens/pokemon"
import WordsPerMinute from "./screens/wordsperminute"

function App() {
  return (
    <Routes> 
        <Route path="/memotest" element={<Memotest/>} />
        <Route path="/wordsperminute" element={<WordsPerMinute/>} />
        <Route path="/pokemon" element={<Pokemon/>} />
    </Routes>
  );
}


export default App