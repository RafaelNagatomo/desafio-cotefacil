import { Typography, Box } from "@mui/material";
import { CounterController } from "@counter/index";

interface DisplayProps {
    controller: CounterController;
    count: number;
}

export const Display = (props: DisplayProps) => {
    const { controller, count } = props;

    return (
        <Box className="relative">
            <Typography
                variant="h1"
                className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                sx={{
                    color: (theme) => controller?.evenNumber(count)
                    ? theme?.palette?.information?.default
                    : theme?.palette?.surface?.inverse,
                }}
            >
                {count}
            </Typography>

            {controller?.evenNumber(count) && (
                <Box className="absolute -top-2 -right-16 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded-full shadow-lg animate-bounce">
                    NÚMERO PAR!
                </Box>
            )}
        </Box>
    );
};
