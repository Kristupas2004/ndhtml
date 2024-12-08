// Atvaizduoti dabartinį laiką
function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('lt-LT');
    document.getElementById('current-time').textContent = time;
  }
  
  setInterval(updateTime, 1000);
  
  // Atvaizduoti dabartinę datą
  function updateDate() {
    const now = new Date();
    const date = now.toLocaleDateString('lt-LT', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('current-date').textContent = date;
  }
  
  // Chronometro funkcijos
  let stopwatchInterval;
  let stopwatchTime = 0;
  
  function startStopwatch() {
    if (stopwatchInterval) return;
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      displayStopwatchTime();
    }, 1000);
  }
  
  function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }
  
  function resetStopwatch() {
    stopwatchTime = 0;
    displayStopwatchTime();
  }
  
  function displayStopwatchTime() {
    const hours = Math.floor(stopwatchTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((stopwatchTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (stopwatchTime % 60).toString().padStart(2, '0');
    document.getElementById('stopwatch-display').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Tabų perjungimas
  function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      tab.classList.remove('active');
      tab.classList.add('hidden');
    });
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
    selectedTab.classList.remove('hidden');
  }
  
  // Pagrindiniai inicializacijos veiksmai
  document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    updateDate();
    showTab('time'); // Numatytasis tabas
  });
  