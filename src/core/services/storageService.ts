import { IStorePersist } from "@core/interfaces/IStorePersist";

export class StorageService implements IStorePersist {
    public set(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public get<T>(key: string): T | null {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    public remove(key: string): void {
        localStorage.removeItem(key);
    }
}
