import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import sizeMe from 'react-sizeme'
import Confetti from 'react-confetti'
import PropTypes from 'prop-types'
import Particles from "react-particles-js";

ReactDOM.render(<App/>, document.getElementById('root'));

const BirthdayConfetti = sizeMe({
  monitorHeight: true,
  monitorWidth: true,
})(class BirthdayConfetti extends React.PureComponent {
  static propTypes = {
    size: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  }

  render() {
    return (
      <>
        <Particles
          height='100vh'
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 1000,
                }
              },
              move:{
                enable: true,
                speed: 5,
              },
            },
          }}
        />
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
          {/*<div style={{*/}
          {/*  position: 'fixed',*/}
          {/*  top: 0,*/}
          {/*  left: 0,*/}
          {/*  width: '100%',*/}
          {/*  height: '100%',*/}
          {/*  background: `url(${require('./danko.png')}) center`,*/}
          {/*  backgroundSize: 'cover',*/}
          {/*  opacity: '0.2'*/}
          {/*}}/>*/}
          <Confetti {...this.props.size} />
        </div>
      </>
    )
  }
})

ReactDOM.render(<BirthdayConfetti/>, document.getElementById('app'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
