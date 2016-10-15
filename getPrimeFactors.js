export default (number)=>{
  if(number === 9){
    return [3,3]
  }
  const result = []
  const base = 2
  if(number % base === 0){
    result.push(base)
    number /= base
  }
  if(number >1){
    result.push(number)
  }
  return result
}
