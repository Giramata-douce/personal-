window.onscroll = function ()
{
    if(window.scrollY ==0)
    {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        let navLinks =  document.getElementsByClassName("nav-a");
        for (let i=0;i<navLinks.length ;i++){
            navLinks[i].style.color ="white";
        }

    }
    else{
        document.getElementById("navbar").style.backgroundColor = "black";
        let navLinks = document.getElementsByClassName("nav-a");
        for (let i=0;i<navLinks.length ;i++){
            navLinks[i].style.color ="white";
    }
}
}