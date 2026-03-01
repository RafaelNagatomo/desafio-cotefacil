import { Box, Typography } from "@mui/material";
import {
    ActionButton,
    ActionButtonType,
    PauseIcon,
    PlayIcon, 
    RefreshIcon,
} from "@components/button";
import { StopwatchController } from "@stopwatch/index";

interface ButtonBoxProps {
    controller: StopwatchController;
    seconds: number;
    isRunning: boolean;
}

export const ButtonBox = (props: ButtonBoxProps) => {
    const { controller, seconds, isRunning } = props;

    return (
        <>
            <Box className="flex gap-4">
                {!isRunning ? (
                    <ActionButton
                        icon={<PlayIcon />}
                        actionType={ActionButtonType.CONTAINED}
                        label="Iniciar"
                        visible={true}
                        disabled={false}
                        onClick={() => controller.start(seconds)}
                    />
                ) : (
                    <ActionButton
                        icon={<PauseIcon />}
                        actionType={ActionButtonType.CONTAINED}
                        label="Pausar"
                        visible={true}
                        disabled={false}
                        onClick={() => controller.pause()}
                    />
                )}

                <ActionButton
                    icon={<RefreshIcon />}
                    actionType={ActionButtonType.TEXT}
                    label="Resetar"
                    visible={true}
                    disabled={false}
                    onClick={() => controller.reset()}
                />
            </Box>

            <Box className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isRunning ? "bg-green-500 animate-pulse" : "bg-red-500"} animate-bounce`} />

                <Typography
                    variant="caption"
                    className="uppercase tracking-widest opacity-40 font-bold"
                    sx={{ color: (theme) => theme?.palette?.surface?.inverse }}
                >
                    {isRunning ? "Sistema em andamento" : "Sistema pausado"}
                </Typography>
            </Box>
        </>
    );
};
