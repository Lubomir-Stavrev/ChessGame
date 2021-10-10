import React from "react";
import "./Chessboard.css";
import Pawn from "../../assets/images/bPawn.png";
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function chessBoard() {
	let board = [];

	for (let i = verticalAxis.length - 1; i >= 0; i--) {
		for (let j = 0; j < horizontalAxis.length; j++) {
			let number = j + i + 2;

			if (number % 2 === 0) {
				board.push(
					<span className="tile black-tile">
						<img src={Pawn} alt="" />
					</span>
				);
			} else {
				board.push(<span className="tile white-tile"></span>);
			}
		}
	}
	return <div id="chessBoard">{board}</div>;
}
