var numIdenticalPairs = function (nums) {
    let count = 0;
    for (i = 0; i < nums.length; i++) {
        for (j = i; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) count++;
        }
    }
    return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))