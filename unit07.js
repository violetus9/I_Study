
let left = 0;
setInterval(() => {
  if (left === 0) {
    left = '-142px';
  } else if (left === '-142px') {
    left = '-284px';
  } else {
    left = 0;
  }

  document.querySelector('#computer').style.background =
    'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + left + ' 0';
}, 100);

document.querySelectorAll('.btn').forEach(function (btn) {
  // 쿼리셀렉터 올 써야 세 패턴 불러들임, 그렇지 않으면 맨 우선인 가위만 불러오게 됨
  // 개발자 도구에서 EventListener 탭에서 생성된 것들 확인할 수 있음
  btn.addEventListener('click', function () {
    console.log(this.textContent);
  });
});

