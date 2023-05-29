"use client";
import { Box, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/next-js";
import styles from "./page.module.css";

export default function Home() {
	const backgroundGlow = {
		content: '""',
		left: "50%",
		position: "absolute",
		filter: "blur(45px)",
		transform: "translateZ(0)",
	};

	return (
		<main className={styles.main}>
			<Box className={styles.description}>
				<Text>Justin J Daniel</Text>
				<Box>❤️With Passion</Box>
			</Box>

			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				position="relative"
				p="4rem 0"
				_before={{
					bg: "linear-gradient(to bottom right, rgba(1, 65, 255, 0), rgba(1, 65, 255, 0), rgba(1, 65, 255, 0.3))",
					borderRadius: "50%",
					w: "480px",
					h: "360px",
					ml: "-400px",
					...backgroundGlow,
				}}
				_after={{
					bg: "radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0))",
					w: "240px",
					h: "180px",
					zIndex: "-1",
					...backgroundGlow,
				}}
			>
				<Text as="h1" fontSize="5xl" fontWeight="bold">
					Design, Code and Build
					<br /> for Everyone
				</Text>
			</Box>

			<Box className={styles.grid}>
				<Link
					href="#"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Text as="h2">
						Projects <span>-&gt;</span>
					</Text>
					<Text>
						Find More About My Work and How I Can Help You Achieve Your Web
						Goals.
					</Text>
				</Link>

				<Link
					href="#"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Text as="h2">
						Contact <span>-&gt;</span>
					</Text>
					<p>Learn about me!</p>
				</Link>
			</Box>
		</main>
	);
}
