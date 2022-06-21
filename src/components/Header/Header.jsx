import * as React from "react"
import "./Header.css"

export function Header(props) {
  return (
    <header className="header">
      <h1 className="title">{props.info.title}</h1>
      <h4 className="tagline">{props.info.tagline}</h4>
      <p className="description">{props.info.description}</p>
    
    </header>
  )
}

export default Header
