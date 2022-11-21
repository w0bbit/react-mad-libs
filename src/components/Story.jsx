import {useState} from 'react'

export default function Story({text}) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <button onClick={()=>setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
        {isVisible && 
          <div id="div-story">
            {text}
          </div>
        }
    </>
  )
}