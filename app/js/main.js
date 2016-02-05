 
/*===== bpopup =====*/
 $('#show-popup').on('click', function(e) {
        e.preventDefault();
$('#add-project').bPopup({
       modalClose: false,
       opacity: 0.6,
       positionStyle: 'fixed',
       transition: 'slideDown',
       speed: 500
    });
 });
/*===== end bpopup =====*/



/*===== input file name =====*/
function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("project-file-name");
    uploaded.innerHTML = filename;
}
/*===== end input file name =====*/