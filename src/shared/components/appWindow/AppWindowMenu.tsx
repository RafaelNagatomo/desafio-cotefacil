import { Box, GridProps, Stack, styled } from '@mui/material';
import { ActionButton, ActionButtonType } from '@components/button';
import { useController } from '@core/index';
import { CounterController } from '@counter/index';

const WindowMenu = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme?.customSpacing?.m,
    borderRadius: `${theme?.radius?.l} ${theme?.radius?.l} 0 0`,
}));

export enum MenuUrl {
    COUNTER = 'counter',
    STOPWATCH = 'stopwatch',
    CLOCK = 'clock',
}

export const AppWindowMenu = (props: GridProps) => {
    const { children, sx, ...others } = props;
    const controller = useController(CounterController);

    return (
        <WindowMenu {...others}>
            <Stack flexDirection="row" gap={(theme) => theme?.customSpacing?.m}>
                <ActionButton
                    actionType={ActionButtonType.TEXT}
                    label="Counter"
                    visible={true}
                    disabled={controller?.menuDisable(MenuUrl.COUNTER)}
                    onClick={() => controller?.toCounter()}
                />
                <ActionButton
                    actionType={ActionButtonType.TEXT}
                    label="Stopwatch"
                    visible={true}
                    disabled={controller?.menuDisable(MenuUrl.STOPWATCH)}
                    onClick={() => controller?.toStopwatch()}
                />
            </Stack>

            <ActionButton
                actionType={ActionButtonType.TEXT}
                label="Clock"
                visible={true}
                disabled={controller?.menuDisable(MenuUrl.CLOCK)}
                onClick={() => controller?.toClock()}
            />
        </WindowMenu>
    );
}
