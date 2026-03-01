import { Box } from "@mui/material";
import { ActionButton, ActionButtonType, NewIcon, RefreshIcon } from "@components/button";
import { CounterController } from "@counter/index";

interface ButtonBoxProps {
    controller: CounterController;
    count: number;
}

export const ButtonBox = (props: ButtonBoxProps) => {
    const { controller, count } = props;

    return (
        <>
            <Box className="flex items-center gap-4">
                <ActionButton
                    icon={<NewIcon />}
                    actionType={ActionButtonType.CONTAINED}
                    label="Decrementar"
                    visible={true}
                    disabled={false}
                    onClick={() => controller?.decrement(count)}
                />
                <ActionButton
                    icon={<NewIcon />}
                    actionType={ActionButtonType.CONTAINED}
                    label="Incrementar"
                    visible={true}
                    disabled={false}
                    onClick={() => controller?.increment(count)}
                />

            </Box>

            <ActionButton
                icon={<RefreshIcon />}
                actionType={ActionButtonType.ROUNDED}
                label="Resetar"
                visible={true}
                disabled={false}
                onClick={() => controller?.reset()}
            />
        </>
    );
};
