function TextTrackList(message,delay){
    return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log(message);
        resolve();
    },delay)
    });
}


TextTrackList("First task completed",1000)
.then(()=>TextTrackList("second task is completed",2000))
.then(()=>TextTrackList("third task is completed",3000))
.then(()=>TextTrackList("fourth task is completed",4000))
