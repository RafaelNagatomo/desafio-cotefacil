import {
    ActionButtonProps,
    ContainedButton,
    OutlinedButton,
    RoundedButton,
    TextButton,
} from "./BaseButton";
import { ActionButtonType } from "@enum/index";

import { CiSquarePlus as NewIcon } from "react-icons/ci";
import { TbEdit as EditIcon } from 'react-icons/tb';
import { TbDatabaseEdit as SaveIcon } from "react-icons/tb";
import { TbDatabaseX as CancelIcon } from "react-icons/tb";
import { GrRefresh as RefreshIcon } from "react-icons/gr";
import { FaPlay as PlayIcon } from "react-icons/fa";
import { FaPause as PauseIcon } from "react-icons/fa";
import { FaCheck as CheckIcon } from "react-icons/fa";
import { RiBrushAiLine as BrushLineIcon } from "react-icons/ri";
import { FaPlus as PlusIcom } from "react-icons/fa6";
import { HiOutlineBookOpen as BookOpenIcon } from "react-icons/hi";
import { FiMaximize2 as MaximizeIcon } from "react-icons/fi";

export {
    NewIcon,
    EditIcon,
    SaveIcon,
    CancelIcon,
    RefreshIcon,
    PlayIcon,
    PauseIcon,
    CheckIcon,
    BrushLineIcon,
    PlusIcom,
    MaximizeIcon,
    BookOpenIcon,
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
