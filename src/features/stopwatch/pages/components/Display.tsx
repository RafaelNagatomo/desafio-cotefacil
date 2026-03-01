import { Typography } from "@mui/material";
import { StopwatchController } from "@stopwatch/index";

interface DisplayProps {
    controller: StopwatchController;
    seconds: number;
}

export const Display = (props: DisplayProps) => {
    const { controller, seconds } = props;

    return (
        <Typography
            variant="h1"
            className="tracking-widest drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            sx={{ color: (theme) => theme?.palette?.information?.default }}
        >
            {controller.formatTime(seconds)}
        </Typography>
    );
};
