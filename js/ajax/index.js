const totalCaseElem = document.querySelector('.js-total-cases');
const totalDeathElem = document.querySelector('.js-deaths');
const totalRecoveredElm = document.querySelector('.js-recovered');
const refreshBtn = document.querySelector('.js-btn-refresh');

function updateData(totalCase, totalDeath, totalRecovered) {
  totalCaseElem.innerText = totalCase;
  totalDeathElem.innerText = totalDeath;
  totalRecoveredElm.innerText = totalRecovered;
}

function fetchData(apiUrl) {
  return new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responseText);
        resolve(data);
      }
    };
    xhttp.open('GET', apiUrl, true);
    xhttp.send();
  });
}

async function ajaxHandler() {
  let data = await fetchData('https://api.covid19api.com/summary');
  const { Global } = data;
  const { TotalConfirmed, TotalDeaths, TotalRecovered } = Global;
  updateData(TotalConfirmed, TotalDeaths, TotalRecovered);
}

ajaxHandler();
