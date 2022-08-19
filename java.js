function savedata(event) {
    event.preventDefault();
    const Amount = document.getElementById('amount').value
    const Descrip = document.getElementById('Descrip').value
    const Category = document.getElementById('cat').value

    const object = {
        Amount,
        Descrip,
        Category,
        
    }
    localStorage.setItem(object.Descrip,JSON.stringify(object));
    localStorage.getItem('Descrip');
    showObject(object);
}
function showObject(user){
    const parentnode = document.getElementById('list');
    const childnode = `<li id=${user.Descrip}> ${user.Amount}--${user.Category}---${user.Descrip}
    <button onclick=deleteInfo('${user.Descrip}')>Delete Info
    <button onclick=EditInfo('${user.Descrip}','${user.Amount}','${user.Category}','${user.Descrip}')>Edit Info`
    parentnode.innerHTML = parentnode.innerHTML + childnode

}
function deleteInfo(Descrip){
    console.log(Descrip);
    localStorage.removeItem(Descrip);
    removeFromS(Descrip)
}
function removeFromS(Descrip){
    const parentnode = document.getElementById('list')
    const CtoD = document.getElementById(Descrip);
    parentnode.removeChild(CtoD);

}
function EditInfo(Amount,Descrip,Category){
    console.log(Descrip)
    document.getElementById('amount').value = Amount
    document.getElementById('Descrip').value = Descrip
    document.getElementById('cat').value = Category
    deleteInfo(Descrip)

}