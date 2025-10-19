import "./tailwind.css";
import { QueryProvider } from "./components/providers/query-provider";
import { IndexPage } from "./pages";

export const App = () => {
	return (
		<QueryProvider>
			<IndexPage />
		</QueryProvider>
	);
};
