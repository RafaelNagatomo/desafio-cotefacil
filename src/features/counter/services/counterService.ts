import { StorageService } from "@core/index";

export class CounterService {
    private readonly STORAGE_KEY = 'counter_value';
    private storageService = new StorageService();

    public saveValue(value: number): void {
        this.storageService.set(this.STORAGE_KEY, value);
    }

    public getSavedValue(): number {
        return this.storageService.get<number>(this.STORAGE_KEY) || 0;
    }
}
