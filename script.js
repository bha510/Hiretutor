// Get the sidebar and toggle button
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

// Add event listener to toggle sidebar visibility
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});
