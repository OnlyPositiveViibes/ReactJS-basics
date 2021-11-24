import React from "react"
import SmallSquare from "./Components/Start2/SmallSquare"
import digitSquares from "./Data/digitSquares"

class App extends React.Component{

    render() {

        return (
            <div className="App">
                <div className="big-blue">
                    <SmallSquare color={'crimson'} number={5}></SmallSquare>
                    <SmallSquare color={'orange'} number={7}></SmallSquare>
                    <SmallSquare color={'lime'} number={8}></SmallSquare>
                    <SmallSquare color={'red'} number={19}></SmallSquare>

                </div>

                {/* Antrasis budas */}
                <div className="big-blue">
                    {
                        digitSquares.map((s, i) => <SmallSquare ke={i} color={s.color} number={s.number} />)
                    }
                </div>
            </div>

        )
    }
}

export default App