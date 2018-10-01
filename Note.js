// console.log('Note started');

// module.exports.age=25;
// module.exports.addNote=()=>{ console.log('In add note'); return('addNote');};
// module.exports.add=(a,b)=>{ return a+b;};
//console.log(module);

const fs=require('fs');

fetchData=() =>{
    try{
        var notedata=fs.readFileSync('note-data.json');
        notes=JSON.parse(notedata);
        return notes;
        }
        catch (ex){
            return [];
        }
};
SaveNote=(notes)=>{
    fs.writeFileSync('note-data.json',JSON.stringify(notes));
};

addNote = (title,body)=>{
    console.log(`adding note Title : ${title}, Body : ${body}`);
    var notes=[];
    var note = { Title : title, Body :body};
   
    notes=fetchData();

    var duplicateNote=notes.filter((note)=>{
        return note.Title===title;
    });

    if(duplicateNote.length ===0)
    {
    notes.push(note);
    }
    else{ console.log(`Name already taken`);}

    SaveNote(notes);


};

getList = ()=>{
    console.log(`Please wait getting list`);
    return fetchData();
};

readNote =(title)=>{
    console.log(`Read note wit title : ${title}`);
    var notes=fetchData();
    return notes.filter((note)=>note.Title===title);
};

deleteNote=(title) =>{
    console.log(`Remove Note with title : ${title}`);
    var notes=fetchData();
    notes= notes.filter((note)=>note.Title!==title);
    SaveNote(notes);
};

module.exports={addNote, getList, readNote,deleteNote};