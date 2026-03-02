import { Outlet } from "react-router-dom";
import { MasterBody, MasterContainer, MasterHeader } from "@components/index";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppLayout = () => {
    return (
        <MasterContainer
            sx={(theme) => ({ backgroundColor: theme?.palette?.surface?.backgroundVariant })}
        >
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
