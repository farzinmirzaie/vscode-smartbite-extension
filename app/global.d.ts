// Expose type-safe settings object injected by VSCode into the global scope.
declare const settings: ReturnType<typeof import('../src/utils').getSettings>;
