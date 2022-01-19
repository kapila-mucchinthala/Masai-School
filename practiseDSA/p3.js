var data = [1,1,2,2,5];
data = data.sort((a, b) => {
      return a - b;
})

console.log(binarySearch(0, data.length - 1, 1));
function binarySearch(low, high, k) {
      while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (data[mid] == k) {
                  return mid;
            }
            if (data[mid] > k) {
                  high = mid - 1;
            }
            else {
                  low = mid + 1;
            }
      }
}

