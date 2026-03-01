import {
    ActionButtonProps,
    ActionButtonType,
    ContainedButton,
    OutlinedButton,
    RoundedButton,
    TextButton,
} from "./BaseButton";

import { CiSquarePlus as NewIcon } from "react-icons/ci";
import { TbEdit as EditIcon } from 'react-icons/tb';
import { TbDatabaseEdit as SaveIcon } from "react-icons/tb";
import { TbDatabaseX as CancelIcon } from "react-icons/tb";
import { GrRefresh as RefreshIcon } from "react-icons/gr";
import { FaPlay as PlayIcon } from "react-icons/fa";
import { FaPause as PauseIcon } from "react-icons/fa";

export {
    NewIcon,
    EditIcon,
    SaveIcon,
    CancelIcon,
    RefreshIcon,
    PlayIcon,
    PauseIcon,
};

export const ActionButton = (props: ActionButtonProps) => {
    const { actionType, visible, ...others } = props;

    switch (actionType) {
        case ActionButtonType.OUTLINED:
            return (visible) && (
                <OutlinedButton {...others} />
            );
        case ActionButtonType.CONTAINED:
            return (visible) && (
                <ContainedButton {...others} />
            );
        case ActionButtonType.ROUNDED:
            return (visible) && (
                <RoundedButton {...others} />
            );
        case ActionButtonType.TEXT:
        default:
            return (visible) && (
                <TextButton {...others} />
            );
    }
};
