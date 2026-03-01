import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { BaseController } from '@core/index';
import { Navigator } from '@common/navigation';
import { setSeconds, setIsRunning, resetStopwatch, StopwatchService } from '@stopwatch/index';

export class StopwatchController extends BaseController {
    protected service: StopwatchService;
    private timerId: number | null = null;
    private startTime: number = 0;
    private accumulatedTime: number = 0;

    private readonly ONE_SECOND = 1000;

    constructor(
        navigate: Navigator,
        dispatch: Dispatch<UnknownAction>,
    ) {
        super(navigate, dispatch);
        this.service = new StopwatchService();
    }

    public init(): void {
        console.log("StopwatchController: Pronto.");
    }

    protected registerEventBind(): void {
        super.registerEventBind();
        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
        this.reset = this.reset.bind(this);
        this.nextTick = this.nextTick.bind(this);
        this.clearTimer = this.clearTimer.bind(this);
        this.tick = this.tick.bind(this);
    }

    public start(currentSeconds: number): void {
        if (this.timerId) return;

        this.accumulatedTime = currentSeconds;
        this.startTime = Date.now();
        
        this._dispatch(setIsRunning(true));
        this.nextTick();
    }

    public nextTick(): void {
        this.clearTimer();
        
        this.timerId = setTimeout(() => {
            this.tick();
        }, this.ONE_SECOND);
    }
    
    public clearTimer(): void {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
    }
    
    private tick(): void {
        if (!this.startTime) return;

        const elapsedSeconds = Math.floor((Date.now() - this.startTime) / 1000);
        const totalSeconds = this.accumulatedTime + elapsedSeconds;

        this._dispatch(setSeconds(totalSeconds));
        this.nextTick();
    }

    public pause(): void {
        if (!this.timerId) return;

        this.accumulatedTime = this.calculateCurrentTotal();
        this.clearTimer();

        this._dispatch(setIsRunning(false));
    }

    private calculateCurrentTotal(): number {
        if (!this.startTime) return this.accumulatedTime;
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        return this.accumulatedTime + elapsed;
    }

    public reset(): void {
        this.clearTimer();
        this.accumulatedTime = 0;
        this.startTime = 0;

        this._dispatch(resetStopwatch());
    }

    public dispose(): void {
        console.log("stopwatchController: Limpando recursos...")
        this.clearTimer();
    }

    public formatTime(totalSeconds: number): string {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const fmt = (n: number) => String(n).padStart(2, '0');
        return `${fmt(hours)}:${fmt(minutes)}:${fmt(seconds)}`;
    }
}
