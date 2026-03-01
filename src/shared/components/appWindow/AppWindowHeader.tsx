import { Box, GridProps, styled, Typography, useTheme } from '@mui/material';

const WindowHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: theme?.customSpacing?.s,
    paddingBottom: theme?.customSpacing?.s,
    borderRadius: `${theme?.radius?.l} ${theme?.radius?.l} 0 0`,
    boxShadow: theme?.boxShadow[6],
}));

export const AppWindowHeader = (props: GridProps) => {
    const { children, sx, ...others } = props;
    const theme = useTheme();

    return (
        <WindowHeader {...others}>
            <Typography variant="body1" color={theme?.palette?.surface?.inverse}>
                StopwatchCounter
            </Typography>
        </WindowHeader>
    );
}
