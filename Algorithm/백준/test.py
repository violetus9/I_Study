
text = 'ljes=njak'


li = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']


for i in li:
    text = text.replace(i, '~')

print(len(text))
