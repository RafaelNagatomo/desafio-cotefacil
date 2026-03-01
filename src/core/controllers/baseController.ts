import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { IController } from '@core/interfaces/IController';
import { Constants } from '@common/constants';
import { Navigator } from '@common/navigation';

export abstract class BaseController implements IController {
    protected _navigate: Navigator;
    protected _dispatch: Dispatch<UnknownAction>;

    constructor(
        navigate: Navigator,
        dispatch: Dispatch<UnknownAction>,
    ) {
        this._navigate = navigate;
        this._dispatch = dispatch;
    }

    abstract init(): void;
    abstract dispose(): void;

    protected updateGlobalState(action: UnknownAction): void {
        this._dispatch(action);
    }

    public getPath(): string {
        const path = this._navigate.getCurrentPath();
        return path.substring(path.lastIndexOf("/") + 1);
    }

    public menuDisable(label: string): boolean {
        const path = this.getPath();
        return path === label;
    }

    public toCounter(): void {
        this._navigate.to(Constants.app.COUNTER);
    }

    public toStopwatch(): void {
        this._navigate.to(Constants.app.STOPWATCH);
    }

    public toClock(): void {
        this._navigate.to(Constants.app.CLOCK);
    }
}
