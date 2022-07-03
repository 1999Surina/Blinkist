import React from "react";
import { Icon1, Icon2, Icon3,Icon4,Icon5,Icon6,Icon7,Icon8,Icon9,Icon10,Icon11,Icon12,Icon13,Icon14,Icon15,Icon16,Icon17,Icon18} from "../../../Icons";
import {
	Grid,
	Typography,
	Tabs,
	Tab,
	Box,
	Link,
	Menu,
	MenuList,
	MenuItem,
} from "@mui/material";

import NavItem from "../../atoms/NavItem/NavItem";

interface ContentProps {
	anchorEl: null | HTMLElement;
	handleClose: () => void;
}
const Content = ({ anchorEl, handleClose }: ContentProps) => {
	const open = Boolean(anchorEl);
	const ap = [
		{
			icon: <Icon1 />,
			text: "Entrepreneurship",
		},
		{
			icon: <Icon2 />,
			text: "Politics",
		},
		{
			icon: <Icon3 />,
			text: "Marketing & Sales",
		},
		{
			icon: <Icon4 />,
			text: "Science",
		},
		{
			icon: <Icon5 />,
			text: "Health & Nutrition",
		},
		{
			icon: <Icon6 />,
			text: "Personal Development",
		},
		{
			icon: <Icon7 />,
			text: "Economics",
		},
		{
			icon: <Icon8 />,
			text: "History",
		},
		{
			icon: <Icon9 />,
			text: "Communication Skills",
		},
		{
			icon: <Icon10 />,
			text: "Corporate Culture",
		},
		{
			icon: <Icon11 />,
			text: "Motivation & Inspiration",
		},
		{
			icon: <Icon12 />,
			text: "Money & Investments",
		},
		{
			icon: <Icon13 />,
			text: "Psychology",
		},
		{
			icon: <Icon14 />,
			text: "Productivity",
		},
		{
			icon: <Icon15 />,
			text: "Sex & Relationship",
		},
		{
			icon: <Icon16 />,
			text: "Nature & Environment",
		},
		{
			icon: <Icon17 />,
			text: "Career & Success",
		},
		{
			icon: <Icon18 />,
			text: "Education",
		},
		
	];
	return (
		<Menu
			id="basic-menu"
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			MenuListProps={{
				"aria-labelledby": "basic-button",
			}}
			sx={{
				position: "absolute",
				width: "100%",
				height: "100%",
				display: "flex",
				marginTop: "86px",
				backgroundColor: "#9DA3A673",
				paddingRight: "0px",
			}}
		>
			<MenuList sx={{ height: "100%" }}>
				<MenuItem disableRipple>
					<Box
						sx={{
							borderBottom: 2,
							width: "912px",
							borderColor: "grey[300]",
							margin: "auto",
						}}
					>
						<Tabs
							textColor="inherit"
							sx={{
								width: "723px",
								alignItems: "center",
								display: "flex",
								justifyContent: "center",
							}}
							disableRipple
						>
							<div
								style={{
									display: "flex",
									height: "20px",
									width: "723px",
									justifyContent: "space-between",
								}}
							>
								<Tab
									sx={{
										display: "flex",
										justifyContent: "flex-start",
										width: "fitContent",
									}}
									disableRipple
									label={
										<Typography variant="body1" sx={{ color: "#086bf7" }}>
											Explore by category
										</Typography>
									}
								/>
								<Tab
									sx={{
										display: "flex",
										justifyContent: "flex-start",
										width: "fitContent",
									}}
									disableRipple
									label={
										<Typography variant="body1">
											See recently added titles
										</Typography>
									}
								/>
								<Tab
									sx={{
										display: "flex",
										justifyContent: "flex-start",
										width: "fitContent",
									}}
									disableRipple
									label={
										<Typography variant="body1">See popular titles</Typography>
									}
								/>
							</div>
						</Tabs>
					</Box>
				</MenuItem>
				<MenuItem disableRipple>
					<Grid
						key="dropDown"
						container
						sx={{ width: "912px", margin: "auto", height: "264px" }}
					>
						{ap.map((item, index) => {
							return (
								<Grid key={`item_${index}`} item xs={4}>
									<Link href="/entrepreneurship">
										<NavItem
											children={item.text}
											left="12px"
											startIcon={item.icon}
											hoverColor='#0365F2'
										/>
									</Link>
								</Grid>
							);
						})}
					</Grid>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

interface Props {
	handleClose: () => void;
	anchorEl: null | HTMLElement;
}
const DropDown = ({ anchorEl, handleClose }: Props) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Content anchorEl={anchorEl} handleClose={handleClose} />
		</div>
	);
};

export default DropDown;
