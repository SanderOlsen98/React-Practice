import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { API } from "../constants/Api";
import GameItem from "./GameItem";
import Heading from "./layout/Heading";

function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setGames(json.results);
        } else {
          setError("A server error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Spinner animation="grow" variant="info" className="loader" />;
  }

  if (error) {
    return <Alert variant="danger">An error occured</Alert>;
  }

  return (
    <Container>
      <Heading content="Games" />
      <Row>
        {games.map(function (game) {
          const { slug, name, image, released, genre } = game;
          return (
            <GameItem
              key={slug}
              name={name}
              image={image}
              released={released}
              genre={genre}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default GameList;
