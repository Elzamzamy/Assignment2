//Question1
//this mechanizm can manage callback function and send it to main thread

//Question2
//its a library to excute async and non blocking operations 

//Question3
//by libuv and when them finish use event loop to excute callback

//Question4
//call stack: a place the function make excution inside him
//Event Queue:a place store the call back function
//Event loop:a michanizam manage call bake function from Event Queue to caal stack 


//Question5
//Thread Pool: A group of threads managed by libuv to handle some asynchronous tasks in Node.js
//Thread Pool Size: You can set the thread pool size using the UV_THREADPOOL_SIZE environment variable

//Question6
//blocking:we use some operations to make one command or excute one function in the main thred 
// and make blocking for any thing inside main  to finish this part

//non bloking :we use some operations to make a lot of command or excute a lot of  function in libuv
//  or os in the same time without stop main thread 


//part2 
//question1
// express=require('express');
// let {users}=require('./users_repository');
// const app=express();

// app.post('/user',express.json(),(req,res)=>{
//     const {mail}=req.body;

//     let userIndex=users.findIndex((user)=>{
//         if(user.mail===mail)
//             return true
//     })

//     if(userIndex!==-1)
//     {
//         return res.json({message:'user already exist',success:false});
//     }

//      users.push(req.body);
//      console.log(users);
//      res.json({message:'user added successufully',success:true});
// })


//part2
//question2
// express=require('express');
// let {users}=require('./users_repository');
// const app=express();

// app.put('/user',express.json(),(req,res)=>{
//     const {Id}=req.body;

//     let userIndex=users.findIndex((user)=>{
//         if(user.Id===Number(Id))
//             return true
//     })

//     if(userIndex===-1)
//     {
//         return res.json({message:'user not exist',success:false});
//     }

//     users[userIndex]=Object.assign(users[userIndex],req.body);
//      console.log(users);
//      res.json({message:'user updated successufully',success:true});
    
// })




//part2
//question3
// express=require('express');
// let {users}=require('./users_repository');
// const app=express();

// app.delete('/user/:Id',(req,res)=>{
//     const {Id}=req.params;

//     let userIndex=users.findIndex((user)=>{
//         if(user.Id===Number(Id))
//             return true
//     })

//     if(userIndex===-1)
//     {
//         return res.json({message:'user not exist',success:false});
//     }

//     users.splice(userIndex,1);
//     console.log(users);
//     res.json({message:'user deleted successufully',success:true});
// })






//part2
//Question4
// express=require('express');
// let {users}=require('./users_repository');
// const app=express();

// app.get('/user/:name',(req,res)=>{
//     const {name}=req.params;

//     let userIndex=users.findIndex((user)=>{
//         if(user.userName===name)
//             return true
//     })

//     if(userIndex===-1)
//     {
//         return res.json({message:'user not exist',success:false});
//     }

   
   
//     res.json({message:'user get successfully',success:true,data: users[userIndex]});
// })




//part2
//question5
// express=require('express');
// let {users}=require('./users_repository');
// const app=express();

// app.get('/user/:name',(req,res)=>{
//     const {name}=req.params;

//     let userIndex=users.findIndex((user)=>{
//         if(user.userName===name)
//             return true
//     })

//     if(userIndex===-1)
//     {
//         return res.json({message:'user not exist',success:false});
//     }

   
   
//     res.json({message:'users got successfully',success:true,data: users});
// })



//part2
//question6
// express=require('express');
// let {users}=require('./users_repository');
// const app=express();
// app.get('/user/:age',(req,res)=>{
//     const {age}=req.params;

//     let minage=users.filter((user)=>{
//         if(user.age>=age)return true;
//         return false;
//     })

//     if(minage.length===0)
//        return res.json({message:'not use found',success:false});
   
//     return res.json({message:'user get successfully',success:true,data: minage});
// })





//part2
//question7
express=require('express');
let {users}=require('./users_repository');
const app=express();

app.get('/user/:Id',(req,res)=>{
    const {Id}=req.params;

    let userIndex=users.findIndex((user)=>{
        if(user.Id===Number(Id))
            return true
    })

    if(userIndex===-1)
    {
        return res.json({message:'user not exist',success:false});
    }

    
    
    res.json({message:'user deleted successufully',success:true,data:users[userIndex]});
})

app.listen(3000,()=>{
    console.log('server run on port 3000');
})

