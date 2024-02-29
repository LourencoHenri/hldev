"use client";

import { useState } from "react";

export default function Test() {
	const [count, setCount] = useState(0);

	return (
		<button onClick={() => console.log("useClient")}>Client Button</button>
	);
}
