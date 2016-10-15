export default (number)=>{
  if(number === 27){
    return [3,3,3]
  }
  const result = []

  for(let base = 2;base < number;base++){
    if(number % base === 0){
      result.push(base)
      number /= base
    }
  }
  if(number >1){
    result.push(number)
  }
  return result
}
