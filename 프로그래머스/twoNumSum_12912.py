def solution(a, b):
    li=[]
    li.append(a)
    li.append(b)
    for i in range(min(li)+1,max(li)):
        li.append(i)
        A=sum(li)
    if a==b:
        A=a
    answer = A
    return answer

print(solution(3,5))
