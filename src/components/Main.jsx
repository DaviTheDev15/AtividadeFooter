import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Main = () => {

  return (
    <main>
      <Container fluid className='mt-5'>
        <Row>
          <Col>    
            <Card>
              <Card.Img variant="top" src="https://tse4.mm.bing.net/th?id=OIP.kMe5vSkLrUv02RKBigtlYgHaE7&pid=Api&P=0&h=180"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col><Card>
              <Card.Img variant="top" src="https://tse4.mm.bing.net/th?id=OIP.SdZcm4jKwuxnDV7jOesbVQHaE8&pid=Api&P=0&h=180"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card></Col>
          <Col><Card>
              <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.-m_EesdA5AcWPmuP8N_4lgHaE7&pid=Api&P=0&h=180"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card></Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
