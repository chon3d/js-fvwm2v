// Import stylesheets
import './style.css';
import liff from '@line/liff';
// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var parameter = '';
var branch = urlParams.get('branch');
var engno = urlParams.get('engno');
var chasno = urlParams.get('chasno');
var size_car = urlParams.get('size_car');
var dlv_type = urlParams.get('location');
var user_use = urlParams.get('user_use');
var remark = urlParams.get('remark');
var addType = urlParams.get('addType');

async function main() {
  await liff.init({ liffId: '2000715483-MrE104Jo' });
}

main();
