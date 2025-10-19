import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<p>App</p>
	</StrictMode>,
);
