/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let l = 0, h = n, m = 0;
        
        while(l < h){
            m = l + Math.floor((h+l) / 2);
            if(isBadVersion(m) && !isBadVersion(m-1)) break;
            else if(isBadVersion(m)) h--;
            else l = m;
            
        }

        return m;
    };
};