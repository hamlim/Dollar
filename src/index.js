import React, {
  useState,
} from 'https://mh-unumd.glitch.me/@matthamlin/danger-react-suspense/dev/react.js?exports=named'
import 'https://unpkg.com/@matthamlin/danger-react-suspense/dev/react-dom.js'

function App() {
  const [state, set] = useState(true)
  return <button onClick={() => set(!state)}>Toggled: {state.toString()}</button>
}

ReactDOM.render(<App />, document.querySelector('.root'))
