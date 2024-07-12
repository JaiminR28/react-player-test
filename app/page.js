"use client";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function Home() {
	const [url, setUrl] = useState("");

	const handleChange = (e) => {
		setUrl(e.target.value);
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<input
					type="text"
					placeholder="Paste YouTube link here"
					value={url}
					onChange={handleChange}
					style={{
						width: "100%",
						padding: "10px",
						marginBottom: "20px",
					}}
				/>
				<ReactPlayer url={url} controls width="100%" />
			</div>
		</main>
	);
}
