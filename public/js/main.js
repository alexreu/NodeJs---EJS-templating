$(function () {
    stars();
});

    function stars() {
    $(".stars").each(function () {
        var stars = $(this).data("niveau");
        console.log(stars);
        let affiche_nbetoile ="";
        for (let i=0; i<stars; i++){
            affiche_nbetoile +="<i class='fas fa-star'></i>";
            $(this).html("Niveau:"+ " " + affiche_nbetoile);
        }
    })
}