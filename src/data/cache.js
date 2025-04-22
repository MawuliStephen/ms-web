import NodeCache from 'node-cache';

// Create a new cache instance with a default TTL of 10 minutes
const cache = new NodeCache({ stdTTL: 600 });

/**
 * Get cached data by key.
 * @param {string} key - The cache key.
 * @returns {any} The cached data or undefined if not found.
 */
export const getCache = (key) => {
    const data = cache.get(key);
    if (data) {
        console.log(`Cache hit for key: ${key}`);
    } else {
        console.log(`Cache miss for key: ${key}`);
    }
    return data;
};

/**
 * Set data in the cache with an optional custom TTL.
 * @param {string} key - The cache key.
 * @param {any} data - The data to cache.
 * @param {number} [ttl] - Optional custom TTL in seconds.
 */
export const setCache = (key, data, ttl) => {
    const success = cache.set(key, data, ttl ?? cache.options.stdTTL); // Use ?? instead of ||
    if (success) {
        console.log(`Data cached successfully for key: ${key}`);
    } else {
        console.error(`Failed to cache data for key: ${key}`);
    }
};

/**
 * Delete cached data by key.
 * @param {string} key - The cache key.
 */
export const deleteCache = (key) => {
    const deleted = cache.del(key);
    if (deleted > 0) {
        console.log(`Cache deleted for key: ${key}`);
    } else {
        console.log(`No cache found for key: ${key}`);
    }
};

/**
 * Check if the cache for a given key is stale or needs refreshing.
 * @param {string} key - The cache key.
 * @param {number} maxAge - The maximum age of the cache in seconds.
 * @returns {boolean} True if the cache is stale, false otherwise.
 */
export const isCacheStale = (key, maxAge) => {
    const ttl = cache.getTtl(key); // Get the remaining TTL in milliseconds
    if (ttl === undefined) {
        return true; // Key does not exist in the cache
    }
    const remainingTime = ttl - Date.now(); // Calculate remaining time in milliseconds
    return remainingTime < maxAge * 1000; // Compare with maxAge in milliseconds
};