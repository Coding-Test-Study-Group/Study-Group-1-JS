/**
 * 1) 단어 사이에는 공백만 올 수 있게 주어진 문장을 정리
 * 2) 전체 단어를 순회해 금지단어 배열에 포함되지 않은 항목만 추가
 * 3) 정답 객체에 접근해 가장 큰 값 가져오기
 * @param {} paragraph 
 * @param {*} banned 
 * @returns 
 */
var mostCommonWord = function(paragraph, banned) {
    let checkParagraph = paragraph.toLowerCase().replaceAll(/[?!',;.]/g," ").replaceAll("  "," ").trim();
    let cntObj = {};
    checkParagraph.split(" ").forEach(el=>{
        if(banned.includes(el))return;
        else cntObj[el]?cntObj[el]++:cntObj[el]=1
    })
    let max = Math.max(...Object.values(cntObj))
    return Object.keys(cntObj).find(key=>cntObj[key]===max)
};