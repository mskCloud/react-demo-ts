import React from 'react'
type CardProps = {
  children?: React.ReactNode
  header?: boolean
  floor?: boolean
  bodyClass?: string
}

type CardState = {
  header?: boolean
  floor?: boolean
}

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps | Readonly<CardProps>) {
    super(props)
    this.state = {}
  }
  render(): React.ReactNode {
    const showHeader = this.props.header || true
    const showFloor = this.props.floor
    const bodyClass = `r-card-body ${this.props.bodyClass}`
    return (
      <div className="r-card">
        {showHeader && <div className="r-card-header"></div>}

        <div className={bodyClass}>{this.props.children}</div>

        {showFloor && <div className="r-card-floor"></div>}
      </div>
    )
  }
}
export default Card
