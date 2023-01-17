function signupStudent() {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]" );

    var firstname=document.getElementById("firstName").value;
    var validftName=checklength(firstname,4);
    if(validftName==false){document.getElementById("errorftname").innerHTML="check your firstname"}
    else{document.getElementById("errorftname").innerHTML="";}

    var laststname=document.getElementById("lastName").value;
    var validltName=checklength(laststname,4);
    if(validltName==false){document.getElementById("errorltname").innerHTML="check your lastname"}
    else{document.getElementById("errorltname").innerHTML="";}

    var email=document.getElementById("Email").value;
    var validEmail= CheckEmail(usersTab,email);
    if (validEmail == false) {
    document.getElementById ('EmailError').innerHTML = "Check Email"; } 
    else {document.getElementById ('EmailError').innerHTML = '';}
    var tel=document.getElementById("Tel").value;
    var validtel= checkTel(tel);
    if(validtel==false){document.getElementById("errortel").innerHTML="check your Tel"}
    else{document.getElementById("errortel").innerHTML="";}

    var password=document.getElementById("PassWordstudent").value;
    var validlpassword=checklength(password,6);
    if(validlpassword==false){document.getElementById("errorpassword").innerHTML="check your password"}
    else{document.getElementById("errorpassword").innerHTML="";}

    var adresse=document.getElementById("Adresse").value;
    var city=document.getElementById("City").value;

    var cin=document.getElementById("CIN").value;
    var validlcin=checklength(cin,7);
    if(validlcin==false){document.getElementById("errorcin").innerHTML="check your CIN"}
    else{document.getElementById("errorcin").innerHTML="";}

    if(validftName && validltName && validEmail && validlpassword && validtel && validlcin){

        var user = {
            id:generateId(usersTab)+1,
            ftname:firstname,
            ltname:laststname,
            email: email,
            telephone: tel,
            pass: password,
            adr:adresse,
            cin:cin,
            city:city,
            role:"Student",
            //satatu:"ok"
            }
            usersTab.push(user);
            localStorage.setItem("users", JSON.stringify(usersTab));
            location.replace ('login.html');
            console.log(user);
        }
}

function signupProf(){
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]" );

    var firstname=document.getElementById("firstNameProf").value;
    var validftName=checklength(firstname,5);
    if(validftName==false){document.getElementById("errorftnameProf").innerHTML="check your firstname"}
    else{document.getElementById("errorftnameProf").innerHTML="";}
 
    var laststname=document.getElementById("lastNameProf").value;
    var validltName=checklength(laststname,4);
    if(validltName==false){document.getElementById("errorltnameProf").innerHTML="check your lastname"}
    else{document.getElementById("errorltnameProf").innerHTML="";}

    var email=document.getElementById("EmailProf").value;
    var validEmail= CheckEmail(usersTab,email);
    if (validEmail == false) {
    document.getElementById ('EmailErrorProf').innerHTML = "Check Email"; } 
    else {document.getElementById ('EmailErrorProf').innerHTML = '';}

    var password=document.getElementById("PassWordProf").value;
    var validlpassword=checklength(password,6);
    if(validlpassword==false){document.getElementById("errorpasswordProf").innerHTML="check your password"}
    else{document.getElementById("errorpasswordProf").innerHTML="";}

    var tel=document.getElementById("TelProf").value;
    var validtel= checkTel(tel);
    if(validtel==false){document.getElementById("errortelProf").innerHTML="check your Tel"}
    else{document.getElementById("errortelProf").innerHTML="";}

    var adresse=document.getElementById("AdresseProf").value;
    
    var speciality=document.getElementById("speciality").value;

    var exp=document.getElementById("experience").value;
    // var validExp=nbre(exp);
    // if(validExp==false){document.getElementById("errorexperience").innerHTML="check your experience"}
    // else{document.getElementById("errorexperience").innerHTML="";}

    if(validftName && validltName && validEmail && validlpassword && validtel){

    var user = {
        id:generateId(usersTab)+1,
        ftname:firstname,
        ltname:laststname,
        email: email,
        telephone: tel,
        pass: password,
        adr:adresse,
        experience:exp,
        spec:speciality,
        role:"Professor",
        //satatu:"ok"
        }
        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace ('login.html');
        console.log(user);
    }
}
function signupAdmin(){
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]" );

    var firstname=document.getElementById("firstNameAdmin").value;
    var validftName=checklength(firstname,5);
    if(validftName==false){document.getElementById("errorftnameAdmin").innerHTML="check your firstname"}
    else{document.getElementById("errorftnameAdmin").innerHTML="";}
 
    var laststname=document.getElementById("lastNameAdmin").value;
    var validltName=checklength(laststname,4);
    if(validltName==false){document.getElementById("errorltnameAdmin").innerHTML="check your lastname"}
    else{document.getElementById("errorltnameAdmin").innerHTML="";}

    var email=document.getElementById("EmailAdmin").value;
    var validEmail= CheckEmail(usersTab,email);
    if (validEmail == false) {
    document.getElementById ('EmailErrorAdmin').innerHTML = "Check Email"; } 
    else {document.getElementById ('EmailErrorAdmin').innerHTML = '';}

    var password=document.getElementById("PassWordAdmin").value;
    var validlpassword=checklength(password,6);
    if(validlpassword==false){document.getElementById("errorpasswordAdmin").innerHTML="check your password"}
    else{document.getElementById("errorpasswordAdmin").innerHTML="";}

    if(validftName && validltName && validEmail && validlpassword){

    var user = {
        id:generateId(usersTab)+1,
        ftname:firstname,
        ltname:laststname,
        email: email,
        pass: password,
        role:"Admin",
        //satatu:"ok"
        }
      


        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace ('login.html');
        console.log(user);
    }
}
    
