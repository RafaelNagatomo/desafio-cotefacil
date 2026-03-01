import { Box, GridProps, styled, Typography, useTheme } from '@mui/material';
import { useController } from '@core/index';
import { CounterController } from '@counter/index';

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
    const theme = useTheme()
    const controller = useController(CounterController);

    return (
        <WindowHeader {...others}>
            <Typography variant="body1" color={theme?.palette?.surface?.inverse}>
                StopwatchCounter - {controller?.getPath().toUpperCase()}
            </Typography>
        </WindowHeader>
    );
}
