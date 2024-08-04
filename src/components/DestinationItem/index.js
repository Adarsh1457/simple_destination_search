// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {eachItem} = this.props
    return (
      <li>
        <img src={eachItem.imgUrl} alt={eachItem.name} className="place-img" />
        <p className="place-name">{eachItem.name}</p>
      </li>
    )
  }
}

export default DestinationItem
