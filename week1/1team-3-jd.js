/**
 * 괄호 짝 검사하기
 * map은 짝 지을 수 있으니까 검색 시간 1
 * 주어진 문자열을 나누어서, 괄호의 시작 값일 경우 스택에 집어넣고
 * 괄호의 끝인데 스택 비어있으면 오류,
 * 괄호의 끝인데 짝이 맞지 않으면 틀렸으므로 종료
 * 스택 비었을 때만 참
 */
const checkBracket = (str)=>{
    let stack = [];
    const map = {
        "[":"]",
        "(":")",
        "{":"}"
    }
    let strA = str.split("");
    for(let i =0; i<strA.length;i++){
        if(strA[i]==="[" || strA[i]==="(" || strA[i]==="{" ){
            stack.push(strA[i]);
        }else{
            if(i===0) return false;
            else{
                let mapCheck = stack.pop();
                if(strA[i]!==map[mapCheck]) return false;
            }
        }
    }
    if(stack.length===0)return true;
    return false;
}
/**
 * 해당 문자열에 대해서 문자열 길이만큼 반복
 * 괄호의 짝이 맞다면 결과값 증가
 * 다를 경우 shift로 맨 앞 뽑아내서, Push로 맨 뒤에 집어넣기
 */
function solution(s) {
    var answer = 0;
    let sArr = s.split("");
    for(let i =0; i<s.length;i++){
        if(checkBracket(sArr.join("")))answer++;
        let goEnd = sArr.shift();
        sArr.push(goEnd);
    }
    return answer;
}