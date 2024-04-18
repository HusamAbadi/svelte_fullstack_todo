

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b0a6cfbe.js","_app/immutable/chunks/index.fca42830.js","_app/immutable/chunks/store.5bf1a629.js","_app/immutable/chunks/index.f9e74c88.js"];
export const stylesheets = ["_app/immutable/assets/2.5fe08eea.css"];
export const fonts = [];
