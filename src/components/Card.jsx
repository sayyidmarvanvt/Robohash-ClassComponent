import React, { Component } from 'react'
import './Card.css'
export class Card extends Component {
  render() {
    return (
      <div className='card'>
        {this.props.previous.map((people)=>{
          return <div className='eachcard'>
                  <h2 key={people.id}>{people.name}</h2>
                  <img src={`https://robohash.org/${people.id}?set=set3`} alt="" />
                 </div>
        })}
      </div>
    )
  }
}

export default Card