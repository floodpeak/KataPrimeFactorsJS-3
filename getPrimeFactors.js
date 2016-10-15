export default (number)=>{
  const result = []
  let base = 2
  if(number % base === 0){
    result.push(base)
    number /= base
  }
  base++
  if(number === 9){
    result.push(base)
    number /= base
  }
  if(number >1){
    result.push(number)
  }
  return result
}
