export interface IStorePersist {
    set(key: string, value: any): void;
    get<T>(key: string): T | null;
    remove(key: string): void;
}
