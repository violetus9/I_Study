// 문자열 내 마음대로 정렬하기

const log = console.log;

function solution(strings, n) {
  // const answer = [];

  strings.sort((A, B) => {
    // n번째 요소 비교용
    const a = A[n];
    const b = B[n];
    // a === b ? 정석대로 정렬
    // 아니면 ? a랑 b만쓰기
    return (a === b) ? ((A > B) - (A < B))
      : ((a > b) - (a < b));
  })
  // log(strings)
  // return strings;
}


solution(['sun', 'bed', 'car'], 1);
solution(['abce', 'abcd', 'cdx'], 2);