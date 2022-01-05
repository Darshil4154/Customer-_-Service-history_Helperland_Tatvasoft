
$(document).ready(function () {
    var table = $("#tblservicehistory").DataTable({
"dom": '<"top">rt<"bottom"flpi><"clear">',
// "bPaginate": false,
"bFilter": false,

"bPaginate":{
  
}, "pagingType": "full_numbers",
"language": {
"paginate": {
"previous": "<",
"next":'>',
"sFirst":'<<',
"sLast":'>>',

}, 
    "zeroRecords": "No Data Found",
    "info": "Total Record: 55",
    "infoEmpty": "No records available",
    "infoFiltered": "(filtered from _MAX_ total records)",
  
}




});

    $('.shows select').selectpicker();
});

