/**
 * 단어의 조합 => 중복 확인하기
 * 1) 주어진 단어 배열을 모두 순회해 각 단어를 오름차순 정렬
 * 2) 정답 객체를 생성해 없을 경우 [값]
 * 3) 있을 경우 [값]에 새로운 값 추가
 * 4) 정답 객체의 값 추가
 * @param {*} strs 
 * @returns 
 */
var groupAnagrams = function(strs) {
    const strsL = strs.length;
    if(strsL===1)return [strs];

    let strsObj = {};
    strs.forEach(el=>{
        const sortStr = el.split("").sort().join("");
        strsObj[sortStr]?strsObj[sortStr].push(el):strsObj[sortStr] = [el];
    })
    return Object.values(strsObj)
};