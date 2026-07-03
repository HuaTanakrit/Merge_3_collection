export function merge(collection1 : number[], collection2 : number[], collection3 : number[]) : number[]{

    const result: number[] = []
  

    let p1 = 0
    let p2 = 0
    let p3 = collection3.length-1

    while(p1 < collection1.length || p2 < collection2.length || p3 > -1){
        let val1 =  collection1[p1] ?? Infinity
        let val2 =  collection2[p2] ?? Infinity
        let val3 =  collection3[p3] ?? Infinity

        if(val1 <= val2 && val1 <= val3){
            result.push(val1)
            p1++
        }
        else if(val2 <= val3 ){
            result.push(val2)
            p2++
        }
        else{
            result.push(val3)
            p3--
        }
    }
    return result
}