import { Box } from "@mui/material";
import { AppWindow } from "@components/appWindow";
import { useAppSelector, useController } from "@core/index";
import { StopwatchController } from "@stopwatch/index";
import { Display } from "./components/Display";
import { ButtonBox } from "./components/ButtonBox";

export const StopwatchPage: React.FC = () => {
    const controller = useController(StopwatchController);
    const { seconds, isRunning } = useAppSelector((state) => state.stopwatch);

    return (
        <AppWindow>
            <Box className="flex flex-col items-center gap-6">
                <Display controller={controller} seconds={seconds} />
                <ButtonBox controller={controller} seconds={seconds} isRunning={isRunning} />
            </Box>
        </AppWindow>
    );
};
