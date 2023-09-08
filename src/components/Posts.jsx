import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Card as BootstrapCard } from "react-bootstrap";

const Posts = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <Col>
      <BootstrapCard>
        <BootstrapCard.Header>
          <h2>Posts</h2>
        </BootstrapCard.Header>
        <BootstrapCard.Body>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </BootstrapCard.Body>
      </BootstrapCard>
    </Col>
  );
};

export default Posts;
