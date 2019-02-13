import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponenttien tila',
                exercises: 14
            }
        ]
    }
    const Header = (props) => {
        return (
            <div>
                <h1>{props.header}</h1>
            </div>
        )
    }

    const Part = (props) => {
        return (
            <div>
                <p>{props.part.name} {props.part.exercises}</p>
            </div>
        )
    }

    const Content = (props) => {
        return (

            <div>
                {props.parts.map(part =>
                    <Part part={part} key={part.name}/>)
                }
            </div>
        )
    }

    const Total = (props) => {
        const sum = (list) => {
            let sum = 0
            list.forEach(element => {
                sum += element.exercises    
            });
            return sum;
        }
        return (
            <div>
                <p>yhteensä {sum(props.parts)} tehtävää</p>
            </div>
        )
    }

    return (
        <div>
            <Header header={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))