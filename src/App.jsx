const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const nimi = "Pekka"
  const ika = 25 

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="Waltteri" />
      <Hello name={nimi} age={ika}/>
    </div>
  )
}

export default App