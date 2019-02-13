import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => (
    <h1>{title}</h1>
)

const Button = ({text, handleClick}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>  
    )
}

const Palaute = ({title, handleHyvaClick, handleNeutraaliClick, 
handleHuonoClick}) => {
    return (
    <div>
        <Header title={title} />
        <Button text='hyvä' handleClick={handleHyvaClick} />
        <Button text='neutraali' handleClick={handleNeutraaliClick} />
        <Button text='huono' handleClick={handleHuonoClick} />
    </div>
    )
}

const Statistic = ({title, maara}) => {
  return (
      <div>
      <p>{title} {maara}</p>
      </div>
  )
}



const Statistics = (props) => {
    return (
        <div>
        <Header title={props.title} />
          <Statistic title='hyvä' maara={props.hyvia} />
          <Statistic title='neutraali' maara={props.neutraaleja} />
          <Statistic title='huono' maara={props.huonoja} />
            <Statistic title='yhteensä' maara={props.yhteensa} />
            <Statistic title='keskiarvo' maara={props.keskiarvo} />
            <Statistic title='positiivisia' maara={props.positiivisia} />

          </div>
    )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleHyvaClick = () => {
        setGood(good+1)
}
const handleNeutraaliClick = () => {
        setNeutral(neutral+1)
}
const handleHuonoClick = () => {
        setBad(bad+1)
}

const kokonaismaara = () => (good+neutral+bad)

const positiivisia = () => (good*100/kokonaismaara()+'%')

const keskiarvo = () => ((good-bad)/kokonaismaara())

  return (
    <div>
      <Palaute title={'anna palautetta'}
      handleHyvaClick={handleHyvaClick}
      handleNeutraaliClick={handleNeutraaliClick}
      handleHuonoClick={handleHuonoClick} />
      <Statistics title={'Statistic'}
        huonoja={bad}
        hyvia={good}
        neutraaleja={neutral} 
        yhteensa={kokonaismaara()}
        keskiarvo={keskiarvo()}
        positiivisia={positiivisia()}
        />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));