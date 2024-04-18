import { c as create_ssr_component, e as escape, n as null_to_empty, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
import "firebase/auth";
import "../../chunks/firebase.js";
const Authenticate_svelte_svelte_type_style_lang = "";
const css = {
  code: ".authContainer.svelte-1ylj2d.svelte-1ylj2d.svelte-1ylj2d{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;padding:24px}form.svelte-1ylj2d.svelte-1ylj2d.svelte-1ylj2d{display:flex;flex-direction:column;gap:14px}form.svelte-1ylj2d.svelte-1ylj2d.svelte-1ylj2d,.options.svelte-1ylj2d.svelte-1ylj2d.svelte-1ylj2d{width:400px;max-width:100%;margin:0 auto}form.svelte-1ylj2d input.svelte-1ylj2d.svelte-1ylj2d{width:100%}h1.svelte-1ylj2d.svelte-1ylj2d.svelte-1ylj2d{text-align:center;font-size:3rem}form.svelte-1ylj2d label.svelte-1ylj2d.svelte-1ylj2d{position:relative;border:1px solid navy;border-radius:5px}form.svelte-1ylj2d input.svelte-1ylj2d.svelte-1ylj2d{border:none;background:transparent;color:white;padding:14px}form.svelte-1ylj2d input.svelte-1ylj2d.svelte-1ylj2d:focus{border:none;outline:none}form.svelte-1ylj2d label.svelte-1ylj2d.svelte-1ylj2d:focus-within{border-color:blue}form.svelte-1ylj2d button.svelte-1ylj2d.svelte-1ylj2d{background:navy;color:white;border:none;padding:14px 0;border-radius:5px;cursor:pointer;font-size:1rem;display:grid;place-items:center}form.svelte-1ylj2d button.svelte-1ylj2d.svelte-1ylj2d:hover{background:blue}.above.svelte-1ylj2d.svelte-1ylj2d.svelte-1ylj2d,.center.svelte-1ylj2d.svelte-1ylj2d.svelte-1ylj2d{position:absolute;transform:translateY(-50%);pointer-events:none;color:white;border-radius:4px;padding:0 6px;font-size:0.8rem}.above.svelte-1ylj2d.svelte-1ylj2d.svelte-1ylj2d{top:0;left:24px;background:navy;border:1px solid blue;font-size:0.7rem}.center.svelte-1ylj2d.svelte-1ylj2d.svelte-1ylj2d{top:50%;left:6px;border:1px solid transparent;opacity:0}.error.svelte-1ylj2d.svelte-1ylj2d.svelte-1ylj2d{color:coral;font-size:0.9rem;text-align:center}.options.svelte-1ylj2d.svelte-1ylj2d.svelte-1ylj2d{padding:14px 0;overflow:hidden;font-size:0.9rem;display:flex;flex-direction:column;gap:4px}.options.svelte-1ylj2d>p.svelte-1ylj2d.svelte-1ylj2d{position:relative;text-align:center;width:fit-content;margin:0 auto;padding:0 8px}.options.svelte-1ylj2d>p.svelte-1ylj2d.svelte-1ylj2d::after,.options.svelte-1ylj2d>p.svelte-1ylj2d.svelte-1ylj2d::before{position:absolute;content:'';top:50%;transform:translateY(-50%);width:100vw;height:1.5px;background:white}.options.svelte-1ylj2d>p.svelte-1ylj2d.svelte-1ylj2d::after{right:100%}.options.svelte-1ylj2d>p.svelte-1ylj2d.svelte-1ylj2d::before{left:100%}.options.svelte-1ylj2d div.svelte-1ylj2d.svelte-1ylj2d{display:flex;align-items:center;gap:8px;justify-content:center}.options.svelte-1ylj2d div.svelte-1ylj2d p.svelte-1ylj2d:last-of-type{color:cyan;cursor:pointer}.loadingSpinner.svelte-1ylj2d.svelte-1ylj2d.svelte-1ylj2d{animation:svelte-1ylj2d-spin 1s linear infinite}@keyframes svelte-1ylj2d-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const Authenticate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  $$result.css.add(css);
  return `<div class="authContainer svelte-1ylj2d"><form class="svelte-1ylj2d"><h1 class="svelte-1ylj2d">${escape("Login")}</h1>
    ${``}
    <label class="svelte-1ylj2d"><p class="${escape(null_to_empty(" center"), true) + " svelte-1ylj2d"}">Email</p>
      <input type="email" placeholder="Email" class="svelte-1ylj2d"${add_attribute("value", email, 0)}></label>
    <label class="svelte-1ylj2d"><p class="${escape(null_to_empty(" center"), true) + " svelte-1ylj2d"}">Password</p>
      <input type="password" placeholder="Password" class="svelte-1ylj2d"${add_attribute("value", password, 0)}></label>
    ${``}

    <button type="button" class="submitBtn svelte-1ylj2d">${`${escape("Login")}`}</button></form>
  <div class="options svelte-1ylj2d"><p class="svelte-1ylj2d">Or</p>
    ${`<div class="svelte-1ylj2d"><p class="svelte-1ylj2d">Don&#39;t have an account?</p>
        <p class="svelte-1ylj2d">Register</p></div>`}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Authenticate, "Authenticate").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
