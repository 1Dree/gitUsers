import React from "react";
import Card from "./Card";

const cardComponent = ({ id, avatar_url, login, type }) => (
  <Card key={id} img={avatar_url} name={login} type={type} />
);

const Cards = ({ users }) => <div id="cards">{users.map(cardComponent)}</div>;

export default Cards;
