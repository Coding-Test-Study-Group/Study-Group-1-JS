/**
 *  function solution(문자열)
 * 주어진 문자열을 최소 길이부터 최대 문자열 길이까지 반복문을 돌려
 * 문자열을 자르고, 각 반복의 결과를 배열에 저장
 * 결과 배열에는 반복 당 중복이 처리된 문자열 값이 주어지기 때문에 
 * 해당 배열의 최솟값이 가장 압축이 잘 된 문자열
 */
function solution(s) {
    var answer = [];
    for(let i =1; i<=s.length;i++){
        answer.push(stringSplit(s, i).length);
    }
    return Math.min(...answer);
}

/**
 * function stringSplit(문자열, 자르는 길이))
 * substring 함수를 통해 정해진 문자열의 길이만큼 반환
 * split 과 nextSplit을 비교해 같을 경우 횟수를 증가시키고
 * 다를 경우 새 문자열에 담는다
 * 문자열 끝까지 순회시 새 문자열을 반환
 */
// hoisting 필요없는 거 같아 뒤에 배치합니다
const stringSplit = (str, splitNum) => {
    let newStr = "";
    let cnt = 1;
    let i =0;
    while(i<str.length){
        let splitCh = str.substring(i, i+splitNum);
        let nextSplitCh = str.substring(i+splitNum, i+splitNum+splitNum);
        if(splitCh===nextSplitCh){
            cnt++;
        }else{
            if(cnt===1){
                newStr += splitCh;
            }else{
                newStr += cnt+splitCh;
                cnt = 1;
            }
        }
        i+=splitNum;
    }
    return newStr;
}