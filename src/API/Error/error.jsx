import React from 'react';
import { Container, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PostError({error}) {
  return (
    <Container className="mt-5">
          <h1>{ error}</h1>
            <Button href="/">
                <i className="bi bi-wifi"></i> Diagnose Network
            </Button>
    </Container>
  )
}