function generateId(T) {
        var max;
        if (T.length==0){
            max=0;
        }
          else{  max= T[0].id;
            for (var i = 1; i < T.length; i++) {
    
                if(T[i].id>max){
                    max=T[i].id;
                    }
            }}
         return(max);   
}
function checklength (ch, x) {
    return (ch.length >= x);
}
function CheckEmail(T,email) {
    var findEmail=true;
    for (var i = 0; i < T.length ; i++) {
        if(T[i].email==email){   
            findEmail=false;
            break;
        }
       
    }
    return(findEmail);
}
function checkTel(ch) {
    return (ch.length==8);   
} 
function login () {
    var email = document.getElementById ('loginEmailUser').value;
    var pwd = document.getElementById ('loginPassUser').value;
    var usersTab = JSON.parse (localStorage.getItem ('users'));
    var findedUser = CheckUser(usersTab,email,pwd);
    if (findedUser) {
      localStorage.setItem ('connected', findedUser.id);
      if (findedUser.role == 'Professor') {
        location.replace ('dashboard.html');
      } else if (findedUser.role == 'Student') {
        location.replace ('index.html');
      } else {
        location.replace ('admin.html');
      }
    } else {
      document.getElementById ('loginError').innerHTML =
        'Check your Pass or your email';
    }
}  
function CheckUser(T,email,pass) {
    var findUser;
    for (var i = 0; i < T.length; i++) {
        if (T[i].email == email && T[i].pass == pass) {
            findUser=T[i];
            break;
         
        }
    }
   return findUser; 
} 
function AddFormation() {
    var connectedUser=localStorage.getItem("connected");
    var Name = document.getElementById("nameformation").value;
    var ValidNameform = checklength(Name, 3);
    if (ValidNameform == false) { document.getElementById("errornamefor").innerHTML = "check name formation";
    }
    else { document.getElementById("errornamefor").innerHTML = ""; }

    var price = document.getElementById("price").value;
    var validPrice = checknbr(price, 1);
    if (validPrice == false) {
        document.getElementById("price error").innerHTML ="price error"
    }
    else { document.getElementById("price error").innerHTML = "" }

    var nbrhr = document.getElementById("nbreheure").value;
    var validnbreheur = checknbr(nbrhr, 1);
    if (validnbreheur == false) {
        document.getElementById("nbrehrerror").innerHTML = "number of hours invalid"
    }
    else { document.getElementById("nbrehrerror").innerHTML = "" }

    var nbrplace = document.getElementById("nbreplace").value;
    var validnbrplace = checknbr(nbrplace, 1);
    if (validnbrplace == false) {
        document.getElementById("nbreplaceerror").innerHTML = "number of place invalid"
    }
    else { document.getElementById("nbreplaceerror").innerHTML = "" }

    if(validPrice && validnbreheur && validnbrplace && ValidNameform){

    var formationtab = JSON.parse(localStorage.getItem("formations") || "[]");
    var formation = {
        id:generateId(formationtab)+1,
        Name: Name,
        price: price,
        nbheure:nbrhr,
        nbplace:nbrplace,
        professorId:connectedUser,

    }
    console.log(formation);
    var formationtab = JSON.parse(localStorage.getItem("formations") || "[]");
    formationtab.push(formation);
    localStorage.setItem("formations", JSON.stringify(formationtab));
    location.reload();
    }
}

function checknbr(x, n) {
    return (x >= n);
}
function displayCourses() {
    var formationtab= JSON.parse(localStorage.getItem("formations") || "[]");
    content="";
    for (let i = 0; i < formationtab.length; i++) {
        content=content+`<div class="col-md-4 d-flex ftco-animate">
        <div class="course align-self-stretch">
            <a href="#" class="img" style="background-image: url(images/course-1.jpg)"></a>
            <div class="text p-4">
                <p class="category"><span>${formationtab[i].Name}</span> <span class="price">$${formationtab[i].price}</span></p>
                <h3 class="mb-3  text-secondary"><span class="text text-primary">Number of hours : </span>${formationtab[i].nbheure} h</h3>
                <h3 class="mb-3 text text-primary">number of place :<span class="text text-secondary"> ${formationtab[i].nbplace}</span></h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
                <p class="btn btn-primary text-center" onclick="displaySinglecourse(${formationtab[i].id})"> Participate</p>
               
            </div>
        </div>
    </div>`
        
    }
    document.getElementById("displaycourses").innerHTML=content;
    console.log();
}
function displaySinglecourse(id) {
    localStorage.setItem("displayCourseId",id);
    alert(id);
    location.replace("singleformation.html");  
}
function gotodisplayCourse() {
    var formationtab = JSON.parse(localStorage.getItem("formations") || "[]");
    var displaypfordtab= JSON.parse(localStorage.getItem("displayCourseId"));
    var findedformation;

    for (var i = 0; i < formationtab.length; i++) {
        if (formationtab[i].id==displaypfordtab){
            findedformation=formationtab[i];
            break;
        } 
    }
    document.getElementById("findedformationname").innerHTML=findedformation.Name;
    document.getElementById("findedformationprice").innerHTML=findedformation.price;
    document.getElementById("findedformationnbheure").innerHTML=findedformation.nbheure;
    document.getElementById("findedformationnbplace").innerHTML=findedformation.nbplace; 
    document.getElementById("findedformationnameprof").innerHTML=searchObj(formationtab[i].professorId, "users").ftname; 
}
function addToInscri(){
    var connectedUser = localStorage.getItem("connected");
    var formationt= localStorage.getItem("displayCourseId");
    var inscriptiontab= JSON.parse(localStorage.getItem("inscriptions") || "[]");

    var inscription = {
        id:generateId(inscriptiontab)+1,
        formationId:formationt,
        userId:connectedUser,
        
    }
    inscriptiontab.push(inscription);
    localStorage.setItem("inscriptions", JSON.stringify(inscriptiontab));
    location.reload();
}

