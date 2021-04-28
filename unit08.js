document.querySelector('#exec').addEventListener('click', function () {
  let hor = parseInt(document.querySelector('#hor').value);
  let ver = parseInt(document.querySelector('#ver').value);
  let mine = parseInt(document.querySelector('#mine').value);
  console.log(hor, ver, mine);

  let 후보군 = Array(hor * ver)
    .fill()
    .map(function (요소, 인덱스) {
      return 인덱스 + 1;
    });
  let 셔플 = [];
  while (후보군.length > 0) {
    let 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
  }


  let dataset = [];
  let tbody = document.querySelector('#table tbody');
  for (let i = 0; i < ver; i++) {
    let arr = [];
    let tr = document.createElement('tr');
    dataset.push(arr);
    for (let j = 0; j < hor; j++) {
      arr.push(1);
      let td = document.createElement('td');
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  console.log(dataset);
});