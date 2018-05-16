import React from 'react'

const styles = {
  button: {
    borderRadius: "3px",
    backgroundColor: "#3498db",
    padding: "7px 16px",
    width: "400px",
    fontFamily: "YuGo-Bold",
    fontSize: "12px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "12px",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#fff",
  }
}

const Button = ({ children, onClick }) => (
  <div style={styles.button} onClick={onClick}>
    {children}
  </div>
)

export default Button
