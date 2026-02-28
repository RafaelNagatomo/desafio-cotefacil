import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { MainRoutes } from "@routes/index";
import { Brand, ThemeProvider } from "@theme/index";
import { store } from "@core/store";

function App() {
    return (
        <ThemeProvider brand={Brand.COUNTER}>
            <ReduxProvider store={store}>
                <BrowserRouter>
                    <MainRoutes />
                </BrowserRouter>
            </ReduxProvider>
        </ThemeProvider>
    );
}

export default App;
