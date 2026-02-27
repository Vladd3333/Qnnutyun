
function newFunction(){
    const login = document.getElementById('login');
    const registrar = document.getElementById('registrar');
    login.style.display=login.style.display==='none' ? 'block ': 'none';
    registrar.style.display=registrar.style.display==='none' ? 'block' : 'none';

}
function registrar( event){
    event.preventDefault()
    const username = document.getElementById('username').value;
    const email = document.getElementById('regemail').value;
    const password = document.getElementById('regpassword').value;
    
   if(email && password){
    localStorage.setItem('useremail',email);
    localStorage.setItem('userpassword',password);
   localStorage.setItem('username',username);
   alert('registration sccesfuly');
   newFunction();
   }
    
  else{
    alert('please registration ')
}
}

function login( event){
    event.preventDefault()
     const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const  storigemail = localStorage.getItem('useremail');
    const storigpassword = localStorage.getItem('userpassword');
    

    if(email === storigemail && password === storigpassword){
     document.getElementById('conteniar').style.display='none';
     document.getElementById('dashtbords').style.display='flex';
         
    }else{
        alert('invalit credit ');
    }
}

function Student(id,firstName,lastName,course,major){
  this.id =id;
  this.firstName=firstName;
  this.lastName=lastName;
  this.course=course;
  this.major=major;


   this.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
   };

    this.isSenior = function(){
        return this.course === 4;
    };

    this.getInfo = function(){
        return `${this.getFullName()}-kurs ${this.course},${this.major}`;
    };
}


const students=[
  new Student  (1,'Արամ ','Հարությունյան',2),
 new Student  (2,'Մարիամ','Գրիգորյան',4),
  new Student  (3,'Դավիթ','Սարգսյան',1),
     new Student  (4,'Անահիտ','Մկրտչյան',3),
      new Student  (5,'Նարեկ','Պետրոսյան',1),
       new Student  (6,'Լիլիթ','Հովհաննիսյան',2),
        new Student  (7,'Տիգրան','Կարապետյան',4),
         new Student  (8,'Սոնա','Ավետիսյան',3),
          new Student  (9,'Հայկ','Մանուկյան',2),
           new Student  (10,'Էլինա','Գևորգյան',1)
    
];


function displayStudents(){
    const tbody =document.getElementById('studentsBody');
    tbody.innerHTML = ' ';

    students.forEach(student=>{
        const row =tbody.insertRow();
        row.innerHTML = `
                <td >${student.id}</td>
                <td >${student.firstName}</td>
                <td >${student.lastName}</td>
                <td> <span class="badge badge-${student.course}">${student.course}-րդ կուրս</span></td>
                <td >${student.major}</td>
                <td >
                <button class="course-button" onclick="openEditModal(${student.id})">
                    Ավելացնել
                </button>
                <button class="course-button" onclick="openDeleteModal(${student.id})">
                 Ջնջել
                </button>
            </td>`;
    });
  
}



displayStudents();


const modal = document.getElementById("modal");


function add() {
    modal.style.display = 'block';
}


function closeModal() {
    modal.style.display = 'none';
    clearInputs();
}

function clearInputs() {
    document.getElementById("userIdadd").value = "";
    document.getElementById("firstNameadd").value = "";
    document.getElementById("lastNameadd").value = "";
    document.getElementById("courseadd").value = "";
}


function saveData() {
    const id = document.getElementById("userIdadd").value;
    const fName = document.getElementById("firstNameadd").value;
    const lName = document.getElementById("lastNameadd").value;
    const course = document.getElementById("courseadd").value;


    if (id && fName && lName && course) {
        
        const newStudent = new Student(parseInt(id), fName, lName, parseInt(course), "General");
        
      
        students.push(newStudent);
        
      
        displayStudents();
        
      
        closeModal();
        
        alert("Student added successfully!");
    } else {
        alert("Please fill all fields!");
    }
}


function openEditModal(studentId) {
   
    const student = students.find(s => s.id === studentId);
    
    if (student) {
    
        document.getElementById("editId").value = student.id;
        document.getElementById("editFirstName").value = student.firstName;
        document.getElementById("editLastName").value = student.lastName;
        document.getElementById("editCourse").value = student.course;
        
      
        document.getElementById("editStudentIndex").value = studentId;

        document.getElementById("editModal").style.display = 'block';
    }
}


function closeEditModal() {
    document.getElementById("editModal").style.display = 'none';
}


function updateStudent() {
    const originalId = parseInt(document.getElementById("editStudentIndex").value);
    

    const newId = parseInt(document.getElementById("editId").value);
    const newFName = document.getElementById("editFirstName").value;
    const newLName = document.getElementById("editLastName").value;
    const newCourse = parseInt(document.getElementById("editCourse").value);

   
    const index = students.findIndex(s => s.id === originalId);

    if (index !== -1 && newFName && newLName && newCourse) {
  
        students[index].id = newId;
        students[index].firstName = newFName;
        students[index].lastName = newLName;
        students[index].course = newCourse;

  
        displayStudents();
        
    
        closeEditModal();
        
        alert("Տվյալները հաջողությամբ թարմացվեցին:");
    } else {
        alert("Խնդրում ենք լրացնել բոլոր դաշտերը ճիշտ:");
    }
}



function openDeleteModal(id) {

    document.getElementById("studentIdToDelete").value = id;
    document.getElementById("deleteModal").style.display = 'block';
}


function closeDeleteModal() {
    document.getElementById("deleteModal").style.display = 'none';
}


function confirmDelete() {
    const idToDelete = parseInt(document.getElementById("studentIdToDelete").value);

    const index = students.findIndex(student => student.id === idToDelete);
    
    if (index !== -1) {
        students.splice(index, 1);
        
        displayStudents(); 
        closeDeleteModal(); 
    }
}