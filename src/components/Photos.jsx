// Photos.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Card as BootstrapCard } from "react-bootstrap";

const Photos = ({ userId }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${userId}`
        );
        setPhotos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <Col>
      <BootstrapCard>
        <BootstrapCard.Header>
          <h2>Photos</h2>
        </BootstrapCard.Header>
        <BootstrapCard.Body>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="d-flex flex-wrap gap-1">
              {photos.map((photo) => (
                <div key={photo.id}>
                  <img src={photo.url} width="100px" alt={photo.title} />
                </div>
              ))}
            </div>
          )}
        </BootstrapCard.Body>
      </BootstrapCard>
    </Col>
  );
};

export default Photos;
