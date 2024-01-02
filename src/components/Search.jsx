import React, { Component } from 'react'
import { CiSearch } from "react-icons/ci";
import "./Search.css"

export class Search extends Component {
  render() {
    return (
        <form className="searchbar">
        <button type="submit"><CiSearch/></button>
        <input type="search" placeholder="Search" onChange={this.props.onChange} />
        </form>
    )
  }
}

export default Search