function validBraces(braces){
  braces = braces.split("");
  let open = ["{", "[", "("], close = ["}", "]" ,")"], track = [];
  for (let i = 0; i < braces.length; i++) {
    let curr = braces[i];
    if (open.indexOf(curr) != -1){
      track.push(curr);
    } else if (close.indexOf(curr) == open.indexOf(track[track.length - 1])) {
      track.pop();
    } else {
      return false;
    }
  }
  if (track.length == 0) {
    return true;
  } else {
    return false;
  }
}
