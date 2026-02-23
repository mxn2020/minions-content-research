/**
 * Minions Content-research SDK
 *
 * Research sources, topic clusters, keyword sets, and content briefs
 *
 * @module @minions-content-research/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Content-research.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
