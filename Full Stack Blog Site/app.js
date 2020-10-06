var express			=require('express'),
	app				=express(),
	sanitizer 		=require("express-sanitizer"),
	methodOverride	=require("method-override"),
	mongoose		=require("mongoose"),
	parse			=require("body-parser");
app.use(parse.urlencoded({extended:true}));
app.use(express.static("public")); // for CSS
app.use(sanitizer())//CAN ONLY BE USED AFTER THE BODY PARSER
app.use(methodOverride("_method"))// AS HTML Form dont support put and delete req therefore we use this by adding a "?_PUT" to the "action" and POST as method page of the form for a PUT req 

mongoose.set('useNewUrlParser',true);
mongoose.set( 'useUnifiedTopology', true );

mongoose.connect("mongodb://localhost/Blog");

//=======================================================================


var bSchema=mongoose.Schema({
	title:String,
	img:String,
	body:String,
	date: {type:Date,default:Date.now}
})
var bg=mongoose.model("blPst",bSchema);
// bg.create(
// 	{title:"Test Blog",
// img:"https://pixabay.com/get/55e0d1444856a814f1dc84609620367d1c3ed9e04e5074417d267fd09e4bc5_340.jpg",
// 	 body:"This is a test Protocol if ever Order 66 was premitted to be executed. Goodbye World"},
// 	(err,blg)=>{
// 	if(err)
// 		console.log("Error:",err)
// 	else
// 		console.log(blg)
// });
app.get("/",(req,res)=>{
	res.redirect("/blogs")
})
app.get("/blogs",(req,res)=>{
	
	bg.find({},(err,bgp)=>{
		if(err)
			console.log("Error",err)
		else
		res.render("index.ejs",{bp:bgp});
	})
	})
	app.get("/blogs/new",(req,res)=>{
		res.render("new.ejs");
	})
	
	app.post("/blogs",(req,res)=>{
		console.log(req.body.blog.body)
		console.log("===================")
		req.body.blog.body=req.sanitize(req.body.blog.body)
		console.log(req.body.blog.body)
		bg.create(req.body.blog,(err,blg)=>{ //Instead of {title:req.body.title,img:req.body.img,body:req.body.body,date:req.body.date} just put the obj
			if(err)
				console.log("Error: ",err)
			else{
				console.log(blg)
				res.redirect("/blogs");
			}
		})
	})
	app.get("/blogs/:id",(req,res)=>{
			bg.findById(req.params.id,(err,bgp)=>{
				if(err){
					console.log("Error: ",err)	
				}
				else
					res.render("show.ejs",{bgp:bgp});
			})
			
			})

	app.get("/blogs/:id/update",(req,res)=>{
		bg.findById(req.params.id,(err,bgp)=>{
				if(err){
					console.log("Error: ",err)	
				}
				else
					res.render("edit.ejs",{bgp:bgp,id:req.params.id});
			})
			
			})

	app.put("/blogs/:id",(req,res)=>{
		console.log(req.body.blog.body)
		console.log("===================")
		req.body.blog.body=req.sanitize(req.body.blog.body)
		console.log(req.body.blog.body)
		bg.findByIdAndUpdate(req.params.id,{$set:req.body.blog},(err,bp)=>{
			if(err)
				console.log("Error: ",err)
			else
				res.redirect("/blogs/"+req.params.id)
		})
	})
	app.delete("/blogs/:id",(req,res)=>{
		bg.findByIdAndRemove(req.params.id,(err)=>{
			if(err)
				console.log("Error:",err)
			else
				res.redirect("/blogs")
				
		})
	})	

//===============================================================
app.listen("2999",process.env.IP,()=>{
		   console.log("Blog server Listening on PORT:2999");
	
})

