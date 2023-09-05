import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card as BootstrapCard } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Card() {

    const {userId} = useParams();

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`);
        const albumsResponse = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        const photosResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`);

        setPosts(postsResponse.data);
        setComments(commentsResponse.data);
        setAlbums(albumsResponse.data);
        setPhotos(photosResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [userId]);

  return (<>
    {loading ? <p>Loading..</p> :
    <Container className="facebook-card">
      <h1 className='my-4'>User ID {userId} Card Details</h1>
      <Row className='mb-4 custom-row' >
        <Col>
          <BootstrapCard>
            <BootstrapCard.Header>
              <h2>Posts</h2>
            </BootstrapCard.Header>
            <BootstrapCard.Body>
              <ul>
                {posts.map((post) => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            </BootstrapCard.Body>
          </BootstrapCard>
        </Col>
        </Row>
        <Row className='mb-4 custom-row '> 
        <Col>
          <BootstrapCard>
            <BootstrapCard.Header>
              <h2>Comments</h2>
            </BootstrapCard.Header>
            <BootstrapCard.Body>
              <ul>
                {comments.map((comment) => (
                  <li key={comment.id}>{comment.body}</li>
                ))}
              </ul>
            </BootstrapCard.Body>
          </BootstrapCard>
        </Col>
      </Row>
      <Row className='mb-4 custom-row'>
        <Col>
          <BootstrapCard>
            <BootstrapCard.Header>
              <h2>Albums</h2>
            </BootstrapCard.Header>
            <BootstrapCard.Body>
              <ul>
                {albums.map((album) => (
                  <li key={album.id}>{album.title}</li>
                ))}
              </ul>
            </BootstrapCard.Body>
          </BootstrapCard>
        </Col>
        </Row>
        <Row className='mb-4 custom-row'>
        <Col>
          <BootstrapCard>
            <BootstrapCard.Header>
              <h2>Photos</h2>
            </BootstrapCard.Header>
            <BootstrapCard.Body>
              {/* <ul> */}
              <div className='d-flex flex-wrap gap-1'>
                {photos.map((photo) => (
                  <div key={photo.id}>
                    <img src={photo.url} width="100px" alt={photo.title} />
                  </div>
                ))}
                </div>
              {/* </ul> */}
            </BootstrapCard.Body>
          </BootstrapCard>
        </Col>
      </Row>
    </Container>
}</>
  );
}

export default Card;
