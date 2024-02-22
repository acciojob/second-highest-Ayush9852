//your JS code here. If required.
function secondHighest(arr) {
    // If the array is empty or has only 1 element or all elements are the same
    if (arr.length <= 1 || new Set(arr).size === 1) {
        return -Infinity;
    }

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}