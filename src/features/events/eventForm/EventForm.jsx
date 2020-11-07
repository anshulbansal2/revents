import cuid from "cuid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";


export default function EventForm({
    setFormOpen, 
    setEvents, 
    createEvent, 
    selectedEvent, 
    updatedEvent
}) {
console.log(selectedEvent);  
const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: ''
};

    const [values, setValues] = useState(initialValues);

    function handleFormSubmit() {
        selectedEvent ? 
        updatedEvent({...selectedEvent, ...values}) 
        :
        createEvent({...values, 
            id: cuid(), 
            hostedBy: 'Shikha', 
            attendees: [],
            hostPhotoURL: '/assets/user.png',

        });
        setFormOpen(false);
    }

    function handleInputChange(e) {
        const {name, value} = e.target
        setValues({...values, [name]: value});
    }

    return (
        <Segment clearing>
            <Header content={selectedEvent ? 'Edit Event' : 'Create new event'}/>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input type="text" 
                    placeholder='Event title' 
                    value={values.title}
                    name='title'
                    onChange={(e) => 
                        handleInputChange(e)
                        }/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Category' 
                     value={values.category}
                     name='category'
                     onChange={(e) => 
                         handleInputChange(e)
                         }/>
                </Form.Field>
                <Form.Field>
                    <input type="text" 
                    placeholder='Description'  
                    value={values.description}
                    name='description'
                    onChange={(e) => 
                        handleInputChange(e)
                        }/>
                </Form.Field>
                <Form.Field>
                    <input type="text" 
                    placeholder='City'  
                    value={values.city}
                    name='city'
                    onChange={(e) => 
                        handleInputChange(e)
                        }/>
                </Form.Field>
                <Form.Field>
                    <input type="text" 
                    placeholder='Venue'  
                    value={values.venue}
                    name='venue'
                    onChange={(e) => 
                        handleInputChange(e)
                        }/>
                </Form.Field>
                <Form.Field>
                    <input type="date" 
                    placeholder='Date'  
                    value={values.date}
                    name='date'
                    onChange={(e) => 
                        handleInputChange(e)
                        }/>
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button as={Link} to='/events' type='Submit' floated='right' content='Cancel' />
            </Form>
        </Segment>
    )
}