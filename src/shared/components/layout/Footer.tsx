import { Box, Divider, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <>
            <Divider />

            <Box
                display="flex"
                justifyContent="center"
                sx={(theme) => ({ margin: theme?.customSpacing?.s })}
            >
                <Typography variant="caption">
                    {"Copyright ©2026 StopwatchCounter | Todos os direitos reservados. Desenvolvido com 💙 em Mirassol-SP."}
                </Typography>
            </Box>
        </>
    );
};
