// Albums.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Card as BootstrapCard } from "react-bootstrap";

const Albums = ({ userId }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
        );
        setAlbums(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <Col>
      <BootstrapCard>
        <BootstrapCard.Header>
          <h2>Albums</h2>
        </BootstrapCard.Header>
        <BootstrapCard.Body>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {albums.map((album) => (
                <li key={album.id}>{album.title}</li>
              ))}
            </ul>
          )}
        </BootstrapCard.Body>
      </BootstrapCard>
    </Col>
  );
};

export default Albums;
