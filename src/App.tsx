import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "@routes/index";
import { Brand, ThemeProvider } from "@theme/index";

function App() {
    return (
        <ThemeProvider brand={Brand.COUNTER}>
            <BrowserRouter>
                <MainRoutes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
