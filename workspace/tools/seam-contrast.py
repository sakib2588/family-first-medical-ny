import math
def lin(c):
    c/=255; return c/12.92 if c<=0.04045 else ((c+0.055)/1.055)**2.4
def rgb(h): h=h.lstrip('#'); return [int(h[i:i+2],16) for i in (0,2,4)]
def L(h): r,g,b=[lin(x) for x in rgb(h)]; return 0.2126*r+0.7152*g+0.0722*b
def cr(a,b): x,y=sorted([L(a),L(b)],reverse=True); return (x+.05)/(y+.05)
def oklch(h):
    r,g,b=[lin(x) for x in rgb(h)]
    l=0.4122214708*r+0.5363325363*g+0.0514459929*b
    m=0.2119034982*r+0.6806995451*g+0.1073969566*b
    s=0.0883024619*r+0.2817188376*g+0.6299787005*b
    l,m,s=[v**(1/3) for v in (l,m,s)]
    Lk=0.2104542553*l+0.7936177850*m-0.0040720468*s
    a=1.9779984951*l-2.4285922050*m+0.4505937099*s
    bb=0.0259040371*l+0.7827717662*m-0.8086757660*s
    return round(Lk,3),round(math.hypot(a,bb),3),round(math.degrees(math.atan2(bb,a))%360,1)
def mix(a,b,t):
    A,B=rgb(a),rgb(b); return '#'+''.join('%02x'%round(A[i]*(1-t)+B[i]*t) for i in range(3))
cols=['#fbfaf7','#f3f1ec','#eceaf2','#dedaec','#17123a','#231d4f','#2a2458','#2e2860','#342d6b','#5fc4c4','#d9a02c','#7e74ce']
for c in cols: print(c, 'L=%.4f'%L(c), oklch(c), 'vsWhite %.2f'%cr(c,'#ffffff'),'vs#fbfaf7 %.2f'%cr(c,'#fbfaf7'))
print()
for d in ['#17123a','#231d4f','#2a2458','#2e2860','#342d6b']:
  print(d,'white %.2f aqua %.2f gold %.2f | vs dedaec %.2f vs fbfaf7 %.2f vs f3f1ec %.2f'%(cr(d,'#ffffff'),cr(d,'#5fc4c4'),cr(d,'#d9a02c'),cr(d,'#dedaec'),cr(d,'#fbfaf7'),cr(d,'#f3f1ec')))
# current wash: rgba(126,116,206,.38) over 17123a
w=mix('#17123a','#7e74ce',.38); print('wash',w,cr(w,'#ffffff'),cr(w,'#dedaec'),oklch(w))
# glass seam stops
for t in [.25,.5,.75]:
  m=mix('#dedaec','#2e2860',t); print('seam',t,m,oklch(m),'white %.2f'%cr(m,'#ffffff'),'text1c1838 %.2f'%cr(m,'#1c1838'))
print('text #1c1838 on dedaec %.2f, on fbfaf7 %.2f, on f3f1ec %.2f'%(cr('#1c1838','#dedaec'),cr('#1c1838','#fbfaf7'),cr('#1c1838','#f3f1ec')))
best=None
for i in range(1,100):
  m=mix('#dedaec','#2e2860',i/100); a,b=cr(m,'#dedaec'),cr(m,'#2e2860')
  if best is None or abs(a-b)<best[0]: best=(abs(a-b),m,a,b,i)
print('mid',best, oklch(best[1]))
for t in [.4,.55]: 
  g=mix('#dedaec','#2e2860',t); print('glass-tint',t,g,oklch(g), cr(g,'#dedaec'),cr(g,'#2e2860'))
print('text #1c1838 on f3f1ec %.2f; #4a4560 on f3f1ec %.2f on dedaec %.2f'%(cr('#1c1838','#f3f1ec'),cr('#4a4560','#f3f1ec'),cr('#4a4560','#dedaec')))
w=mix('#2e2860','#7e74ce',.30); print('new wash',w,cr(w,'#ffffff'),cr(w,'#5fc4c4'),cr(w,'#d9a02c'),oklch(w))
print('hairline',cr('#ffffff','#2e2860'))
