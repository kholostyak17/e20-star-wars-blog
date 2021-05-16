import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.js";

import "../../styles/people.scss";

export const People = () => {
	const { store, actions } = useContext(Context);
	const [peopleCards, setPeopleCards] = useState([]);

	console.log(store.people.results);
	useEffect(
		() => {
			if (store.people.results != undefined) {
				setPeopleCards(
					store.people.results.map((elem, index) => {
						return <Card key={index.toString()} title={elem.name} />;
					})
				);
			}
		},
		[store.people]
	);
	console.log("People Cards:", peopleCards);

	/*setCardsMap(
		store.people[0].results.map((elem, index) => {
			return <MediaCard key={index.toString()} title={elem.results[index].name} />;
		})
	);*/
	// key={elem.uid} title={elem.name} button={elem.url}

	return (
		<div className="text-center mt-1">
			<h1>Hello Rigo!</h1>
			<p />
			<a href="#" className="btn btn-danger mb-1">
				If you see this red button, bootstrap is working
			</a>
			<div className=" d-flex flex-wrap justify-content-around">{peopleCards}</div>
		</div>
	);
};

//Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
