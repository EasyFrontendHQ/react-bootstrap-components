import React, { Fragment } from "react";
import BuyTicket1 from "./buyTicketForm/BuyTicket1";
import BuyTicket2 from "./buyTicketForm/BuyTicket2";

function BuyTicket() {
	return (
		<Fragment>
			<BuyTicket1 />
			<br />
			<BuyTicket2 />
		</Fragment>
	);
}
export default BuyTicket;
