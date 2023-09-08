import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card} from "react-bootstrap";

const MainPage = () => {
    const [uniqueUserIds, setUniqueUserIds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/albums")
            .then((response) => {
                const data = response.data;
                const userIds = [...new Set(data.map((album) => album.userId))];
                setUniqueUserIds(userIds);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    return (
        <>
            {loading ? <p>Loading...</p> : 
            <Container>
                <Row className="my-4">
                    <Col>
                        <h1>FaceBook Cards</h1>
                    </Col>
                </Row>
                <Row>
                    {uniqueUserIds.map((userId, index) => (
                        <Col key={userId} md={3} sm={6} xs={12} className="mb-4">
                            <Link to={`card/${userId}`} className="link">
                                <Card className="card-custom" data-testid={`user-card-${index}`}>
                                    <Card.Body>
                                        <Card.Title>User {userId}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
            }
        </>
    );
};

export default MainPage;
