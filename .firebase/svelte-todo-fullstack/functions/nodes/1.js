

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1f212901.js","_app/immutable/chunks/index.fca42830.js","_app/immutable/chunks/singletons.2cc3b9e1.js","_app/immutable/chunks/index.f9e74c88.js"];
export const stylesheets = [];
export const fonts = [];
