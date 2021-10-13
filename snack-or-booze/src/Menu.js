import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

/* Display snacks or drinks menu, linking to each item */
function Menu({ items, type, title, description }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardText className="font-italic">
            {description}
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${type}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <Link exact to={`/${type}/add`} className="add-link">Add a new item</Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
