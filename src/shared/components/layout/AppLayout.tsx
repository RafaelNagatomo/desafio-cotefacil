import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material";
import {
    MasterBody,
    MasterContainer,
    MasterHeader,
} from "@components/container";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppLayout = () => {
    const theme = useTheme();

    return (
        <MasterContainer sx={{ backgroundColor: theme?.palette?.surface?.default }}>
            <MasterHeader>
                <Header />
            </MasterHeader>

            <MasterBody>
                <Outlet />
            </MasterBody>

            <Footer />
        </MasterContainer>
    )
}
