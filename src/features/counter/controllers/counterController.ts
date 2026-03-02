import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { BaseController } from '@core/index';
import { CounterService, setValue } from '@counter/index';
import { Navigator } from '@common/index';

export class CounterController extends BaseController {
    protected service: CounterService;

    constructor(
        navigate: Navigator,
        dispatch: Dispatch<UnknownAction>,
    ) {
        super(navigate, dispatch);
        this.service = new CounterService();
    }

    private updateState(newValue: number): void {
        this._dispatch(setValue(newValue));
        this.service.saveValue(newValue);
    }

    public init(): void {
        const saved = this.service.getSavedValue();
        this._dispatch(setValue(saved));
    }

    public increment(currentValue: number): void {
        const newValue = currentValue + 1;
        this.updateState(newValue);
    }

    public decrement(currentValue: number): void {
        const newValue = currentValue - 1;
        this.updateState(newValue);
    }

    public reset(): void {
        const newValue = 0;
        this.updateState(newValue);
    }

    public evenNumber(count: number): boolean {
        return count % 2 === 0;
    }

    public dispose(): void {
        console.log('counterController: Limpando recursos...');
    }
}
