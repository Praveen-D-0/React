const Hello = (props) => {
  console.log(props);
  return (
    <p>Hello {props.name} , you are {props.age}</p>
  )
}


function App() { 
  const age = 25;

  return (
  <>
   <h1>Greetings</h1>
   <p>Hello Guest</p>
   <Hello name ='sathish' age={10+20} />
   <Hello name='Krish' age={age} />
  </>)
}

export default App; 