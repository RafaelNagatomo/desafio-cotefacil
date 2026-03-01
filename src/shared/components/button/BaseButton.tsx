import { Button, ButtonProps, IconButton, styled, SxProps, Theme, Tooltip } from '@mui/material'

export const BaseButton = styled(Button)(({ theme }) => ({
    paddingTop: theme?.customSpacing?.xs,
    paddingBottom: theme?.customSpacing?.xs,
    color: theme?.palette?.surface?.inverse,
    borderRadius: theme?.radius?.m,
    textTransform: 'none',
    fontSize: 16,

    "&:hover": {
        backgroundColor: theme?.palette?.surface?.hover,
    },

    "&:disabled": {
        backgroundColor: theme?.palette?.surface?.default,
        color: theme?.palette?.surface?.main,
        cursor: "not-allowed",
        border: "none",
        pointerEvents: "none",
    },

    "&.Mui-focusVisible::after": {
        content: '""',
        position: "absolute",
        top: "-4px",
        left: "-4px",
        right: "-4px",
        bottom: "-4px",
        border: `2px solid ${theme?.palette?.focus}`,
        borderRadius: `calc(${theme?.radius?.m} + 3px)`,
    },
}));

export enum ActionButtonType {
    TEXT = 'TEXT',
    OUTLINED = 'OUTLINED',
    CONTAINED = 'CONTAINED',
    ROUNDED = 'ROUNDED',
}

export interface ActionButtonProps extends ButtonProps {
    icon?: React.ReactNode;
    actionType?: ActionButtonType;
    label?: string;
    visible?: boolean;
    disabled: boolean;
    onClick: (e: any) => void;
    sx?: SxProps;
}

export const TextButton = (props: ActionButtonProps) => {
    const { icon, label, disabled, onClick, sx, ...others } = props;

    return (
        <BaseButton
            startIcon={icon}
            variant="text"
            onClick={onClick}
            disableFocusRipple
            disabled={disabled}
            sx={sx}
            {...others}
        >
            {label}
        </BaseButton>
    )
}

export const ContainedButton = (props: ActionButtonProps) => {
    const { icon, label, disabled, onClick, sx, ...others } = props;

    return (
        <BaseButton
            startIcon={icon}
            variant="contained"
            onClick={onClick}
            disableFocusRipple
            disabled={disabled}
            sx={(theme: Theme) => ({
                backgroundColor: theme?.palette?.surface?.default,
                sx,
            })}
            {...others}
        >
            {label}
        </BaseButton>
    )
}

export const OutlinedButton = (props: ActionButtonProps) => {
    const { icon, label, disabled, onClick, sx, ...others } = props;

    return (
        <BaseButton
            startIcon={icon}
            variant="outlined"
            onClick={onClick}
            disableFocusRipple
            disabled={disabled}
            sx={(theme: Theme) => ({
                borderColor: theme?.palette?.surface?.default,
                sx,
            })}
            {...others}
        >
            {label}
        </BaseButton>
    )
}

export const RoundedButton = (props: ActionButtonProps) => {
    const { icon, label, disabled, onClick, sx, ...others } = props;

    return (
        <Tooltip title={label}>
            <IconButton
                disableFocusRipple
                size="large"
                onClick={onClick}
                sx={(theme: Theme) => ({
                    backgroundColor: theme?.palette?.surface?.default,
                    color: theme?.palette?.surface?.inverse,

                    "&:hover": {
                        backgroundColor: theme?.palette?.surface?.hover,
                    },

                    "&:disabled": {
                        backgroundColor: theme?.palette?.surface?.default,
                        color: theme?.palette?.surface?.main,
                        cursor: "not-allowed",
                        border: "none",
                        pointerEvents: "none",
                    },

                    "&.Mui-focusVisible::after": {
                        content: '""',
                        position: "absolute",
                        top: "-4px",
                        left: "-4px",
                        right: "-4px",
                        bottom: "-4px",
                        border: `2px solid ${theme?.palette?.focus}`,
                        borderRadius: `${theme?.radius?.circle}`,
                    },
                    
                    sx,
                })}
                {...others}
            >
                {icon}
            </IconButton>
        </Tooltip>
    )
}
