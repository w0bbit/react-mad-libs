print = console.log
import "./App.css"
import React, { useState } from "react"

// data
import MadLibsData from "./data/MadLibs"

// components
import Selector from "./components/Selector"
import Story from "./components/Story"
import WordForm from "./components/WordForm"

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
      <WordForm words={selectedMadLib.words} updateMadLibWord={updateMadLibWord} getWord={selectedMadLib.getWord} /><br />
      <Story text={selectedMadLib.getText()} />
    </div>
  )
}
