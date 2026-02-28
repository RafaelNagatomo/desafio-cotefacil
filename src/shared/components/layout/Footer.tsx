import { Box, Divider, Typography, useTheme } from "@mui/material";

export const Footer = () => {
    const theme = useTheme();

    return (
        <>
            <Divider />

            <Box display="flex" justifyContent="center" sx={{ margin: theme?.customSpacing?.s }}>
                <Typography variant="caption">
                    {"Copyright ©2026 StopwatchCounter | Todos os direitos reservados. Desenvolvido com 💙 em Mirassol-SP."}
                </Typography>
            </Box>
        </>
    );
};
