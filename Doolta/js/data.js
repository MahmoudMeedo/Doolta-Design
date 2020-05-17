
function edit_row(no)
  {

    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="inline";


   var id=document.getElementById("id_row"+no);
   var name=document.getElementById("name_row"+no);
   var type=document.getElementById("type_row"+no);

   var id_data=id.innerHTML;
   var name_data=name.innerHTML;
   var type_data=type.innerHTML;

   id.innerHTML="<input type='text' id='id_text"+no+"' value='"+id_data+"'>";
   name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
   type.innerHTML="<input type='text' id='type_text"+no+"' value='"+type_data+"'>";
  }

  function save_row(no)
  {
   var id_val=document.getElementById("id_text"+no).value;
   var name_val=document.getElementById("name_text"+no).value;
   var type_val=document.getElementById("type_text"+no).value;

   document.getElementById("id_row"+no).innerHTML=id_val;
   document.getElementById("name_row"+no).innerHTML=name_val;
   document.getElementById("type_row"+no).innerHTML=type_val;

   document.getElementById("edit_button"+no).style.display="inline";
   document.getElementById("save_button"+no).style.display="none";

  }

  function delete_row(no)
  {
   document.getElementById("row"+no+"").outerHTML="";
  }

  function add_row() {
   var new_id=document.getElementById("new_id").value,
       new_name=document.getElementById("new_name").value,
       new_type=document.getElementById("new_type").value;

   var table=document.getElementById("data_table"),
       table_len=(table.rows.length)-1,
       row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='id_row"+table_len+"'>"+new_id+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='type_row"+table_len+"'>"+new_type+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='btn btn-primary edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='btn btn-success save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='btn btn-danger delete' onclick='delete_row("+table_len+")'></td></tr>";

   document.getElementById("new_id").value="";
   document.getElementById("new_name").value="";
   document.getElementById("new_type").value="";
}

///////////////////////////////////////
// Sorting Data

var TableSorter = {
    makeSortable: function(table){
        // Store context of this in the object
        var _this = this;
        var th = table.tHead, i;
        th && (th = th.rows[0]) && (th = th.cells);

        if (th){
            i = th.length;
        }else{
            return; // if no `<thead>` then do nothing
        }

        // Loop through every <th> inside the header
        while (--i >= 0) (function (i) {
            var dir = 1;

            // Append click listener to sort
            th[i].addEventListener('click', function () {
                _this._sort(table, i, (dir = 1 - dir));
            });
        }(i));
    },
    _sort: function (table, col, reverse) {
        var tb = table.tBodies[0], // use `<tbody>` to ignore `<thead>` and `<tfoot>` rows
        tr = Array.prototype.slice.call(tb.rows, 0), // put rows into array
        i;

        reverse = -((+reverse) || -1);

        // Sort rows
        tr = tr.sort(function (a, b) {
            // `-1 *` if want opposite order
            return reverse * (
                // Using `.textContent.trim()` for test
                a.cells[col].textContent.trim().localeCompare(
                    b.cells[col].textContent.trim()
                )
            );
        });

        for(i = 0; i < tr.length; ++i){
            // Append rows in new order
            tb.appendChild(tr[i]);
        }
    }
};
window.onload = function(){
    TableSorter.makeSortable(document.getElementById("data_table"));
};
var $sortable = $('.sortable');

$sortable.on('click', function(){

  var $this = $(this);
  var asc = $this.hasClass('asc');
  var desc = $this.hasClass('desc');
  $sortable.removeClass('asc').removeClass('desc');
  if (desc || (!asc && !desc)) {
    $this.addClass('asc');
  } else {
    $this.addClass('desc');
  }

});
