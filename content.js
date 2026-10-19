(() => {
  const api = globalThis.browser || globalThis.chrome;
  const CLS = 'uetdl-cb';
  const BAR_ID = 'uetdl-bar';
  let observer = null;
  let timer = null;

  // Lấy ID file từ link: /files/123, ?preview=123, ...
  function fileIdFromHref(href) {
    if (!href) return null;
    const m = href.match(/\/files\/(\d+)/) || href.match(/[?&]preview=(\d+)/);
    return m ? m[1] : null;
  }

  function downloadUrl(id) {
    return `${location.origin}/files/${id}/download?download_frd=1`;
  }

  function selected() {
    return [...document.querySelectorAll(`.${CLS}:checked`)];
  }

  function updateBar() {
    const bar = document.getElementById(BAR_ID);
    if (!bar) return;
    bar.querySelector('.uetdl-count').textContent = `Đã chọn: ${selected().length}`;
  }

  function addCheckboxes() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(a => {
      if (a.dataset.uetdl) return;
      if (a.closest(`#${BAR_ID}`)) return;
      const id = fileIdFromHref(a.getAttribute('href'));
      if (!id) return;
      // Chỉ gắn vào link có tên file (bỏ icon, bỏ link trùng cùng file)
      if (!a.textContent.trim()) return;
      if (document.querySelector(`.${CLS}[data-id="${id}"]`)) return;
      a.dataset.uetdl = '1';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = CLS;
      cb.dataset.id = id;
      cb.dataset.url = /\/download/.test(a.href) ? a.href : downloadUrl(id);
      cb.dataset.name = a.textContent.trim();
      cb.style.cssText = 'margin-right:8px;width:16px;height:16px;vertical-align:middle;cursor:pointer;';
      cb.addEventListener('click', e => e.stopPropagation());
      cb.addEventListener('change', updateBar);
      a.parentNode.insertBefore(cb, a);
    });
    updateBar();
  }

  function buildBar() {
    if (document.getElementById(BAR_ID)) return;
    const bar = document.createElement('div');
    bar.id = BAR_ID;
    bar.style.cssText =
      'position:fixed;right:16px;bottom:16px;z-index:2147483647;background:#fff;' +
      'border:1px solid #888;border-radius:8px;padding:10px 12px;box-shadow:0 2px 10px rgba(0,0,0,.3);' +
      'font:14px system-ui,sans-serif;color:#222;display:flex;gap:8px;align-items:center;';
    bar.innerHTML =
      '<span class="uetdl-count">Đã chọn: 0</span>' +
      '<button data-a="all">Chọn tất cả</button>' +
      '<button data-a="none">Bỏ chọn</button>' +
      '<button data-a="dl" style="font-weight:600">Tải đã chọn</button>' +
      '<span style="font-size:11px;color:#888;margin-left:4px">by XD4T</span>';
    bar.addEventListener('click', async e => {
      const act = e.target.dataset && e.target.dataset.a;
      if (!act) return;
      const all = [...document.querySelectorAll(`.${CLS}`)];
      if (act === 'all') { all.forEach(c => (c.checked = true)); updateBar(); }
      if (act === 'none') { all.forEach(c => (c.checked = false)); updateBar(); }
      if (act === 'dl') await downloadSelected(e.target);
    });
    document.body.appendChild(bar);
  }

  async function downloadSelected(btn) {
    const items = selected();
    if (!items.length) return alert('Bạn chưa tick file nào.');
    btn.disabled = true;
    for (let i = 0; i < items.length; i++) {
      btn.textContent = `Đang tải ${i + 1}/${items.length}...`;
      const a = document.createElement('a');
      a.href = items[i].dataset.url;
      a.download = '';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      a.remove();
      await new Promise(r => setTimeout(r, 1200)); // giãn cách để tránh bị chặn
    }
    btn.textContent = 'Tải đã chọn';
    btn.disabled = false;
  }

  function enable() {
    buildBar();
    addCheckboxes();
    if (!observer) {
      // Trang là SPA, danh sách file load động nên theo dõi thay đổi DOM
      observer = new MutationObserver(() => {
        clearTimeout(timer);
        timer = setTimeout(addCheckboxes, 300);
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  function disable() {
    if (observer) { observer.disconnect(); observer = null; }
    document.querySelectorAll(`.${CLS}`).forEach(c => c.remove());
    document.querySelectorAll('a[data-uetdl]').forEach(a => delete a.dataset.uetdl);
    const bar = document.getElementById(BAR_ID);
    if (bar) bar.remove();
  }

  function apply(on) { on ? enable() : disable(); }

  const get = api.storage.local.get('enabled');
  if (get && get.then) get.then(r => apply(r.enabled));
  else api.storage.local.get('enabled', r => apply(r.enabled));

  api.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes.enabled) apply(changes.enabled.newValue);
  });
})();
