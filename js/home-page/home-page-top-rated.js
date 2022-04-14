const secondTab = document.getElementById('tabTwo');
const loadMore = document.getElementById('loadMore');
const loadLess = document.getElementById('loadLess');
const topRated = document.getElementById('topRated');

loadMore.addEventListener("click", function() {
    loadMoreTabs();
});
loadLess.addEventListener("click", function() {
    loadLessTabs();
});

function loadMoreTabs() {
    loadMore.classList.add('hidden');
    secondTab.classList.add('active');
    topRated.classList.add('active');
}

function loadLessTabs() {
    loadMore.classList.remove('hidden');
    secondTab.classList.remove('active');
    topRated.classList.remove('active');
}