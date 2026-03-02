import { BaseController, setBrand, setThemeMode } from "@core/index";
import { Brand } from "@theme/index";
import { PaletteMode } from "@theme/core/interfaces";

export class ApplicationController extends BaseController {
    public getThemeOptions() {
        return [
            PaletteMode.LIGHT,
            PaletteMode.DARK,
        ];
    }

    public getBrandOptions() {
        return [
            Brand.COUNTER,
            Brand.STOPWATCH,
        ];
    }

    public init(): void {
        console.log("ApplicationController: Pronto.");
    }

    public changeThemeMode(mode: PaletteMode): void {
        this.updateGlobalState(setThemeMode(mode));
    }

    public changeBrand(brand: Brand): void {
        this.updateGlobalState(setBrand(brand));
    }

    public dispose(): void {
        console.log("ApplicationController: Limpando recursos...");
    }
}
