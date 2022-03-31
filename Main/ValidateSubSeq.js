// Validate sub.seq

//Given two non-emoty arrays of integers, write a function that determines whether the second array is a subsequence of the first


function validate(arr, seq){
 let sIndex =0;
  for(const value of arr){
    if(sindex === seq.length) 
      break;
    if(seq[sIndex] === value) 
      sIndex++;
  }
  return sIndex === seq.length;
  
}




