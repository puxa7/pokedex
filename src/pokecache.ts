type CacheEntry<T> = {
    createdAt : number;
    val: T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();

    add<T>(key: string, val: CacheEntry<T>){
        this.#cache.set(key, val);
    }

}