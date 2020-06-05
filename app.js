const express=require('express');
const app=express();
const gtts=require('gtts.js').gTTS;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('index')
});

app.post('/',(req,res)=>{
    let text=req.body.text

    const speech=new gtts(text);

    speech.save("output.mp3").then(()=>{
        res.download("output.mp3")
    })
    .catch((err)=>console.log(err)
    )
});

const PORT=3000;

app.listen(PORT,()=>console.log("Server running at 3000")
);