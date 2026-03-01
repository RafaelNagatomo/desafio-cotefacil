import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';

import { Navigator, useNavigation } from '@common/navigation';
import { BaseController } from '@core/index';

export function useController<T extends BaseController>(
    ControllerClass: new (
        navigate: Navigator,
        dispatch: Dispatch<UnknownAction>
    ) => T
): T {
    const navigate = useNavigation();
    const dispatch = useDispatch();

    const controller = useMemo(() => {
        return new ControllerClass(navigate, dispatch)
    }, [ControllerClass]);

    useEffect(() => {
        controller.init();

        return () => {
            controller.dispose();
        };
    }, [controller]);

    return controller;
}
