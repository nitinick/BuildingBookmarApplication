//listner got form submit
document.getElementById('myForm').addEventListener('submit', savebookmark);

function savebookmark(e){
  //get from value
    var siteName=document.getElementById('siteName').value;
    var siteurl=document.getElementById('siteurl').value;
   var bookMark={
     name:siteName,
     url:siteurl
   }

  
  
  
  
   


if(localStorage.getItem('bookmarks')===null){
 var bookmarks=[];

 bookmarks.push(bookMark);

 localStorage.setItem('bookmarks',JSON.stringify(bookmarks));


}
else{
var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
bookmarks.push(bookMark);

localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

fetchbookmarks();
}

 //prevent form from  submitting
 e.preventDefault();
}
//delete bookmaarks

function deleteBookmark(url){

  var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

  for(var i=0;i<=bookmarks.length;i++){



    if(bookmarks[i].url==url){

      bookmarks.splice(i,1);
    }
  }
  //re-set back to loaclstorage
  localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
//refetch bookmarks


}




//fetch bookmarks
function fetchbookmarks(){

  var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

  var bookmarksResults=document.getElementById('bookmarksResults');

  //build output

  bookmarksResults.innerHTML='';
  
  for(var i=0;i<bookmarks.length;i++){


    var name=bookmarks[i].name;
    var url=bookmarks[i].url;


    bookmarksResults.innerHTML +='<div class="well">'+'<h3>'+name+'<a class="btn btn-default" target="_blank" href="'+url+'">visit </a>'+'<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger"  href="#">Delete </a>'+'</h3>'+'</div>';
  }


}