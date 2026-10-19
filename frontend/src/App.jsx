import { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
// Si usas estilos extra, puedes importarlos desde un archivo CSS
// import './App.css'; 

function App() {
  const [healthMsg, setHealthMsg] = useState('');
  const [info, setInfo] = useState([]);

  useEffect(() => {
    // Consumir api/health
    fetch('http://localhost:3000/api/health')
      .then(res => res.json())
      .then(data => setHealthMsg(data.mensaje))
      .catch(err => console.error('Error al conectar con la API de health:', err));

    // Consumir api/info
    fetch('http://localhost:3000/api/info')
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(err => console.error('Error al conectar con la API de info:', err));
  }, []);

  return (
    <Container className="mt-4">
      {/* Título en el Frontend */}
      <h1>Taller IV</h1> 

      {/* Sección del Health Check con las etiquetas específicas solicitadas */}
      <section className="health-section my-4">
        <div 
          className="health-container" 
          style={{ border: '2px solid #007bff', padding: '15px', borderRadius: '8px', backgroundColor: '#f8f9fa' }}
        >
          <h4>Estado de conexión</h4>
          <p>{healthMsg ? healthMsg : 'Cargando estado de la API...'}</p>
        </div>
      </section>

      {/* Sección de Info usando componentes de Reactstrap */}
      <h4 className="mt-4">Información del Equipo</h4>
      <Row>
        {info.map((integrante, index) => (
          <Col sm="6" md="4" key={index} className="mb-3">
            <Card color="light" className="shadow-sm">
              <CardBody>
                <CardTitle tag="h5" className="text-primary">{integrante.nombre}</CardTitle>
                <CardText>
                  <strong>Edad:</strong> {integrante.edad} años<br />
                  <strong>Carrera:</strong> {integrante.carrera}<br />
                  <strong>Materias aprobadas:</strong> {integrante.materiasAprobadas}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;