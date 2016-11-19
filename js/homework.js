 $(".list").on('click', '.remove', function() {
     $(this).fadeOut(300, function() {
         $(this).parent().fadeOut();
     });
 });

 // var remove = document.getElementsByClassName("remove");
 // for (var i = 0; i < remove.length; i++) {
 //     remove[i].onclick = function() {
 //         var close = this.parentElement;
 //         close.style.transition = "all 1.0s ease-out"
 //         close.style.opacity = 0;
 //         display(close);
 //     }

 //     function display(close) {
 //         //var close = this.parentElement;
 //         sleep(600);
 //         close.style.display = "none";
 //     }

 //     function sleep(milliseconds) {
 //         var start = new Date().getTime();
 //         for (var i = 0; i < 1e7; i++) {
 //             if ((new Date().getTime() - start) > milliseconds) {
 //                 break;
 //             }
 //         }
 //     }
 // }