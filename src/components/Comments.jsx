// Comments.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Card as BootstrapCard } from "react-bootstrap";

const Comments = ({ userId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${userId}`
        );
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <Col>
      <BootstrapCard>
        <BootstrapCard.Header>
          <h2>Comments</h2>
        </BootstrapCard.Header>
        <BootstrapCard.Body>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>{comment.body}</li>
              ))}
            </ul>
          )}
        </BootstrapCard.Body>
      </BootstrapCard>
    </Col>
  );
};

export default Comments;
