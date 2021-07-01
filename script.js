
          function getDatas(){
            let imput = document.getElementsByName('array[]');
            let formValues = {};

            console.log("data", imput)
            for(let i = 0; i<imput.length; i++){

              formValues[imput[i].id] = imput[i].value
            }
            console.log(formValues)
            let happy = formValues.happy; 
            let enthusiastic = formValues.enthusiastic; 
            let optimistic = formValues.optimistic;
            let proud = formValues.proud;
            let angry = formValues.angry;
            let sad = formValues.sad;
            let unhappy = formValues.unhappy;
            let annoyed = formValues.annoyed;
            let disappointed = formValues.disappointed;
            let frustrated = formValues.frustrated;
            let worried = formValues.worried;
            let bitter = formValues.bitter;
            let hurt = formValues.hurt;
            
            let updateValues = [happy, enthusiastic, optimistic, proud, angry, sad, unhappy, annoyed, disappointed, frustrated, worried, bitter, hurt];
            //console.log(arrayFormValues);
            ctx.data.datasets[0].data = updateValues; 
            ctx.update(); 
        }

        
          
  
        let ctx= new Chart(chart, {
          type: 'radar', 
          data: {
            labels: ['happy', 'enthusiastic', 'optimistic', 'proud', 'angry','sad', 'unhappy', 'annoyed', 'disappointed', 'frustrated', 'worried', 'bitter', 'hurt'], 
            datasets: [{
              label: 'Emotion', 
              // data: [happy.value,enthusiastic.value,optimistic.value, proud.value, angry.value, sad.value, unhappy.value, annoyed.value, disappointed.value, frustrated.value, worried.value, bitter.value, hurt.value],
              data: [happy, enthusiastic, optimistic, proud, angry, sad, unhappy, annoyed, disappointed, frustrated, worried, bitter, hurt],
              backgroundColor:"rgba(80,0,50,0.2)", 
              borderColor: "rgba(80,0,50,0.2)", 
            }]
          }, 
          option : {}
        });
     

















//VERSION WITHOUT SUBMIT BUTTON 
        //   var happy = document.getElementById('happy'); 
        //   var enthusiastic = document.getElementById('enthusiastic'); 
        //   var sales = document.getElementById('sales'); 
        //   var proud = document.getElementById('proud');
        //   var angry = document.getElementById('angry');
        //   var sad = document.getElementById('sad');
        //   var unhappy = document.getElementById('unhappy');
        //   var annoyed = document.getElementById('annoyed');
        //   var disappointed = document.getElementById('disappointed');
        //   var frustrated = document.getElementById('frustrated');
        //   var worried = document.getElementById('worried');
        //   var bitter = document.getElementById('bitter'); 
        //   var hurt = document.getElementById('hurt'); 
    
    
        //   var ctx= new Chart(chart, {
        //     type: 'radar', 
        //     data: {
        //       labels: ['happy', 'enthusiastic', 'optimistic', 'proud', 'angry','sad', 'unhappy', 'annoyed', 'disappointed', 'frustrated', 'worried', 'bitter', 'hurt'], 
        //       datasets: [{
        //         label: 'Emotion', 
        //         data: [happy.value,enthusiastic.value,optimistic.value, proud.value, angry.value, sad.value, unhappy.value, annoyed.value, disappointed.value, frustrated.value, worried.value, bitter.value, hurt.value],
        //         backgroundColor:"rgba(200,0,0,0.2)", 
        //         borderColor: "rgba(200,0,0,0.2)", 
        //       }]
        //     }, 
        //     option : {}
        //   });
        //   function updatechart(){
        //     var updateValues = [happy.value,enthusiastic.value,optimistic.value, proud.value, angry.value, sad.value, unhappy.value, annoyed.value, disappointed.value, frustrated.value, worried.value, bitter.value, hurt.value];
        //     ctx.data.datasets[0].data = updateValues; 
        //     ctx.update(); 
        //   }
        