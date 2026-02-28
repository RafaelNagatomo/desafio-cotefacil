import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { BaseController } from '@core/controllers/BaseController';

export function useController<T extends BaseController>(
  ControllerClass: new (dispatch: any) => T
): T {
  const dispatch = useDispatch();
  
  const controller = useMemo(() => new ControllerClass(dispatch), [dispatch]);

  useEffect(() => {
    controller.init();
    
    return () => {
      controller.dispose();
    };
  }, [controller]);

  return controller;
}
