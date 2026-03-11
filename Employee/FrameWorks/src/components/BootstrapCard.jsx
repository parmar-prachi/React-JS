import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function BootstrapCard() {
    return (
        <Card className="shadow-lg custom-card">
            <Card.Body className="text-center">
                <Card.Title className="text-primary">
                    Student Profile (Bootstrap) </Card.Title>
                <Card.Text> Name: Prachi Parmar <br />
                    Course: Full Stack Development (React Fundamentals)
                </Card.Text>
                <Button variant="success">
                    View Profile</Button>
            </Card.Body>
        </Card>)
} export default BootstrapCard