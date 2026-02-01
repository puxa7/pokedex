type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {

    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) {
        this.#interval = interval;
        this.#startReapLoop();
    }

    add<T>(key: string, val: T) {
        this.#cache.set(key, { createdAt: Date.now(), val: val });
    }

    get<T>(key: string): T | undefined {
        return this.#cache.get(key)?.val;
    }

    #reap() {
        const now = Date.now();
        for (const [key, value] of this.#cache) {
            if (now - value.createdAt >= this.#interval) {
                this.#cache.delete(key);
            }
        }
    }

    /*#reap() {
        const now = Date.now();
        console.log(`--- REAP URUCHOMIONY: ${now} ---`);
        for (const [key, value] of this.#cache) {
            const age = now - value.createdAt;
            console.log(`Klucz: ${key}, Wiek: ${age}, Interwał: ${this.#interval}`);
            if (age >= this.#interval) {
                console.log(`USUWANIE: ${key}`);
                this.#cache.delete(key);
            }
        }
    }*/

    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => { this.#reap() }, this.#interval);
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }

}