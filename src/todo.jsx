// export default function Todo({task, isDone}){
    // return(
        // <li>task:{task}</li>
    // )
//}


// export default function Todo ({task, isDone}){
//  if(isDone){
    // return <li>Done:{task}</li>  
        // }else{
            // return<li>Do now{task}</li>
        // }
    // 
// }


// export default function Todo({task, isDone, time=0}){
    // return isDone ?
    // <li>Done:{task} time
    {/* :{time}</li>:<li>NOt Done: {task}</li> */}
// }

// conditional rendering

//  export default function Todo({task, isDone, time=0}){
//    return isDone && <li>Done task: {task} time: {time}</li>
//  }


// export default function Todo({task, isDone, time=0}){
//    return isDone || <li>Done task: {task} time: {time}</li>
//  }


//  export default function Todo ({task, isDone}){
//   if(isDone){
//    return   null
    //    }else{
//    return<li>Do now{task}</li>
    //    }
    // }


export default function Foods({food}){
        return <li>food: {food}</li>
    }