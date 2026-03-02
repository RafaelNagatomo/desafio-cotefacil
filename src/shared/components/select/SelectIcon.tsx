import {
    Stack,
    Tooltip,
    OutlinedInput,
    MenuItem,
    FormControl,
    Select as MuiSelect
} from "@mui/material";
import { styled, SxProps } from "@mui/material/styles";
import { CheckIcon } from "@components/index";

export const BaseSelect = styled(MuiSelect)(({ theme }) => ({
    backgroundColor: theme?.palette?.surface?.inverse,
    borderRadius: theme?.radius?.m,
    borderColor: theme?.palette?.surface?.default,
    height: "2.5rem",

    "& fieldset": {
        borderColor: theme?.palette?.surface?.outline,
    },

    "&.Mui-focused": {
        borderWidth: '1px',
        borderColor: theme?.palette?.surface?.default,
    },

    "&.Mui-focused::after": {
        content: '""',
        position: "absolute",
        top: "-4px",
        left: "-4px",
        right: "-4px",
        bottom: "-4px",
        border: `2px solid ${theme?.palette?.focus}`,
        borderRadius: `calc(${theme?.radius?.m} + 3px)`,
    },

    "& .MuiSelect-select": {
        zIndex: 1,
    },

    "&:hover": {
        backgroundColor: theme?.palette?.surface?.muted,
        borderColor: theme?.palette?.surface?.inverse,
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme?.palette?.surface?.default,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme?.palette?.surface?.default,
    },
}));

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 300,
            minWidth: 65,
            disableAutoFocusItem: true,
            borderRadius: '8px',
        },
    },
};

interface SelectProps {
    value: string;
    items: string[];
    onChange: (value: string) => void;
    iconButton: React.ReactNode;
    tooltip: string;
    sx?: SxProps;
}

export const SelectIcon = (props: SelectProps) => {
    const { value, items, onChange, iconButton, tooltip, sx, ...others } = props;

    return (
        <Tooltip title={tooltip} placement="left">
            <FormControl sx={{ width: 65 }}>
                <BaseSelect
                    displayEmpty
                    value={value}
                    onChange={(e) => onChange(e.target.value as string)}
                    input={<OutlinedInput />}
                    renderValue={() => iconButton}
                    MenuProps={MenuProps}
                    sx={sx}
                    {...others}
                >
                    <MenuItem disabled value="">
                        <em>Theme</em>
                    </MenuItem>
                    {items.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                            disableRipple
                            sx={(theme) => ({
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                px: 2,

                                "&:hover": { backgroundColor: theme?.palette?.surface?.hover },
                                "&.Mui-selected": { backgroundColor: "transparent" },
                                "&.Mui-selected:hover": { backgroundColor: theme?.palette?.surface?.hover },
                            })}
                        >
                            <Stack flexDirection="row" gap={2} alignItems="center">
                                <span>{item}</span>
                                <CheckIcon
                                    fontSize="small"
                                    style={{
                                        opacity: value === item ? 1 : 0,
                                        transition: "opacity 0.2s",
                                    }}
                                />
                            </Stack>
                        </MenuItem>
                    ))}
                </BaseSelect>
            </FormControl>
        </Tooltip>
    );
}
