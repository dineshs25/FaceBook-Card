// Card.js
import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Posts from "../components/Posts";
import Comments from "../components/Comments";
import Albums from "../components/Albums";
import Photos from "../components/Photos";


const Card = () => {
  const { userId } = useParams();

  return (
    <Container className="facebook-card">
      <h1 className="my-4">User ID {userId} Card Details</h1>
      <Posts userId={userId} />
      <Comments userId={userId} />
      <Albums userId={userId} />
      <Photos userId={userId} />
    </Container>
  );
};

export default Card;
