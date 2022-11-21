export default function Selector({data, setSelectedMadLib}) {

  const handleChange = (event) => {
    setSelectedMadLib(data[event.target.value])
  }
  
  return (
    <div id="div-selector">
      <span>Select Story: </span><br />
      <select onChange={handleChange}>
        {data.map((item,i)=><option key={i} value={i}>{item.title}</option>)}
      </select>
    </div>
  )
}