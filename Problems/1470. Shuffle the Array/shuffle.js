var shuffle = function (nums, n) {

    let j = n / 2;
    let res = [];
    for (i = 0; i < j; i++) {
        res.push(nums[i]);
        res.push(nums[i + j])
    }
    return res;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 6));