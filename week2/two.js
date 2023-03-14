var combine = function (n, k) {
    let nums = Array.from({ length: k }, (_, i) => i + 1);
    nums.push(n + 1);
    let result = [];
    let j = 0;
    while (j < k) {
        result.push(nums.slice(0, k));
        j = 0;
        while (j < k && nums[j + 1] == nums[j] + 1) {
            nums[j] = j + 1;
            j += 1;
        }
        nums[j] += 1;
    }
    return result;
}