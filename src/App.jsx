import propTypes from 'prop-types';


const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

Hello.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
}

const App = () => {
  const nimi = "Pekka"
  const ika = 20 

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Waltteri" age={10 + 20}/>
      <hr></hr>
      <Hello name={nimi} age={ika}/>
    </div>
  )
}

export default App