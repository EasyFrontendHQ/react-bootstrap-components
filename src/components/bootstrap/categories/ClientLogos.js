import React, { Fragment } from "react";
import ClientLogo1 from "./clientLogos/ClientLogo1";
import ClientLogo2 from "./clientLogos/ClientLogo2";
import ClientLogo3 from "./clientLogos/ClientLogo3";
import ClientLogo4 from "./clientLogos/ClientLogo4";
import ClientLogo5 from "./clientLogos/ClientLogo5";

const ClientLogos = () => {
	return (
		<Fragment>
			<ClientLogo1 />
			<br />
			<ClientLogo2 />
			<br />
			<ClientLogo3 />
			<br />
			<ClientLogo4 />
			<br />
			<ClientLogo5 />
			<br />
		</Fragment>
	);
};

export default ClientLogos;
