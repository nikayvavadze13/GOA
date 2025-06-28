function longestIncreasingSubarray(arr) {
    if (arr.length === 0) {
        return [];
    }

    let maxLength = 1;
    let currentLength = 1;
    let startIndex = 0;
    let maxStartIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            currentLength++;
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxStartIndex = startIndex;
            }
        } else {
            currentLength = 1;
            startIndex = i;
        }
    }

    return arr.slice(maxStartIndex, maxStartIndex + maxLength);
}