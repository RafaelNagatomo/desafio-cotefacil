import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { IController } from '@core/interfaces/IController';

export abstract class BaseController implements IController {
    public dispatch: Dispatch<UnknownAction>;

    constructor(dispatch: Dispatch<UnknownAction>) {
        this.dispatch = dispatch;
    }

    abstract init(): void;
    abstract dispose(): void;

    protected updateGlobalState(action: UnknownAction): void {
        this.dispatch(action);
    }
}
