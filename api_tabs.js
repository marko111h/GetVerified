document.querySelectorAll('.endpoint-card').forEach(card => {
  const tabsRow = card.querySelector('.code-tabs');
  const tabs = card.querySelectorAll('.code-tab');
  const blocks = card.querySelectorAll('.code-block');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const lang = tab.getAttribute('data-lang');

      tabs.forEach(t => t.classList.remove('active'));
      blocks.forEach(b => b.classList.remove('active'));

      tab.classList.add('active');
      card.querySelector(`.code-block[data-lang="${lang}"]`).classList.add('active');
    });
  });

  if (tabsRow) {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    copyBtn.setAttribute('aria-label', 'Copy code');
    tabsRow.appendChild(copyBtn);

    copyBtn.addEventListener('click', () => {
      const activeBlock = card.querySelector('.code-block.active');
      copyToClipboard(activeBlock.innerText, copyBtn);
    });
  }
});

document.querySelectorAll('.response-card').forEach(card => {
  const headRow = card.querySelector('.response-head');
  const codeBlock = card.querySelector('pre');

  if (headRow && codeBlock) {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn copy-btn-dark';
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    copyBtn.setAttribute('aria-label', 'Copy code');
    headRow.appendChild(copyBtn);

    copyBtn.addEventListener('click', () => {
      copyToClipboard(codeBlock.innerText, copyBtn);
    });
  }
});

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = original;
      btn.classList.remove('copied');
    }, 1500);
  });
}