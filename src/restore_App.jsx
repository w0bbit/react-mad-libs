print = console.log
import { useState } from 'react'
import './App.css'
// import Header from './components/Header'
import MadLibsData from './data/MadLibs'
import Selector from './components/Selector'
import Story from './components/Story'
import WordForm from './components/WordForm'


export default function App() {
  // states
  const [selectedMadLib, setSelectedMadLib] = useState(MadLibsData[0])

  // event handlers
  const updateMadLibWord = (wordIndex, wordValue) => {  
    let newSelectedMadLib = { ...selectedMadLib }

    newSelectedMadLib.words[wordIndex] = {
      ...newSelectedMadLib.words[wordIndex],
      userWord: wordValue
    }

    setSelectedMadLib(newSelectedMadLib)
  }

  // renders
  return (
    <div className="App">
      <h2>MadLibs!</h2>
      <hr />
      <Selector data={MadLibsData} setSelectedMadLib={setSelectedMadLib} />
      <hr />
      <WordForm words={selectedMadLib.words} updateMadLibWord={updateMadLibWord} />
      <Story text={selectedMadLib.getText()} />
    </div>
  )
}
