

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7f768014.js","_app/immutable/chunks/index.fca42830.js","_app/immutable/chunks/store.5bf1a629.js","_app/immutable/chunks/index.f9e74c88.js"];
export const stylesheets = ["_app/immutable/assets/0.f62fb32c.css"];
export const fonts = [];
