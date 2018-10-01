const yargs=require('yargs');

const note=require('./Note.js');

var titleOption = { describe : "title of note",
demand : true,
alias : 't'
};
var bodyOption = { describe : "body of note",
demand : true,
alias : 'b'
};
var argv=yargs
.command("add","add a note to file",{
    title : titleOption,
    body : bodyOption
})
.command("delete","delete a note to file",{
    title : titleOption    
})
.argv;
var command=argv._[0];

if(command==='add')
{
    note.addNote(argv.title,argv.body);
}
else if(command==='delete')
{
    note.deleteNote(argv.title);
}
else if(command==='list')
{
   var notes = note.getList();
   console.log(notes);

}
else if(command==='read')
{
    //note.readNote(argv.title);
    console.log(note.readNote(argv.title));
}
else{
    console.log('unrecognised commond')
}