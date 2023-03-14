var combine = function(n, k) {
    result = []
    
        const comb = (start, curComb) => {
            if(curComb.length == k){
                result.push( [...curComb] ) ;
                return;
            }
            
            for(let i = start; i <= n ; i++){
                curComb.push( i );
                comb(i+1, curComb );
                curComb.pop();
            }
            return;
        }
    
        comb(start=1, curComb=[]);
        return result;
    };