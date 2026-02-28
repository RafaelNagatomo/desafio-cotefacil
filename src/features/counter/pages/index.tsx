import { Button, useTheme } from "@mui/material";

export const CounterPage = () => {
    const theme = useTheme();

    return (
        <Button
            variant="contained"
            sx={{
                padding: theme?.customSpacing?.s,
                borderRadius: theme?.radius.l,
                backgroundColor: theme?.palette?.secondary?.default,
            }}
        >
            Contained
        </Button>
    )
}
