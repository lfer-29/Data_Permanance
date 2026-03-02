async function loadHits(pageID) {
  const res = await fetch(`/hits/${pageID}`);
  const data = await res.json();
  document.getElementById("hits").textContent = data.hits;
}