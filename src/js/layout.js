import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";

// import { Home } from "./views/home";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


import ListContacts from "./views/listContacts";
import ContactForm from './views/contactForm'
import EditContact from "./views/editContact";

//create your first component
const Layout = () => {
	const [agendaList, setAgendaList] = useState([])
	const {actions, store} = useContext(Context)
	
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	
	useEffect(() => {
		actions.getAgenda()
	}, [])
	
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						{/* <Route path="/" element={<Home />} /> */}
						{/* <Route path="/demo" element={<Demo />} /> */}
						{/* <Route path="/single/:theid" element={<Single />} /> */}
						<Route path="/" element={<ListContacts/>} />
						{/* <Route path="/ContactForm" element={<ContactForm/>} /> */}
						<Route path="/ContactForm" element={<ContactForm/>} />
						<Route path="/EditContact" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
