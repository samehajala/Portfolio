function verifdate() {
    const dateNaissanceInput =document.getElementById("modifDateNaissance").value ; 
    console.log(dateNaissanceInput) ; 
    const dateActuelle = new Date() ; 
    const dateNaissance= new Date(dateNaissanceInput) ; 
    if(dateNaissance>=dateActuelle)
    {
        alert("Attention la date de naissance doit etre dans le passe ") ; 
        return false ; 
    }
    return true ; 
}