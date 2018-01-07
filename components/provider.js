import { Component } from 'react'

class Provider extends Component {
  static defaultProps = {
    didCatch(err) {
      console.warn(err)
    },
  }
  state = this.props.initialState
  componentDidCatch = this.props.didCatch
  update = action => this.setState(state => this.props.reducer(state, action))
  render() {
    return this.props.render({ state: this.state, dispatch: this.update })
  }
}
export default Provider
