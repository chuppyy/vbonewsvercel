// check width
$(document).ready(function () {
    console.log("xxx", window.innerWidth)
    if (window.innerWidth <= 500) {
            // var scriptB = document.createElement('script');
            //     scriptB.setAttribute('async', '');
            //     scriptB.setAttribute('src', 'https://aj1559.online/ba298f04.js');
            //     var insB = document.createElement('ins');
            //     insB.setAttribute('class', '982a9496');
            //     insB.setAttribute('data-key', '2158d29443c3556687a65d9107f4235a');              
            //     var div = document.getElementById('qcdt');
            //     if(div){
            //         div.appendChild(insB);
            //         div.appendChild(scriptB);  
            //     }
                

            //Quang cao video
            var qcvideo = document.getElementById('qcvideo');
            if(qcvideo){
                var scriptVideo = document.createElement('script');
                scriptVideo.setAttribute('async', '');
                scriptVideo.setAttribute('src', 'https://aj1559.online/ba298f04.js');
                var insGVideo = document.createElement('ins');
                insGVideo.setAttribute('class', '982a9496');
                insGVideo.setAttribute('data-key', '657106d81ed4a4976e90850c417943e1');     
               
                qcvideo.appendChild(insGVideo);
                qcvideo.appendChild(scriptVideo);
            }
                // Giua bai
            
            var divg2 = document.getElementById('qcgb2');
            if(divg2){
                var scriptG2 = document.createElement('script');
                scriptG2.setAttribute('async', '');
                scriptG2.setAttribute('src', 'https://aj1559.online/ba298f04.js');
                var insG2 = document.createElement('ins');
                insG2.setAttribute('class', '982a9496');
                insG2.setAttribute('data-key', '1cfe3810ff9d35f26d47e70d2435d349');     
               
                divg2.appendChild(insG2);
                divg2.appendChild(scriptG2);
            }
            //tamk
            var divg = document.getElementById('qcgb');
            if(divg){
                var scriptG = document.createElement('script');
                scriptG.setAttribute('async', '');
                scriptG.setAttribute('src', 'https://aj1559.online/ba298f04.js');
                var insG = document.createElement('ins');
                insG.setAttribute('class', '982a9496');
                insG.setAttribute('data-key', 'd8340c50926340f407f3015976104293');              
                
                divg.appendChild(insG);
                divg.appendChild(scriptG);
            }
            

                
                
    }
    //Destop
    else {  
            // Chèn đoạn mã script A cho máy tính
            // var scriptA = document.createElement('script');
            // scriptA.setAttribute('async', '');
            // scriptA.setAttribute('src', 'https://aj1559.online/ba298f04.js');

            // var insA = document.createElement('ins');
            // insA.setAttribute('class', '982a9496');
            // insA.setAttribute('data-key', '77e2c423c75266dcfa77e0c8912bf224');
            // var div = document.getElementById('qcdt');
            // div.appendChild(insA);
            // div.appendChild(scriptA);


            // Giua bai
            var divg = document.getElementById('qcgb');
            if(divg){
                var scriptG = document.createElement('script');
                scriptG.setAttribute('async', '');
                scriptG.setAttribute('src', 'https://aj1559.online/ba298f04.js');
                var insG = document.createElement('ins');
                insG.setAttribute('class', '982a9496');
                insG.setAttribute('data-key', '0cef9f0b7852a30d4994d392bc03ee0e');              
                
                divg.appendChild(insG);
                divg.appendChild(scriptG);
            }
            var divg2 = document.getElementById('qcgb2');
            if(divg2){
                var scriptG2 = document.createElement('script');
                scriptG2.setAttribute('async', '');
                scriptG2.setAttribute('src', 'https://aj1559.online/ba298f04.js');
                var insG2 = document.createElement('ins');
                insG2.setAttribute('class', '982a9496');
                insG2.setAttribute('data-key', '0cef9f0b7852a30d4994d392bc03ee0e');     
                
                divg2.appendChild(insG2);
                divg2.appendChild(scriptG2);
            }

            
    }
});