import { CiSquarePlus as NewIcon } from "react-icons/ci";
import { TbEdit as EditIcon } from 'react-icons/tb';
import { TbDatabaseEdit as SaveIcon } from "react-icons/tb";
import { TbDatabaseX as CancelIcon } from "react-icons/tb";

import {
    ActionButtonProps,
    ActionButtonType,
    ContainedButton,
    OutlinedButton,
    TextButton
} from "./BaseButton";

export { NewIcon, EditIcon, SaveIcon, CancelIcon };

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
        case ActionButtonType.TEXT:
        default:
            return (visible) && (
                <TextButton {...others} />
            );
    }
};
