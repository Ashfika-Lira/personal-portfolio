import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects,setProjects] = useState([])

    useEffect(()=>{
        fetch('./projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div className="my-5">
            <Container>
            <h2 className="text-end" style={{color:'aqua',fontFamily:"'Oswald', sans-serif",fontSize:'50px'}}>#All Projects Here</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    projects.map(project => <Col key={project?.id}>
                        <Card>
                          <Card.Img variant="top" src={project?.img} />
                          <Card.Body>
                            <Card.Title>{project?.name}</Card.Title>
                            <Card.Text style={{textAlign:'justify'}}>
                            {project?.description?.slice(0,120)} <Link>more...</Link>
                            </Card.Text>
                            <Link to={`/details/${project?.id}`}><Button className="me-3">Details</Button></Link>
                            <Button className="me-3">Links</Button>
                          </Card.Body>
                        </Card>
                      </Col>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default Projects;