function range(start, end, step) {
    if (typeof step === 'undefined') {
      step = 1;
    }
  
    if (step === 0) {
      throw new Error("L'étape ne peut pas être zéro");
    }
  
    var result = [];
  
    if (start <= end) {
      for (var i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (var i = start; i >= end; i += step) {
        result.push(i);
      }
    }
  
    return result;
  }
  
  if (typeof exports !== 'undefined') {
    exports.range = range;
  }