async function fetchData() {
const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Ccardano&vs_currencies=eur');
const data = await response.json();
const { bitcoin, ethereum, tether, binancecoin, cardano } = data;

document.getElementById("myPill").onclick = displayPrice;
function displayPrice() {
document.getElementById('bit').innerHTML = bitcoin.eur;
}

document.getElementById("myPill2").onclick = displayPrice2;
function displayPrice2() {
document.getElementById('eth').textContent = ethereum.eur;
    }

document.getElementById("myPill3").onclick = displayPrice3;
function displayPrice3() {
document.getElementById('tet').textContent = tether.eur;
        }

document.getElementById("myPill4").onclick = displayPrice4;
function displayPrice4() {
document.getElementById('bin').textContent = binancecoin.eur;
            }   
            
document.getElementById("myPill5").onclick = displayPrice5;
function displayPrice5() {
document.getElementById('car').textContent = cardano.eur;
            }            

}

fetchData(); 

function refreshPage(){
        location.reload();
    }				


