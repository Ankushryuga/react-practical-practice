const MyComponent=({data}}=>{
  const firstThree=data.slice(0, 3);
  return (
  <div>
   <h2>First Three Items</h2> 
    <ul>
      {firstThree.map((item, index)=>(
      <li key={index}>{item}</li>
      )
    </ul>
  </div>
  )
}
