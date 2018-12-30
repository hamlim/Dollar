import React, { useState } from 'https://unpkg.com/@matthamlin/danger-react-suspense/dev/react.js'
import ReactDOM from 'https://unpkg.com/@matthamlin/danger-react-suspense/dev/react-dom.js'

function App() {
  const [state, set] = useState(true)
  return <button onClick={() => set(!state)}>Toggled: {state.toString()}</button>
}

ReactDOM.render(<App />, document.querySelector('.root'))
