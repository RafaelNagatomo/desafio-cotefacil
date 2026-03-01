import { StorageService } from "@core/index";

export class StopwatchService {
    private readonly STORAGE_KEY = 'stopwatch_state';
    private storageService = new StorageService();

    public saveProgress(seconds: number): void {
        this.storageService.set(this.STORAGE_KEY, {
            seconds,
            lastUpdated: Date.now()
        });
    }

    public getSavedProgress(): number {
        const data = this.storageService.get<{ seconds: number }>(this.STORAGE_KEY);
        return data ? data.seconds : 0;
    }

    public clearProgress(): void {
        this.storageService.remove(this.STORAGE_KEY);
    }
}