function displayFormation_prof() {
    var connectedUserId= localStorage.getItem("connected");
    var formationtab= JSON.parse(localStorage.getItem("formations") || "[]");
    var cours=[];
    var content="";
    for (var i = 0; i < formationtab.length; i++) {
        if(formationtab[i].professorId==connectedUserId){
            cours.push(formationtab[i]);
        }   
    } 
    
    for (var i = 0; i < cours.length; i++) {
        content=content+`<tr>                                
        <td>${cours[i].id }</td>
        <td>${cours[i].Name }</td>
        <td>${cours[i].price }</td>
        <td>${cours[i].nbheure}</td>
        <td>${cours[i].nbplace}</td>
       <td><input type="submit" class="btn btn-primary btn-pill" value="Display" onclick="displaySinglecourse(${cours[i].id})">
       <input type="submit" class="btn btn-danger btn-pill" onclick="Deletecour_prof(${cours[i].id})"value="Delete">
       <input type="submit" class="btn btn-success btn-pill" onclick="UpdatedFormation(${cours[i].id})" value="Update">
       <input type="submit" class="btn btn-primary btn-pill" value="Test" onclick="professorbutt_Test(${cours[i].id})">
          
       </td>

    </tr>`
    }
    document.getElementById("displayformationprofessor").innerHTML=content;
}
function displayStudent_prof() {
        var connectedUser = localStorage.getItem ('connected');
        var formationsTab = JSON.parse(localStorage.getItem("formations")||"[]");
        var inscriptiontab=JSON.parse(localStorage.getItem("inscriptions")||"[]");
        var allFormation = [];
        var allParticipate = [];
        var content = '';
        for (var i = 0; i < formationsTab.length; i++) {
          if (formationsTab[i].professorId == connectedUser) {
            allFormation.push(formationsTab[i]);
          }
        }
        for (var i = 0; i < allFormation.length; i++) {
          for (var j = 0; j < inscriptiontab.length; j++) {
            if (allFormation[i].id == inscriptiontab[j].formationId) {
                allParticipate.push(inscriptiontab[j]);
            }
          }
        }
        for (var k = 0; k < allParticipate.length; k++) {
          content=content+`<tr> 
          <td>${searchObj(allParticipate[k].userId, "users").id}</td>
          <td>${searchObj (allParticipate[k].userId, 'users').ftname}</td>
          <td> ${allParticipate[k].formationId} </td>
          <td> ${searchObj(allParticipate[k].formationId, 'formations').Name} </td>
          <td> ${searchObj(allParticipate[k].formationId, 'formations').price} </td>
          <td> ${searchObj(allParticipate[k].formationId, 'formations').nbheure}   </td>
          <td> ${searchObj(allParticipate[k].formationId, 'formations').nbplace}   </td>
          <td><input type="submit" class="btn btn-primary btn-pill" value="Feedback" onclick="professoravis(${allParticipate[k].id})">     
          <input type="submit" class="btn btn-primary btn-pill" value="corrigée" onclick="notereponseStudent(${allParticipate[k].id})">   
          <input type="submit" class="btn btn-primary btn-pill" value="Delete" onclick="delete_inscri(${allParticipate[k].id})"> </td>    
    
      </tr>`
          
        }
        
        document.getElementById("displayparticipants_prof").innerHTML=content;
        console.log()
}
function delete_inscri(id) {
    var inscriptiontab=JSON.parse(localStorage.getItem("inscriptions")||"[]");
    for (let i = 0; i < inscriptiontab.length; i++) {
       if(inscriptiontab[i].id=id){
       inscriptiontab.splice(i,1); 
    } 
}
 localStorage.setItem("inscriptions", JSON.stringify(inscriptiontab));
 location.reload();
}
function searchObj(id,key) {

    var T = JSON.parse(localStorage.getItem(key) || "[]");
    var finded;
    for (let i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            finded = T[i];
            break;
        }
    }
    return (finded);
}

