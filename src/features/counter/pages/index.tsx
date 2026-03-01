import { Box } from "@mui/material";
import { AppWindow } from "@components/appWindow";
import { useController, useAppSelector } from "@core/index";
import { CounterController } from "@counter/index";

import { Display } from "./components/Display";
import { ButtonBox } from "./components/ButtonBox";

export const CounterPage = () => {
    const controller = useController(CounterController);
    const count = useAppSelector((state) => state.counter.value);

    return (
        <AppWindow>
            <Box className="flex flex-col items-center gap-8">
                <Display controller={controller} count={count} />
                <ButtonBox controller={controller} count={count} />
            </Box>
        </AppWindow>
    );
};
