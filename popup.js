const api = globalThis.browser || globalThis.chrome;
const toggle = document.getElementById('toggle');
const state = document.getElementById('state');

function render(on) {
  toggle.checked = !!on;
  state.textContent = on ? 'Đang BẬT' : 'Đang TẮT';
}

api.storage.local.get('enabled').then
  ? api.storage.local.get('enabled').then(r => render(r.enabled))
  : api.storage.local.get('enabled', r => render(r.enabled));

toggle.addEventListener('change', () => {
  api.storage.local.set({ enabled: toggle.checked });
  render(toggle.checked);
});
