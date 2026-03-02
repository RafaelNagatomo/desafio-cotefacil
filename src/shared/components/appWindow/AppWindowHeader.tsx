import { Box, GridProps, styled, Typography, useTheme } from '@mui/material';
import { useController } from '@core/index';
import { CounterController } from '@counter/index';

const WindowHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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

    const visualDots = [
        { key: 'red', color: theme?.palette?.danger?.default },
        { key: 'yellow', color: theme?.palette?.warning?.default },
        { key: 'gray', color: theme?.palette?.surface?.main },
    ];

    return (
        <WindowHeader {...others}>
            <Box
                sx={{
                    display: 'flex',
                    gap: '8px',
                    padding: '12px',
                    width: 'fit-content',
                }}
            >
                {visualDots.map((dot) => (
                    <Box
                        key={dot.key}
                        sx={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: dot.color,
                            transition: 'transform 0.2s',
                            '&:hover': { transform: 'scale(1.3)' },
                            boxShadow: 'inset 0 0 2px rgba(0,0,0,0.1)',
                        }}
                    />
                ))}
            </Box>

            <Typography variant="body1" color={theme?.palette?.surface?.textPrimary}>
                StopwatchCounter - {controller?.getPath().toUpperCase()}
            </Typography>
            <Box />
        </WindowHeader>
    );
}
