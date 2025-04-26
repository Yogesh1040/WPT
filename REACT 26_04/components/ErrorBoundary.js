import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isCond: false
        }
    }
    static getDerivedStateFromError() {
        return {
            isCond: true
        }
    }

    render() {
      if(this.state.isCond){
        return <h2>Not A user</h2>
      }
      return this.props.children;
    }
}

export default ErrorBoundary
