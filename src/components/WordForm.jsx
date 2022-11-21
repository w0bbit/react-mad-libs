export default function WordForm({words, updateMadLibWord}) {

  return (
    <form id="div-words">
      {words.map((word,i)=>{
        return(
          <div key={i}>
            <input onChange={(event)=>updateMadLibWord(i, event.target.value)} placeholder={word.label} value={word.value} />
            <br />
          </div>
        )})}
    </form>
  )
}