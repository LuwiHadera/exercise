let a = 5;
let b = 4;
let c = 3;

function semiPerimeter(x,y,z){
  let s = (x + y + z) / 2;
  return s;
}

function areaTriangle(x,y,z){
  let s = semiPerimeter(x,y,z)
  let area = Math.sqrt(s * (s-x)*(s-y)*(s-z))
  return area
}

console.log(areaTriangle(a,b,c))

