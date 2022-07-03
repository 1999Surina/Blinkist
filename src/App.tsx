import React from "react";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'
import MyLibrary from "./components/pages/MyLibrary/MyLibrary";
import Entrepreneurship from "./components/pages/Entrepreneurship/Entrepreneurship";
import BookDetailsPage from "./components/pages/BookDetailsPage/BookDetailsPage";
import { ThemeProvider } from "@mui/material";
import customTheme from "./Themes/customThemes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./components/pages/LoginPage/LoginPage";

function App() {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div style={{
			width:"100vw",
			height:"100vh",
			display:"flex",
			alignItems:"center",
			justifyContent:"center"

		}


		}><TailSpin color="#2CE080" height={80} width={80} /></div>;
	}

	if (isAuthenticated) {
		return (
			<ThemeProvider theme={customTheme}>
				<Router>
					<Routes>
						<Route path="/" element={<MyLibrary />} />
						<Route path="/entrepreneurship" element={<Entrepreneurship />} />
						<Route path="/bookdetails/:id" element={<BookDetailsPage />} />
					</Routes>
				</Router>
			</ThemeProvider>
		);
	} else {
		return <LoginPage />;
	}
}

export default App;
