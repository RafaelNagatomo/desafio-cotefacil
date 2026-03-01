import { Box, Divider, Paper, PaperProps, styled, useTheme } from "@mui/material"
import { AppWindowHeader } from "./AppWindowHeader";
import { AppWindowFooter } from "./AppWindowFooter";
import { AppWindowMenu } from "./AppWindowMenu";

const WindowPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: "1200px",
    height: "680px",
    backgroundColor: theme?.palette?.surface?.onMuted,
    borderRadius: theme?.radius?.l,
}));

const ElasticContainer = styled(Box)(({ theme }) => ({
    flex: '1',
    overflow: 'hidden',
    backgroundColor: theme?.palette?.surface?.onInverse,
}));

export const AppWindow = (props: PaperProps) => {
    const { children, ...others } = props;
    const theme = useTheme();

    return (
        <WindowPaper elevation={3} {...others}>
            <AppWindowHeader />
            <Divider
                sx={{
                    borderBottomWidth: 2,
                    borderColor: theme?.palette?.fixed?.dark,
                }}
            />

            <AppWindowMenu />

            <ElasticContainer>
                {children}
            </ElasticContainer>

            <AppWindowFooter />
        </WindowPaper>
    )
}
