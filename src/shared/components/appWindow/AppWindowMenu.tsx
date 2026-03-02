import { Box, GridProps, Stack, styled } from '@mui/material';
import { ActionButton } from '@components/index';
import { ActionButtonType, MenuUrl } from '@enum/index';
import { useController } from '@core/index';
import { CounterController } from '@counter/index';

const WindowMenu = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme?.customSpacing?.m,
    borderRadius: `${theme?.radius?.l} ${theme?.radius?.l} 0 0`,
}));

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
