function showsign-inModal(){
    var modal = document.getElementById("sign-in-modal");
    modal.style.display = "flex";
  }
  
  function hidesign-inModal(){
    var modal = document.getElementById("sign-in-modal");
    modal.style.display = "none";
  }
  
  function showSignUpModal(){
    var modal = document.getElementById("sign-up-modal");
    modal.style.display = "flex";
  }
  
  function hideSignUpModal(){
    var modal = document.getElementById("sign-up-modal");
    modal.style.display = "none";
  }
function editComment(){
  
}
function incrementCounter(){
  var cntr = document.getElementById('counterLikedBy');
  var val = parseInt(cntr.innerText);
  cntr.innerText = val+1;

}

function toggleEditSave(){
  var toggleSave = '<button class="postEdit">Save '+
  '<i style="font-size: 14px;font-weight: bolder;" '+
  'class="fa fa-save" aria-hidden="true"></i>'+
  '</button>';
  var toggleEdit = '<button class="postEdit">Edit '+
  '<i style="font-size: 14px;font-weight: bolder;" '+
  'class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
  '</button>';

  var edtSaveBtn = document.getElementById('editPost');
  var toDo = (edtSaveBtn.innerText).toString().trim();
  console.log(toDo);
  console.log(toDo.localeCompare('Edit'));
  if(toDo.localeCompare('Edit')===0){
    console.log("Currently Edit");
    var bSave = document.getElementById('editPost');
    bSave.innerHTML = toggleSave;
    enableEditableText();

  }
  else{
    console.log("Currently Save");
    var bEdit = document.getElementById('editPost');
    bEdit.innerHTML = toggleEdit;
    updateEditedBlog();
  }

}

function enableEditableText(){
  var getBlogContentEle = document.getElementById('blog-body');
  var getBlogContent = getBlogContentEle.innerText;

  //Div element
  var getDiv = document.getElementById('blog-bodyId');
  //Create a input element
  var inputElement = '<textarea class="txtBlog" id="txtEditedBlog" rows="10" cols="220">'+
  getBlogContent+
  '</textarea>'
  //Update the Div element
  getDiv.innerHTML = inputElement;
}
function updateEditedBlog(){
  var editedBlog = document.getElementById('txtEditedBlog');

  var textEdited = (editedBlog.innerHTML).toString();
  
  var pElement = '<p id="blog-body">'+
  textEdited+
  '</p>';
  var getDiv = document.getElementById('blog-bodyId');
  getDiv.innerHTML=pElement;

}
function addComment(){
  console.log("Inside add comment");
  var x = document.getElementById("txtCommentCommentPost").addEventListener("onchange", function(){
    document.getElementById("txtCommentCommentPost").innerHTML;
  });

  var x = document.getElementById("txtCommentCommentPost").value;
  
  console.log(x);
  var pElement = '<p >'+ x + '</p>';
  var getDiv = document.getElementById('listAllComments');
  getDiv.innerHTML = pElement + getDiv.innerHTML;
}
