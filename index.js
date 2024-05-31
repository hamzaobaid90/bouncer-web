let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a")
window.onscroll = () => {
    section.foreach(sec => {
        let top = window.scrollY;
        let offset = sec.offsettop;
        let height = sec.offsetheight;
        let id = sec.getattaribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active'),
                    {}
            });
        }
    }
    )

}

const clock = document.getElementById("clock")
 setInterval(function(){
    let date = new Date();
    clock.innerHTML=date.toLocaleTimeString();

 },1000)

