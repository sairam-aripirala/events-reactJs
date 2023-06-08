// Write your code here
import './index.css'

const eventStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const renderInitialState = () => (
    <p className="initial-text">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegisteredState = () => (
    <div className="active-card-details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-tick-image"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterState = () => (
    <div className="active-card-details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yet-to-register-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art of form.
      </p>
      <button className="yet-to-register-btn" type="button">
        Register Here
      </button>
    </div>
  )

  const renderEventClosedState = () => (
    <div className="active-card-details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-image"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="closed-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (eventStatus) {
    case eventStatusConstants.registered:
      return renderRegisteredState()
    case eventStatusConstants.yetToRegister:
      return renderYetToRegisterState()

    case eventStatusConstants.closed:
      return renderEventClosedState()
    default:
      return renderInitialState()
  }
}

export default ActiveEventRegistrationDetails
