console.log('loading...');

function Employee(){
  this.name = '';
  this.position = '';
  this.age = '';
  this.address = '';
  this.mail = '';
  this.phone = '';
  this.date = '';
  this.foto = '';
  this.id = '';
}


//--- display Employee info into the DOM
function showEmployee(employee){
  var idNFiled = $('#info-id').text('ID: '+employee.id);
  var namField = $('#name-h1-bold').text(employee.name);
  var posField = $('#position-p').text(employee.position);
  var ageField = $('#td-age').text(employee.age);
  var addField = $('#td-address').text(employee.address);
  var maiField = $('#td-mail').text(employee.mail);
  var phoField = $('#td-phone').text(employee.phone);
  var datField = $('#td-date').text(employee.date);
  var fotField = $('#info-foto-fotoDiv').css('background-image', 'url(pics/'+employee.foto+'.jpg)');
}

function checkValidId(id){
  return !isNaN(id) && parseInt(Number(id)) == id && !isNaN(parseInt(id, 10));
}

function readId(){
  var inputId = $('#search-input');
  var inputIdText = inputId.val();
  if (checkValidId(inputIdText)){
    console.log('valid integer');
  } else {
    alert(inputIdText + 'is not a valid Integer(id).');
  }
}

/*=========================================================================
Code tests
=========================================================================*/ 

var e = new Employee();
e.name = 'Moño';
e.position = 'Coder';
e.age = 28;
e.address = 'My casa es tu casa';
e.mail = 'algo@pupe.com';
e.phone = '3.14159265';
e.date = '28 nov';
e.foto ='1';
e.id = '1';


showEmployee(e);