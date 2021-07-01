
          var happy = document.getElementById('happy'); 
          var enthusiastic = document.getElementById('enthusiastic'); 
          var sales = document.getElementById('sales'); 
          var proud = document.getElementById('proud');
          var angry = document.getElementById('angry');
          var sad = document.getElementById('sad');
          var unhappy = document.getElementById('unhappy');
          var annoyed = document.getElementById('annoyed');
          var disappointed = document.getElementById('disappointed');
          var frustrated = document.getElementById('frustrated');
          var worried = document.getElementById('worried');
          var bitter = document.getElementById('bitter'); 
          var hurt = document.getElementById('hurt'); 
    
    
          var ctx= new Chart(chart, {
            type: 'radar', 
            data: {
              labels: ['happy', 'enthusiastic', 'optimistic', 'proud', 'angry','sad', 'unhappy', 'annoyed', 'disappointed', 'frustrated', 'worried', 'bitter', 'hurt'], 
              datasets: [{
                label: 'Emotion', 
                data: [happy.value,enthusiastic.value,optimistic.value, proud.value, angry.value, sad.value, unhappy.value, annoyed.value, disappointed.value, frustrated.value, worried.value, bitter.value, hurt.value],
                backgroundColor:"rgba(200,0,0,0.2)", 
                borderColor: "rgba(200,0,0,0.2)", 
              }]
            }, 
            option : {}
          });
          function updatechart(){
            var updateValues = [happy.value,enthusiastic.value,optimistic.value, proud.value, angry.value, sad.value, unhappy.value, annoyed.value, disappointed.value, frustrated.value, worried.value, bitter.value, hurt.value];
            ctx.data.datasets[0].data = updateValues; 
            ctx.update(); 
          }
        