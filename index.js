//EXERCISE #1
function getWeekDay(number){ 

   switch(+number){
    case 1:
    case "1":
       console.log("Today is a Monday stupid asshole"); 
       break;

    case 2:
    case "2":
       console.log("Tuuuessssday");
       break;

    case 3:
    case "3":
       console.log("Wednesday, day when the all world fuck your ass");
       break;

    case 4:
    case "4":
       console.log("Четверг блять");
       break;

    case 5:
    case "5":
       console.log("Пятница, хуй те в задницу");
       break;

    case 6:
    case "6": 
       console.log("Saturday, simple blowjob day");
       break;

    case 7:
    case "7":
       console.log("Sunday, dont forget make break of sucking");
       break;

   default:
       (number==null)?
       console.log("You choose nothing"):
       (typeof(number)=="number")?
       console.log("Are you stupid? I said choose the number between 1-7!"):
       (typeof(number)=="string")?
       console.log("This is text"):
       console.log("Something wrong");
    }
}

//EXERCISE #2
function checkAge(name, age){
    let leftTo18 = 18-age;


    if(typeof(name)==null || typeof(name)=="undefined" || typeof(name)=="number" || name==""){
        console.log("Please write correct name")} 
    
    else if(typeof(age)==null || typeof(age)=="undefined" || typeof(age)=="string"){
        console.log("Please write correct age")}
            else{
                
                if (age>=18){
                    console.log("You are welcome, "+ name)} 
                    else{console.log("Sorry, " + name +". Your age doesn't fit, please come back " + leftTo18 + " years later")};
    }

}

//EXERCISE #3
function checkSimpleNumber(simpleNumber){
    if(simpleNumber==1 || simpleNumber==3 || simpleNumber==5 || simpleNumber==7) {console.log("true")}
     else if(simpleNumber%2==0 || simpleNumber%3==0 || simpleNumber%5==0 || simpleNumber%7==0){
    console.log("false")} else{console.log("true")};
}

//EXERCISE #4
function checkEven(number){
    number==null?console.log("Nothing is written"):
    typeof(number)=="string"?console.log("This is not number"):
    number%2==0?console.log(true):
    number%2*2==2?console.log(false):
    console.log("This is fractional number");
}

//EXERCISE #5
function getCircle(circleNumber){
    let i=1
    while(i<=circleNumber){
        console.log(i++);
    }
}

//EXERCISE #6
function checkAdmin(admin){
  admin=="admin"?console.log(true):console.log(false)
}






