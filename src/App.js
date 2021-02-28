import "./App.css"
import AnimatedNumber from "react-animated-numbers"
import { Button, Divider } from "antd"
import { useState, useEffect } from "react"

const configs = {
  default: { mass: 1, tension: 170, friction: 26 },
  gentle: { mass: 1, tension: 120, friction: 14 },
  wobbly: { mass: 1, tension: 180, friction: 12 },
  stiff: { mass: 1, tension: 210, friction: 20 },
  slow: { mass: 1, tension: 280, friction: 60 },
  molasses: { mass: 1, tension: 280, friction: 120 },
}

function App() {
  const [animateTonNumber, setAnimateToNumber] = useState(4023)
  const [animationType, setAnimationType] = useState("calm")
  const [currentConfig, setCurrentConfig] = useState("default")

  useEffect(() => {
    setAnimateToNumber(4023)
  }, [animationType])

  return (
    <div className="App">
      <section className="header">
        <AnimatedNumber
          fontStyle={{ fontSize: 70 }}
          animateToNumber={animateTonNumber}
          animationType={animationType}
          // config={configs[currentConfig]}
          config={{duration: 1300}}
          includeComma
        />
        <Divider type="horizontal" />
        <div>
          animationType: <span>{animationType}</span>
        </div>
        <div>
          spring config: <span>{currentConfig}</span>
        </div>
      </section>
      <section className="content">
        <Button
          title="increase"
          onClick={() => setAnimateToNumber((state) => state + 12345)}
        >
          increase
        </Button>
        <Button
          title="decrease"
          onClick={() => setAnimateToNumber((state) => state - 12345)}
        >
          decrease
        </Button>
        <Divider type="horizontal" />

        <span>change animation type</span>
        <Button
          title="change to random"
          onClick={() => setAnimationType("random")}
        >
          change to random
        </Button>
        <Button title="change to calm" onClick={() => setAnimationType("calm")}>
          change to calm
        </Button>

        <Divider type="horizontal" />
        <div className="config">
          <span>spring config</span>
          <Button
            title="default"
            onClick={() => setCurrentConfig("default")}
            type="link"
          >
            default
          </Button>
          <Button
            title="gentle"
            onClick={() => setCurrentConfig("gentle")}
            type="link"
          >
            gentle
          </Button>
          <Button
            title="wobbly"
            onClick={() => setCurrentConfig("wobbly")}
            type="link"
          >
            wobbly
          </Button>
          <Button
            title="stiff"
            onClick={() => setCurrentConfig("stiff")}
            type="link"
          >
            stiff
          </Button>
          <Button
            title="slow"
            onClick={() => setCurrentConfig("slow")}
            type="link"
          >
            slow
          </Button>
          <Button
            title="molasses"
            onClick={() => setCurrentConfig("molasses")}
            type="link"
          >
            molasses
          </Button>
        </div>
      </section>
    </div>
  )
}

export default App
