import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProject = () => {
    const [projects,setProjects] = useState([])
    useEffect(()=>{
        fetch('./projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])

    return (
        <div className="my-5">
          <h2 className="text-secondary text-center">My projects</h2>  
            <Container>
            
            <Row xs={1} md={3} className="g-4">
                {
                    projects.slice(0,3).map(project => <Col key={project?.id}>
                        <Card>
                          <Card.Img variant="top" src={project?.img} />
                          <Card.Body>
                            <Card.Title>{project?.name}</Card.Title>
                            <Card.Text style={{textAlign:'justify'}}>
                            {project?.description?.slice(0,120)} <Link to="/projects">more...</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default SingleProject;