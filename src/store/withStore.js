import React from 'react'
import { inject } from 'mobx-react'

const withStore = (Component) => {
  const WrappedComponent = inject('store')(Component)
  return (props) => <WrappedComponent {...props} />
}

export default withStore