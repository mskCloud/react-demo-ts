import React from 'react'
type CardProps = {
  className?: string
  children?: React.ReactNode
  headerSlot?: React.ReactNode
  floorSlot?: React.ReactNode
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
    const showHeader = this.props.header
    const showFloor = this.props.floor
    const bodyClass = `r-card-body ${this.props.bodyClass || ''}`
    const className = this.props.className || ''
    return (
      <div className={`r-card ${className}`}>
        {showHeader && <div className="r-card-header">{this.props.headerSlot}</div>}

        <div className={bodyClass}>{this.props.children}</div>

        {showFloor && <div className="r-card-floor">{this.props.floorSlot}</div>}
      </div>
    )
  }
}
export default Card
