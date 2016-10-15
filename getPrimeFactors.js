export default (number)=>{
  const result = []

  for(let base = 2;base <= number;base++){
    for(;number % base === 0;number /= base){
      result.push(base)
    }
  }
  return result
}
