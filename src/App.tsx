import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { MainRoutes } from "@routes/index";
import { ThemeProvider } from "@theme/index";
import { store, useAppSelector } from "@core/index";


function ApplicationRegister() {
    const { brand, currentMode } = useAppSelector(state => state.appConfig);
    
    return (
        <ThemeProvider brand={brand} mode={currentMode}>
            <BrowserRouter>
                <MainRoutes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

function App() {
    return (
        <ReduxProvider store={store}>
            <ApplicationRegister />
        </ReduxProvider>
    )
}

export default App;
