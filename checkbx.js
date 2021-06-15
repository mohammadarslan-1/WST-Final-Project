// -------- Check Boxes --------

const ChecckAll = document.getElementById('all');
ChecckAll.addEventListener('click', toggle);

function toggle(){
    const isChecked = ChecckAll.checked;

    Array.from(document.getElementsByTagName('input')).forEach(element =>{
        element.checked = isChecked;
    })
}

Array.from(document.querySelectorAll('input:not(#all)')).forEach(element =>{
   element.addEventListener('click', uncheckAll);
});

function uncheckAll(){
    ChecckAll.checked = false;    
}