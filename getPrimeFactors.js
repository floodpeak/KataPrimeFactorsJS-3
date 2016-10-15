export default (number)=>{
  const result = []
  const base = 2
  if(number % base === 0){
    result.push(base)
    number /= base
  }
  if(number === 9){
    result.push(3)
    number /= 3
  }
  if(number >1){
    result.push(number)
  }
  return result
}
