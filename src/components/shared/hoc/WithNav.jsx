import React from 'react';
import Header from '../../Header/Header.jsx'

const WithNav = (WrappedComponent) => {
  return class extends React.Component {

    render() {
      return (
      <React.Fragment>
      <Header />
      <WrappedComponent {...this.props} />
      </React.Fragment>
    )};
  }
}

export default WithNav;
