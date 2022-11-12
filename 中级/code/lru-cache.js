class LRUCache {
    constructor(limit) {
        this.limit = limit
        this.cache = new Map
    }

    get(key) {
        if (!this.cache.has(key)) return undefined;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) this.cache.delete(key)
        else if (this.cache.size >= this.limit) {
            const lastKey = this.cache.keys().next().value;
            this.cache.delete(lastKey)
        }
        this.cache.set(key, value)
    }
}

// [1]
// [1, 2]
// res1 [2,1] => 1;
// [1,3]
// res2 [1,3] => undefined;
// [3,4]
// res3 [3,4] => undefined;
// res4 [3,4] => 3
// res5 [3,4] => 4

const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
const res1 = lruCache.get(1);
lruCache.put(3, 3);
const res2 = lruCache.get(2);
lruCache.put(4, 4);
const res3 = lruCache.get(1);
const res4 = lruCache.get(3);
const res5 = lruCache.get(4);

// 1 undefined undefined 3 4
console.log(res1, res2, res3, res4, res5);