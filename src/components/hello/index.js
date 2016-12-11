/* Libraries */
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '50px'
  },
  text: {
    color: '#333'
  }
})

class Hello extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <h1 className={css(styles.text)}>Hello, world!</h1>
      </div>
    );
  }
}

export default Hello;
