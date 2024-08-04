// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchedInput = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-main">
        <h1>Destination Search</h1>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearch}
          />
          <button type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="icon-img"
            />
          </button>
        </div>

        <ul className="loc-conts">
          {searchedInput.map(eachItem => (
            <DestinationItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
