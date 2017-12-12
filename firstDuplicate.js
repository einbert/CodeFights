function firstDuplicate(a) {

    //Faster solution using a seen array (uses additional memory)
    var solution, count, secondcount, seen;
    solution = -1;
    var seen = Array(a.length+1).fill(0);
    for(count = 0; count < a.length; count++){
        seen[a[count]]++;
        if (seen[a[count]]>1)
            return a[count];
    }
    return solution;
    
    //Slower solution using nested for loops:    
   /* for( count = 0;count < a.length; count++){
        for(secondcount = count+1; secondcount < a.length; secondcount++){
            if (a[count]==a[secondcount])
                if ((solution == -1) || (secondcount<solution))
                    solution = secondcount;
            
        }
    }
    if (solution == -1 )
    return solution;
    else
    return a[solution]; */
}