function displayAllformation_Admin(){
    var courstab= JSON.parse(localStorage.getItem("formations") || "[]");
    C="";
    for (var i = 0; i < courstab.length; i++) {
        C=C+`<tr>                                
        <td>${courstab[i].id }</td>
        <td>${courstab[i].Name }</td>
        <td>${courstab[i].price }</td>
        <td>${courstab[i].nbheure}</td>
        <td>${courstab[i].nbplace}</td>
        <td><button class= "btn-danger" onclick="Deletecour_Admin(${i})">Delete</button></td>
    </tr>`
    }
    document.getElementById("displayTabAdmincour").innerHTML=C;
    
}
function displayallStudent_Admin() {
    var usertab = JSON.parse(localStorage.getItem("users") || "[]");
    content="";
    for (var i = 0; i < usertab.length; i++) {
        if(usertab[i].role=="Student"){
        content=content+`<tr>
        <td>${usertab[i].id}</td>
        <td>${usertab[i].ftname}</td>
        <td>${usertab[i].ltname} </td>
        <td>${usertab[i].email} </td>
        <td>${usertab[i].telephone}</td>
        <td>${usertab[i].adr}</td>
        <td>${usertab[i].city}</td>
        <td><input type="submit" class="btn btn-primary btn-pill" value="Delete" onclick="DeleteStudent_Admin(${usertab[i].id})">

       
    </tr>`
        }  
    }
  document.getElementById("displayallStudentadmin").innerHTML=content;
}
function DeleteStudent_Admin(id) {
    var userstab= JSON.parse(localStorage.getItem("users") || "[]");
    for (var i = 0; i < userstab.length; i++) {
          if (userstab[i].id==id){
            userstab.splice(i,1);
          }    
    } 
    localStorage.setItem("users", JSON.stringify(userstab));  
    location.reload();    
}
function Deletecour_prof(id) {
    var courstab= JSON.parse(localStorage.getItem("formations") || "[]");
    for (let i = 0; i < courstab.length; i++) {
        if (courstab[i].id==id) {
            courstab.splice(i, 1);  
        }        
    }
    localStorage.setItem("formations", JSON.stringify(courstab));
            location.reload();
}
function UpdatedFormation(id) {
    var content = "";
    var formationtTab = JSON.parse(localStorage.getItem("formations") || "[]");
    for (var i = 0; i < formationtTab.length; i++) {
        
        if (formationtTab[i].id == id) {
            content = content +`<form class="row login_form" >
            <div class="col-md-4" ></div>
            <div class="col-md-4" >
                            <div class=" form-group">
                                <input type="text" class="form-control" id="newcourtName" value=${formationtTab[i].Name} name="">
                            </div>
                             <span id="nameError"></span>
                            <div class="form-group">
                                <input type="text" class="form-control" id="newPrice" value=${formationtTab[i].price} name="">
                            </div>
                          <span id="priceError"></span>
                            <div class="form-group">
                                <input type="text" class="form-control" id="newnbhours" value=${formationtTab[i].nbheure} name="">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="newnbplace" value=${formationtTab[i].nbplace} name="">
                            </div>
                            <span id="stockError"></span>
                        
                            <div class=" form-group">
                            <input type="submit" class="btn btn-success btn-pill" onclick="updateNowCours(${formationtTab[i].id})" value="Update">

                            </div>
                        </div>
                        </form>`
            break;
        }   
}
document.getElementById("Updateformation").innerHTML=content;
}
function updateNowCours(id) {
    var formationtab = JSON.parse (localStorage.getItem ('formations'));
    var newcourName = document.getElementById ('newcourtName').value;
    var NewPrice = document.getElementById ('newPrice').value;
    var newnbhours = document.getElementById ('newnbhours').value;
    var Newnbplace = document.getElementById ('newnbplace').value;
  
    for (var i = 0; i < formationtab.length; i++) {
      if (formationtab[i].id == id) {
        formationtab[i].Name=newcourName;
        formationtab[i].price=NewPrice;
        formationtab[i].nbheure=newnbhours;
        formationtab[i].nbplace=Newnbplace;
       

        localStorage.setItem("formations", JSON.stringify(formationtab));
        location.reload();
      }
    }
}
function Deletecour_Admin(i) {
    var courstab= JSON.parse(localStorage.getItem("formations") || "[]");
    courstab.splice(i, 1);
    localStorage.setItem("formations", JSON.stringify(courstab));
    location.reload();
    console.log();
    
}
function displayallProfessor_Admin() {
    var usertab = JSON.parse(localStorage.getItem("users") || "[]");
    content="";
    for (var i = 0; i < usertab.length; i++) {
        if(usertab[i].role=="Professor"){
        content=content+`<tr>
        <td>${usertab[i].id}</td>
        <td>${usertab[i].ftname}</td>
        <td>${usertab[i].ltname} </td>
        <td>${usertab[i].email} </td>
        <td>${usertab[i].telephone}</td>
        <td>${usertab[i].spec}</td>
        <td>${usertab[i].experience}</td>
        <td><input type="submit" class="btn btn-primary btn-pill" value="Delete" onclick="DeleteProf_Admin(${usertab[i].id})">

       
    </tr>`
        }  
    }
  document.getElementById("displayallProfessortadmin").innerHTML=content;
}
function DeleteProf_Admin(id) {
    var userstab= JSON.parse(localStorage.getItem("users") || "[]");
    for (var i = 0; i < userstab.length; i++) {
          if (userstab[i].id==id){
            userstab.splice(i,1);
          }    
    } 
    localStorage.setItem("users", JSON.stringify(userstab));  
    location.reload();    
}
function Generateheader() {
    connectedUserId= localStorage.getItem("connected");
    connectedUser= searchObj(connectedUserId, "users")
    content="";
    if(connectedUserId){
        if(connectedUser.role=="Student"){
            content=` <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
            
            <li class="nav-item"><a href="courses2.html" class="nav-link">Courses</a></li>
            <li class="nav-item"><a href="teacher2.html" class="nav-link">Teacher</a></li>
            <li class="nav-item"><a href="Student.html" class="nav-link">My cours</a></li>
            <li class="nav-item"><a href="avisProf.html" class="nav-link">Avis My Professor</a></li>
            <li class="nav-item"><a class="nav-link" onclick="logout()">Logout</a></li>
            <li class="nav-item"><a class="nav-link" href="#">${connectedUser.ftname} ${connectedUser.ltname}<br>${connectedUser.role}</a></li>`
        }
        else if(connectedUser.role=="Professor"){
            content=` <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
            
            
            <li class="nav-item"><a href="dashboard.html" class="nav-link">dashbord</a></li>
            <li class="nav-item"><a href="Addformation.html" class="nav-link">Addcours</a></li>

            <li class="nav-item"><a href="avisStudent.html" class="nav-link">Avis My Student</a></li>
            <li class="nav-item"><a class="nav-link" onclick="logout()">Logout</a></li>
            <li class="nav-item"><a class="nav-link" href="#">${connectedUser.ftname} ${connectedUser.ltname}<br>${connectedUser.role}</a></li>`
        }
        else{
            content=` <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
            
            <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
            <li class="nav-item"><a href="teacher2.html" class="nav-link">Teacher</a></li>
            <li class="nav-item"><a href="courses2.html" class="nav-link">Courses</a></li>
            <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
            <li class="nav-item"><a href="event.html" class="nav-link">Events</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            <li class="nav-item"><a href="Admin.html" class="nav-link">Admin</a></li>
            <li class="nav-item"><a class="nav-link" onclick="logout()">Logout</a></li>
            <li class="nav-item"><a class="nav-link" href="#">${connectedUser.ftname} ${connectedUser.ltname}<br>${connectedUser.role}</a></li>`
        }
    }
    else{
        content=` <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
            <li class="nav-item"><a href="courses2.html" class="nav-link">Courses</a></li>
            <li class="nav-item"><a href="teacher2.html" class="nav-link">Teacher</a></li>
            <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
            
            <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            <li class="nav-item"><a href="login.html" class="nav-link">Login</a></li>
            <li><li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="courses.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sign up</a>
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="signupStudent.html">Student</a>
              <a class="dropdown-item" href="signupProf.html">Professor</a>
              <a class="dropdown-item" href="signupAdmin.html">Admin</a>
            </div>

          </li> </li>`
    }

    document.getElementById("HeaderId").innerHTML=content;
}
function logout() {
    localStorage.removeItem("connected");
    location.replace("index.html")
}
function displayformation_Student() {
    var connectedUser = localStorage.getItem ('connected');
        var formationsTab = JSON.parse(localStorage.getItem("formations")||"[]");
        var inscriptiontab=JSON.parse(localStorage.getItem("inscriptions")||"[]");
       var x;
       var notetab=JSON.parse(localStorage.getItem("notes") || "[]");
    
        var Formation = [];
        var Participate = [];
        var content = '';
        for (var i = 0; i < inscriptiontab.length; i++) {
          if (inscriptiontab[i].userId== connectedUser) {
            Participate.push(inscriptiontab[i]);
          }
        }
        for (var i = 0; i < Participate.length; i++) {
          for (var j = 0; j < formationsTab.length; j++) {
            if (Participate[i].formationId == formationsTab[j].id) {
                Formation.push(formationsTab[j]);
            }
          }
        }
       
                
        for (var k = 0; k < Formation.length; k++) {
          content=content+`<tr> 
          <td>${Formation[k].id}</td>
          <td>${Formation[k].Name}</td>
          <td>${searchObj(Formation[k].professorId, "users").id}</td>
          <td>${searchObj(Formation[k].professorId, "users").ftname}</td>
          <td>${Formation[k].price}</td>
          <td>${Formation[k].nbheure}</td>
          
          <td><input type="submit" class="btn btn-primary btn-pill" value="Feedback" onclick="Sendavisbuttonstudent(${Formation[k].id})">
          <input type="submit" class="btn btn-primary btn-pill" value="réponse" onclick="reponse_student(${Formation[k].id})">
      </tr>`


        }
        
        document.getElementById("displayformation_Student1").innerHTML=content;
        console.log()

}
function professoravis(id) {
    var content = "";
    var inscriptiontab=JSON.parse(localStorage.getItem("inscriptions")||"[]");
  
    for (var i = 0; i < inscriptiontab.length; i++) {
     // var inscriptiontab=JSON.parse(localStorage.getItem("inscriptions")||"[]");
      if (inscriptiontab[i].id == id) {
            content = content + `
            
            <form class="row login_form" >
            <div class="col-md-4" ></div>
            <div class="col-md-4" >
           
                            <div class=" form-group">
                            <label for="formGroupExampleInput">mon avi</label>
                                <input type="text" class="form-control" id="avissend" value= 
                                    >
                            </div>
                            
                            <div class="form-group">
                            <label for="formGroupExampleInput">note</label>
                                <input type="text" class="form-control" id="notesend" value= 
                                    >
                            </div>
                            <div class=" form-group">
                                
                                <button class= "btn-success" onclick="sendAvis(${inscriptiontab[i].id})">Send </button>
                            </div>
                        </div>
                        </form>                   
            `
            
        }
    }
    document.getElementById("aviprof").innerHTML = content;
}
function sendAvis(id) {
    
    var myavis=document.getElementById("avissend").value;
    var note=document.getElementById("notesend").value;
    var avisTab = JSON.parse(localStorage.getItem("avis") || "[]" );
    var connectedUserId=localStorage.getItem("connected");
    var inscriptiontab=JSON.parse(localStorage.getItem("inscriptions")||"[]");
    for (var i = 0; i < inscriptiontab.length; i++) {
        if (inscriptiontab[i].id == id) {
    
    var avi  = {
        id:generateId(avisTab)+1,
        myavis:myavis,
        note:note,
        profId:connectedUserId,
        StudentId:inscriptiontab[i].userId,
       
    }
    avisTab.push(avi);
        localStorage.setItem("avis", JSON.stringify(avisTab));
        location.reload();
        console.log(avi); }
}
}
function displayteacher() {
    var usertab = JSON.parse(localStorage.getItem("users") || "[]");
    content="";
    for (var i = 0; i < usertab.length; i++) {
        if(usertab[i].role=="Professor"){
        content=content+`<div class="col-lg-4 mb-sm-4 ftco-animate">
        <div class="staff">
        <div class="d-flex mb-4">
            <div class="img" style="background-image: url(images/person_1.jpg);"></div>
            <div class="info ml-4">
                <h5><a href="teacher-single.html">${usertab[i].ftname} ${usertab[i].ltname}</a></h5>
                <span class="position">${usertab[i].spec}</span>
                <p class="ftco-social d-flex">
            <a href="#" class="d-flex justify-content-center align-items-center"><span class="icon-twitter"></span></a>
            <a href="#" class="d-flex justify-content-center align-items-center"><span class="icon-facebook"></span></a>
            <a href="#" class="d-flex justify-content-center align-items-center"><span class="icon-instagram"></span></a>
          </p>
            </div>
        </div>
        <h5 ><span class="text-info">Experience </span>: ${usertab[i].experience}<h5/>
        <h5><span class="text-info">Email </span> : ${usertab[i].email}<h5/>
       

        <div class="text">
        <h5><span class="text-info">Tel :</span> ${usertab[i].telephone}<h5/>
        
            <p  class="text-seconday">Even the all-powerful Pointing has no control about the blind texts </p>
        </div>
        </div>
    </div>`
        }  
    }
  document.getElementById("displayallteacher").innerHTML=content;
}
function displayavis_prfo() {
    var content = "";
    var avistab=JSON.parse(localStorage.getItem("avis")||"[]");
    connectedUser=localStorage.getItem("connected");
  
    for (var i = 0; i < avistab.length; i++) {
        if(avistab[i].StudentId==connectedUser){
      
      
            content = content +`<div class="col-lg-4 mb-sm-4 ftco-animate" id="professor_avis">
            <div class="staff">
            <div class="d-flex mb-4">
                <div class="img" style="background-image: url(images/person_1.jpg);"></div>
                <div class="info ml-4">
                    <h3><a href="teacher-single.html">${searchObj(avistab[i].profId,"users").ftname}</a></h3>
                    <span class="position">${searchObj(avistab[i].profId,"users").spec}</span>
                    <p class="ftco-social d-flex">
                <a href="#" class="d-flex justify-content-center align-items-center"><span class="icon-twitter"></span></a>
                <a href="#" class="d-flex justify-content-center align-items-center"><span class="icon-facebook"></span></a>
                <a href="#" class="d-flex justify-content-center align-items-center"><span class="icon-instagram"></span></a>
              </p>
                </div>
            </div>
            <h2>Note<h2/>
            <h2>${avistab[i].note}<h2/>
            <h2>Avi<h2/>
            <h2>${avistab[i].myavis}<h2/>
            <div class="text">
                
            </div>
            </div>
        </div>`
    }
}
document.getElementById("professor_avis").innerHTML=content;
}
function sendAvisStudent(id) {
    
    var myavisprof=document.getElementById("avissendprof").value;
    
    
    var connectedUserId=localStorage.getItem("connected");
    var formationtab = JSON.parse(localStorage.getItem("formations") || "[]" );
    for (var i = 0; i < formationtab.length; i++) {
        if (formationtab[i].id == id) {
    
    var avi_student  = {
        id:generateId(formationtab)+1,
        myavisprof:myavisprof,
        connectedStudent:connectedUserId,
        prof_Id:formationtab[i].professorId,   
    }
    var avis_Studenttab = JSON.parse(localStorage.getItem("avisStudent") || "[]" );
    avis_Studenttab.push(avi_student);
        localStorage.setItem("avisStudent", JSON.stringify(avis_Studenttab));
        location.reload();
        console.log(avi_student); }
  }
}
function Sendavisbuttonstudent(id) {
    var content = "";
    var formationtTab=JSON.parse(localStorage.getItem("formations")||"[]");
  
    for (var i = 0; i < formationtTab.length; i++) {
     // var inscriptiontab=JSON.parse(localStorage.getItem("inscriptions")||"[]");
      if (formationtTab[i].id == id) {
            content = content + `
            
            <form class="row login_form" >
            <div class="col-md-4" ></div>
            <div class="col-md-4" >
           
                            <div class=" form-group">
                            <label for="formGroupExampleInput">mon avi</label>
                                <input type="text" class="form-control" id="avissendprof" value="" >
                            </div>

                            
                                <button class= "btn-success" onclick="sendAvisStudent(${formationtTab[i].id})">Send </button>
                            </div>
                        </div>
                        </form>                   
            `
            
        }
    }
    document.getElementById("avi_studentversprof").innerHTML = content;
}
function displayavis_Student() {
    var content = "";
    var avis_Studenttab=JSON.parse(localStorage.getItem("avisStudent")||"[]");
    connectedUser=localStorage.getItem("connected");
  
    for (var i = 0; i < avis_Studenttab.length; i++) {
        
       if(avis_Studenttab[i].prof_Id == connectedUser){
      
      
            content = content +`<div class="col-lg-4 mb-sm-4 ftco-animate" id="student_avis_prof">
            <div class="staff">
            <div class="d-flex mb-4">
                <div class="img" style="background-image: url(images/person_1.jpg);"></div>
                <div class="info ml-4">
                    <h3><a href="teacher-single.html">${searchObj(avis_Studenttab[i].connectedStudent,"users").ftname}</a></h3>
                    <span class="position">${searchObj(avis_Studenttab[i].connectedStudent,"users").ltname}</span>
                    <p class="ftco-social d-flex">
                <a href="#" class="d-flex justify-content-center align-items-center"><span class="icon-twitter"></span></a>
                <a href="#" class="d-flex justify-content-center align-items-center"><span class="icon-facebook"></span></a>
                <a href="#" class="d-flex justify-content-center align-items-center"><span class="icon-instagram"></span></a>
              </p>
                </div>
            </div>
            <div><span class="etoile">★</span></div>
            <h2>Avis :<h2/>
            <h2>${avis_Studenttab[i].myavisprof}<h2/>
            <div class="text">
            
                
            </div>
            </div>
        </div>`
   }
}
document.getElementById("student_avis_prof").innerHTML=content;
}
function professorbutt_Test(id) {
    var content = "";
    var formationtab=JSON.parse(localStorage.getItem("formations")||"[]");
  
    for (var i = 0; i < formationtab.length; i++) {
     
      if (formationtab[i].id == id) {
            content = content + `
            
            <form class="row login_form" >
            <div class="col-md-4" ></div>
            <div class="col-md-4" >
           
                            <div class=" form-group">
                            <label for="formGroupExampleInput">Exercice1</label>
                                <input type="text" class="form-control" id="ex1" value=  >
                            </div>
                            
                            <div class="form-group">
                            <label for="formGroupExampleInput">Exercice2</label>
                                <input type="text" class="form-control" id="ex2" value=  >
                            </div>
                            <div class="form-group">
                            <label for="formGroupExampleInput">Exercice3</label>
                                <input type="text" class="form-control" id="ex3" value=  >
                            </div>
                            <div class=" form-group">
                                
                                <button class= "btn-success" onclick="sendTest_prof(${formationtab[i].id})">Send </button>
                            </div>
                        </div>
                        </form>                   
            `
            
        }
    }
    document.getElementById("test_prof").innerHTML = content;
}
function sendTest_prof(id) {
    var connectedProfId=localStorage.getItem("connected");
    var formationtab = JSON.parse(localStorage.getItem("formations") || "[]" );
    var testtab = JSON.parse(localStorage.getItem("tests") || "[]" );
    var ex1= document.getElementById("ex1").value;
    var ex2= document.getElementById("ex2").value;
    var ex3= document.getElementById("ex3").value;
    for (var i = 0; i < formationtab.length; i++) {
        if (formationtab[i].id == id) {
            var Test = {
                id:generateId(testtab)+1,
                exercice1:ex1,
                exercice2:ex2,
                exercice3:ex3,
                ProfId:connectedProfId,
                formationId:formationtab[i].id,

            }
           
            testtab.push(Test);
                localStorage.setItem("tests", JSON.stringify(testtab));
                location.reload();
                console.log(Test); 
            }

        }
}
function reponse_student(id) {
    content="";
    var testtab = JSON.parse(localStorage.getItem("tests") || "[]" );
    
    for (let i = 0; i < testtab.length; i++) {
        if(testtab[i].formationId ==id){
            content= content + ` <form class="row login_form" >
            <div class="col-md-4" ></div>
            <div class="col-md-4" >
           
                            <div class=" form-group">
                            <label for="formGroupExampleInput">${testtab[i].exercice1}</label>
                                <input type="text" class="form-control" id="rep1" value=  >
                            </div>
                            
                            <div class="form-group">
                            <label for="formGroupExampleInput">${testtab[i].exercice2} </label>
                                <input type="text" class="form-control" id="rep2" value= >
                            </div>
                            <div class="form-group">
                            <label for="formGroupExampleInput">${testtab[i].exercice3}</label>
                                <input type="text" class="form-control" id="rep3" value= >
                            </div>
                            <div class="form-group">
                            <button class= "btn-success" onclick="ajoutereponse_student(${testtab[i].id})">Send </button>
                            </div>
                        </div>
                        </form> `
                        
    }
    
    }
    document.getElementById("reponsetest").innerHTML = content; 
}
function ajoutereponse_student(id) {
    var connectedUser= JSON.parse(localStorage.getItem("connected"));
    var testtab= JSON.parse(localStorage.getItem("tests") || "[]");
    var reponsetab= JSON.parse(localStorage.getItem("reponses") || "[]");
    var inscriptiontab=JSON.parse(localStorage.getItem("inscriptions")||"[]");
    var rep1= document.getElementById("rep1").value;
    var rep2= document.getElementById("rep2").value;
    var rep3= document.getElementById("rep3").value;

    for (let i = 0; i < inscriptiontab.length; i++) {
        if (inscriptiontab[i].formationId==id) {
            var reponse = {
                id:generateId(reponsetab)+1,
                reponse1:rep1,
                reponse2:rep2,
                reponse3:rep3,
                studentId:connectedUser,
                TestId:searchObj(inscriptiontab[i].formationId, "tests").id,
                formationId:inscriptiontab[i].formationId,
                inscrId:inscriptiontab[i].id,

            }
            reponsetab.push(reponse);
                localStorage.setItem("reponses", JSON.stringify(reponsetab));
                location.reload();
                
        }
    }  
    console.log(reponse);
    document.getElementById("reponsestudent").innerHTML=content; 
}
function notereponseStudent(id) {
    content="";

    var reponsetab = JSON.parse(localStorage.getItem("reponses") || "[]" );
    var connectedUser = localStorage.getItem ('connected');

    for (let i = 0; i < reponsetab.length; i++) {
        if(reponsetab[i].inscrId==id){
            content= content + ` <form class="row login_form" >
            <div class="col-md-4" ></div>
            <div class="col-md-4" >
           
            <h3 style="color:blue;">${searchObj(reponsetab[i].TestId, "tests").exercice1}</h3>
            <h4>${reponsetab[i].reponse1}</h4>                    
            <h3 style="color:blue;">${searchObj(reponsetab[i].TestId, "tests").exercice2}</h3>
            <h4>${reponsetab[i].reponse2}</h4>
            <h3 style="color:blue;">${searchObj(reponsetab[i].TestId, "tests").exercice3}</h3>
            <h4>${reponsetab[i].reponse3}</h4>
            <div class="form-group">
                            <label for="formGroupExampleInput">Note</label>
                                <input type="text" class="form-control" id="note_test" value= >
                            </div>
                            <div class="form-group">
                            <button class= "btn-success" onclick="ajouteNOte(${reponsetab[i].id})">Send </button>
                            </div>`    
                            break;                                       
    }

    }
    document.getElementById("reponsetest").innerHTML=content;
}
function ajouteNOte(id) {
    var  reponsetab = JSON.parse(localStorage.getItem("reponses") || "[]" );
    var  notetab = JSON.parse(localStorage.getItem("notes") || "[]" );
    var  connectedUser= JSON.parse(localStorage.getItem("connected"));
    var  note=document.getElementById("note_test").value;

    for (let i = 0; i < reponsetab.length; i++) {
        if (reponsetab[i].id == id) {
    var note ={
        id:generateId(notetab)+1,
        ProfId:connectedUser,
        note:Number(note),
        studentId:reponsetab[i].studentId,
        FormationId:reponsetab[i].formationId,
    }
    notetab.push(note);
    localStorage.setItem("notes", JSON.stringify(notetab));
}   
}
}
function trie_note() {
    var notetab=JSON.parse(localStorage.getItem("notes") || "[]");
    var  connectedUser= JSON.parse(localStorage.getItem("connected"));
    note= [];
    
        var aux;
        C="";
        for (var i = 0; i < notetab.length; i++) {
            if (notetab[i].ProfId==connectedUser) {
                note.push(notetab[i]);
            }
        }


        //     for (var i = 0; i < note.length-1; i++){
        //         for (var j= i+1; j < note.length; j++) {
        //             if(Number(note[i].note) < Number(note[j].note)){
        //               aux=note[i];
        //                 note[i]=note[j];
        //                 note[j]=aux;
        //             }  
        //   }
                
        //     }  
        note.sort((a, b) => {
            return b.note - a.note;
        });
        
        
    
    for (var i = 0; i < note.length; i++) {
        C=C+`<tr> 
        <td>${note[i].studentId}</td>
        <td>${searchObj (note[i].studentId, 'users').ftname}</td>
        <td> ${note[i].ProfId} </td>
        <td> ${searchObj(note[i].ProfId, 'users').ftname} </td>
        <td> ${searchObj(note[i].FormationId, 'formations').Name} </td>
       
        <td> ${note[i].note} </td>    
    </tr>`
        
      }
      
      document.getElementById("displayparnote_student").innerHTML=C;
      console.log(notetab);  
}


    


    








    
    



