const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

        var mainimg = document.getElementById("mainimg")
            var smallimg = document.getElementsByClassName("small-img")

            smallimg[0].onclick = function(){
                mainimg.src = smallimg[0].src;
                const div = document.querySelector('#description')
                div.innerHTML = "25 points, 6 rebounds, 9 assists—now that's a debut. Step into greatness and commemorate LeBron's arrival to the big stage with this statement-making look. Honoring his roots and daring style of play, the colorway reps Cleveland while flashes of Gold symbolize the kid who would one day become King James. And the light, low-to-the-ground and ultra-cushioned design? It sets you up to stay on top of the next era of hoops.";
                const title = document.querySelector('#title')
                title.innerHTML = "LeBron XX Debut";
                const price = document.querySelector('#price')
                price.innerHTML = "179,99$"
                document.getElementById("reference").value = "My value";
            }

            smallimg[1].onclick = function(){
                mainimg.src = smallimg[1].src;
                const div = document.querySelector('#description')
                div.innerHTML = "Harmony returns with the LeBron 20 “Trinity.” Honoring the King’s Miami reign with the “Big 3,” a Black and University Red colorway reps the history-making squad while flashes of Metallic Gold nod to their 2 championship wins. The light, low-to-the-ground and ultra-cushioned design sets you up with comfort and support—so you can stay on top of today’s frenzied style of play and mark your mark on the next era of hoops.";
                const title = document.querySelector('#title')
                title.innerHTML = "LeBron XX Trinity";
                const price = document.querySelector('#price')
                price.innerHTML = "199,99$"
                document.getElementById("reference").value = "A27308";
            }

            smallimg[2].onclick = function(){
                mainimg.src = smallimg[2].src;
                const div = document.querySelector('#description')
                div.innerHTML = "Generations from now, LeBron’s still-in-the-making mythology and earth-shaking exploits will stand the test of time. The LeBron 20 ASW sports a wavy blue colorway with a reptile-like print and an overall Jurassic-esque theme. Timestamps of Bron’s historical All-Star game experiences throughout the design remind you the King’s indelible footprint on the weekend extravaganza will forever be preserved.";
                const title = document.querySelector('#title')
                title.innerHTML = "LeBron XX ASW";
                const price = document.querySelector('#price')
                price.innerHTML = "169,99$"
                
            }

            smallimg[3].onclick = function(){
                mainimg.src = smallimg[3].src;
                const div = document.querySelector('#description')
                div.innerHTML = "He's clutch. He's an MVP. And he's a champion. LeBron James is 1 of the greatest ever, and still 1 of the best players today after 20 (!) seasons. Celebrate 2 decades of all-star dominance while you show off your game in the LeBron XX (or LeBron 20). They're lightweight and breathable, so you can feel comfortable while working on your drills to competing against your rivals. Zoom Air helps give you that extra bouncy feel while you run, rebound and jump to the final buzzer. It's a milestone in LeBron's signature line, and 1 you won't want to miss to feel confident like The King himself.";
                const title = document.querySelector('#title')
                title.innerHTML = "LeBron XX PlayBoy";
                const price = document.querySelector('#price')
                price.innerHTML = "379,99$"
            }