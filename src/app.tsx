import "./tailwind.css";
import { QueryProvider } from "./components/query-provider";

export const App = () => {
	return (
		<QueryProvider>
			<p>App</p>
		</QueryProvider>
	);
};
