import React, { Fragment } from "react";
import TeamMember1 from "./team-members/TeamMember1";
import TeamMember2 from "./team-members/TeamMember2";
import TeamMember3 from "./team-members/TeamMember3";
import TeamMember4 from "./team-members/TeamMember4";
import TeamMember5 from "./team-members/TeamMember5";

const TeamMembers = () => {
	return (
		<Fragment>
			<TeamMember1 />
			<br />
			<TeamMember2 />
			<br />
			<TeamMember3 />
			<br />
			<TeamMember4 />
			<br />
			<TeamMember5 />
			<br />
		</Fragment>
	);
};

export default TeamMembers;
