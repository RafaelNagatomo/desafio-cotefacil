import { setTime } from "@clock/store/clockSlice";
import { BaseController } from "@core/index";

export class ClockController extends BaseController {
    private timerId: number | null = null;
    private readonly ONE_SECOND = 1000;

    protected registerEventBind(): void {
        super.registerEventBind();
        this.tick = this.tick.bind(this);
    }

    public init(): void {
        this.tick();
        console.log("ClockController: Pronto.");
    }

    private tick(): void {
        const now = new Date();
        const formatted = now.toLocaleTimeString('pt-BR');

        this._dispatch(setTime(formatted));
        this.timerId = window.setTimeout(this.tick, this.ONE_SECOND);
    }

    public dispose(): void {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
        console.log("ClockController: Limpando recursos...");
    }
}
