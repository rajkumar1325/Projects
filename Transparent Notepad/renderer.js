let pages = [];
let currentPage = 0;

// Load previously saved pages
window.addEventListener('DOMContentLoaded', async () => {
  const saved = await window.api.loadFile();
  if (saved) {
    pages = JSON.parse(saved);
  } else {
    pages = ['']; // Default single page
  }
  renderPages();
});

// Render tabs and corresponding textareas
function renderPages() {
  const tabs = document.getElementById('tabs');
  const pageContainer = document.getElementById('pages');
  tabs.innerHTML = '';
  pageContainer.innerHTML = '';

  pages.forEach((_, index) => {
    const btn = document.createElement('button');
    btn.innerText = 'Page ' + (index + 1);
    btn.className = 'tab-btn';
    btn.onclick = () => switchPage(index);
    tabs.appendChild(btn);
  });

  pages.forEach((content, index) => {
    const textarea = document.createElement('textarea');
    textarea.value = content;
    textarea.style.display = index === currentPage ? 'block' : 'none';
    textarea.oninput = () => pages[index] = textarea.value;
    pageContainer.appendChild(textarea);
  });
}

// Switch pages
function switchPage(index) {
  const textareas = document.querySelectorAll('#pages textarea');
  textareas[currentPage].style.display = 'none';
  textareas[index].style.display = 'block';
  currentPage = index;
}

// Add new page dynamically
document.getElementById('addPageBtn').onclick = () => {
  pages.push('');
  renderPages();
};

// Save all pages manually
document.getElementById('saveBtn').onclick = async () => {
  await window.api.saveFile(JSON.stringify(pages));
  alert('Notes Saved!');
};

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

// Auto save on close (still here)
window.addEventListener('beforeunload', async () => {
  await window.api.saveFile(JSON.stringify(pages));
});
