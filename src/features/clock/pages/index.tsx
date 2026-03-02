import { Box, Typography } from '@mui/material';
import { AppWindow } from '@components/index';
import { useAppSelector, useController } from '@core/index';
import { ClockController } from '@clock/index';

export const ClockPage: React.FC = () => {
    useController(ClockController);
    const { currentTime } = useAppSelector((state) => state.clock);

    return (
        <AppWindow>
            <Box className="flex flex-col items-center gap-6">
                <Typography
                    variant="h5"
                    className="font-bold"
                    sx={{ color: (theme) => theme?.palette?.surface?.inverse }}
                >
                    Hora atual do sistema
                </Typography>

                <Typography 
                    variant="h1" 
                    className="tracking-widest drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    sx={{ color: (theme) => theme?.palette?.information?.default }}
                >
                    {currentTime}
                </Typography>
            </Box>
        </AppWindow>
    );
};
