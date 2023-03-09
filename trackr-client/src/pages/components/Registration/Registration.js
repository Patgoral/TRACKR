import { useNavigate } from 'react-router-dom'
import * as attendeesAPI from '../../utilities/attendees-api'
import './Registration.css'

export default function Registration({ attendee, setAttendee }) {
    const navigate = useNavigate()

    //ADD A ATTENDEE
    async function handleAddAttendee(event) {
        event.preventDefault()
        const attendeeData = { attendee: attendee }
        const attendeeToAdd = await attendeesAPI.addAttendee(
            attendeeData
        )
        setAttendee(attendeeToAdd)
        navigate('/events')
    }
    //HANDLES THE CHANGE IN INPUT
    function handleInputChange(event) {
        const addNewAttendee = {
            ...attendee,
            [event.target.name]: event.target.value,
        }
        setAttendee(addNewAttendee)
    }

    return (
        <div className='wrap-div'>
            <div className='register-page'>
                <div className='flex-item'><Info />
                    <div className="register-form-container">

                        <div className="register-header">Enter your Info below to Join Us!</div>
                        <form className="register-form" onSubmit={handleAddAttendee}>
                            <div>
                                <input
                                    placeholder="Name"
                                    name="name"
                                    value={attendee.name || ''}
                                    onChange={handleInputChange}
                                />
                                <input
                                    placeholder="Location"
                                    name="location"
                                    value={attendee.location || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button className="register-button" type="submit">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}