## 실험 & 메모

<br>

---

<br>

### Queue, 메서드별 성능

n이 10만으로 주어졌을 때, `splice`, `shift`, `구현된 queue` 세가지를 비교하여 속도를 측정함.

```
결과 (5회 시행 후 평균값)

splice : 12025 ms
shift : 2177 ms
Qclass : 11 ms
```

**결론**

자료구조 구현에 있어서 직접 모듈을 만드는 편이 빠른 성능을 보이므로 메서드에 너무 의존하지 말자

[코드 참고](./queue.js)

<br>

---

<br>

### for loop 성능 비교

https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-for-loop-%EC%86%8D%EB%8F%84-%EB%B9%84%EA%B5%90

<br>

---

<br>

### Math.max 성능 비교

https://choicurly.tistory.com/entry/%EC%82%BC%ED%95%AD%EC%97%B0%EC%82%B0%EC%9E%90-%EB%B9%84%EA%B5%90%EC%97%B0%EC%82%B0%EC%9E%90-Mathmax%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%B5%9C%EB%8C%80%EA%B0%92-%EA%B5%AC%ED%95%98%EA%B8%B0-%EB%B9%84%EA%B5%90

<br>

---

<br>

### Last few GCs

```
<--- Last few GCs --->

[26068:000001BB84659390]    35061 ms: Scavenge 1860.9 (2045.7) -> 1858.9 (2053.9) MB, 20.0 / 0.0 ms  (average mu = 0.356, current mu = 0.348) allocation failure
[26068:000001BB84659390]    35098 ms: Scavenge 1871.5 (2056.5) -> 1869.0 (2062.2) MB, 15.6 / 0.0 ms  (average mu = 0.356, current mu = 0.348) allocation failure
[26068:000001BB84659390]    35128 ms: Scavenge 1879.0 (2064.0) -> 1877.1 (2071.6) MB, 19.1 / 0.0 ms  (average mu = 0.356, current mu = 0.348) allocation failure


<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 00007FF7614C4C9F napi_wrap+111007
 2: 00007FF761468226 v8::base::CPU::has_sse+59910
 3: 00007FF761469126 node::OnFatalError+294
 4: 00007FF761D42ABE v8::Isolate::ReportExternalAllocationLimitReached+94
 5: 00007FF761D2788D v8::SharedArrayBuffer::Externalize+781
 6: 00007FF761BD09DC v8::internal::Heap::EphemeronKeyWriteBarrierFromCode+1516
 7: 00007FF761BDBDFA v8::internal::Heap::ProtectUnprotectedMemoryChunks+1258
 8: 00007FF761BD8F39 v8::internal::Heap::PageFlagsAreConsistent+2457
 9: 00007FF761BCDAD1 v8::internal::Heap::CollectGarbage+2049
10: 00007FF761BCBCD5 v8::internal::Heap::AllocateExternalBackingStore+1349
11: 00007FF761BEC14B v8::internal::Factory::NewFillerObject+203
12: 00007FF76191AC01 v8::internal::interpreter::JumpTableTargetOffsets::iterator::operator=+1409
13: 00007FF761DCB97D v8::internal::SetupIsolateDelegate::SetupHeap+465325
14: 00007FF761D8B361 v8::internal::SetupIsolateDelegate::SetupHeap+201617
15: 00007FF761D63E22 v8::internal::SetupIsolateDelegate::SetupHeap+40530
16: 0000011450A02EB6
```

`FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory`

VM서 힙 메모리 최대한도를 벗어난경우.

물리적으로 메모리 여유가 있어도 메모리 많이 써서 위험하겠다 싶으면 발생시킴

옵션 설정으로 메모리 한도를 늘릴 순 있지만 필요한 경우 아니면 지양할 것.

- option 설정
  > 4GB로 설정하는 경우
  > `node --max-old-space-size=4096 something.js`

<br>

---

<br>
