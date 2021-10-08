import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

const { Item } = Menu;

const Header = () => {
	return (
		<Menu mode="horizontal">
			<Item key="home" icon={<AppstoreOutlined />}>
				<Link to="/">Home</Link>
			</Item>
		</Menu>
	);
};

export default Header;
