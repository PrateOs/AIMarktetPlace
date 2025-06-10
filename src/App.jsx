import React from "react";

import ModelsPage from "./pages/ModelsPage";

import Header from './components/Header'

import Footer from './components/Footer'

import { ThemeProvider } from "./theme/ThemeContext";

const App = () => <>
<ThemeProvider>
<Header/>
<ModelsPage />
</ThemeProvider>
{/* <Footer /> */}
</>;

export default App;
