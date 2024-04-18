

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.fa55af96.js","_app/immutable/chunks/index.fca42830.js","_app/immutable/chunks/store.5bf1a629.js","_app/immutable/chunks/index.f9e74c88.js"];
export const stylesheets = ["_app/immutable/assets/3.c7b88f48.css"];
export const fonts = [];
