// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onViewEvent, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const viewEvent = () => {
    onViewEvent(id)
  }

  const itemClass = isActive ? 'active-item' : ''

  return (
    <li className="event-card-container" onClick={viewEvent}>
      <button className="card-btn" type="button">
        <img src={imageUrl} alt="event" className={`card-image ${itemClass}`} />
      </button>

      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
