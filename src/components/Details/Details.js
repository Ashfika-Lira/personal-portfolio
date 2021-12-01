import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const {id} = useParams()
    const [projects,setProjects] = useState([])

    useEffect(()=>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => {
            const selected = data.find(select => select?.id === +id)
            setProjects(selected)
        })
    },[id])

    return (
        <div className="my-5 text-light">
            <Container>
            <h2 className="text-end" style={{color:'aqua',fontFamily:"'Oswald', sans-serif",fontSize:'50px'}}>#Project Details</h2>
                <div className="row text-primary">
                    <div className="col-12 col-md-6 text-start">
                        <h3>{projects?.name}</h3>
                        <p>{projects?.title}</p>
                        <ul>
                            {
                                projects?.bullet?.map(a => <li>{a}</li>)
                            }
                        </ul>
                    </div>
                    <div className="col-12 col-md-6">
                    <div  style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'10px'}}>
                    <Card.Img variant="top" src={projects?.img} />
                    <Card.Img variant="top" src={projects?.img1} />
                    <Card.Img variant="top" src={projects?.img2} />
                    <Card.Img variant="top" src={projects?.img3} />
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Details;