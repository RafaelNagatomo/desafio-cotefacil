import { Box, GridProps, Stack, styled } from '@mui/material';
import { ActionButton, ActionButtonType } from '@components/button';

const WindowMenu = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme?.customSpacing?.m,
    borderRadius: `${theme?.radius?.l} ${theme?.radius?.l} 0 0`,
}));

export const AppWindowMenu = (props: GridProps) => {
    const { children, sx, ...others } = props;

    return (
        <WindowMenu {...others}>
            <Stack flexDirection="row" gap={(theme) => theme?.customSpacing?.m}>
                <ActionButton
                    actionType={ActionButtonType.TEXT}
                    label="Counter"
                    visible={true}
                    disabled={false}
                    onClick={() => alert("Olha lá")}
                />
                <ActionButton
                    actionType={ActionButtonType.TEXT}
                    label="Stopwatch"
                    visible={true}
                    disabled={false}
                    onClick={() => alert("Olha lá")}
                />
            </Stack>

            <ActionButton
                actionType={ActionButtonType.TEXT}
                label="Clock"
                visible={true}
                disabled={false}
                onClick={() => alert("Olha lá")}
            />
        </WindowMenu>
    );
}
