def solution(priorities, location):
    answer = []                         
    pr = priorities
    lo = location
    
    list = [i for i in range(len(pr))]  # 인덱스배열
    
    
    while len(pr) != 0:                 # pr 비어버릴때까지~
        if pr[0] == max(pr):            
            answer.append(list.pop(0))
            pr.pop(0)
        else:
            pr.append(pr.pop(0))        # 재배치
            list.append(list.pop(0))

# 잘 나오나?
    print(list)
    print(answer)
    
    return answer.index(lo)+1


print(solution([1,1,9,1,1,1], 0))
