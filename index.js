
  var answer= new Array;
     var right=0;
     var wrong=0;

  function calc(question, answerwer)
     {
      if(answerwer !=answer[question])
      {
      wrong++
        document.getElementById('answer_'+question).innerHTML="&#10060; Wrong!! Correct Ans: "+answer[question]; 
        document.getElementById('answer_'+question).style.color="red";
      document.getElementById(question+''+answerwer).style.color="red";
        document.getElementById('answer_'+question).style.fontWeight="bold";
      
      }
      else
      {
       right++
       document.getElementById('answer_'+question).innerHTML="&#9989; Ans: "+answer[question]+" is Correct";
       document.getElementById('answer_'+question).style.color="green";
     document.getElementById(question+''+answerwer).style.color="green";
       document.getElementById('answer_'+question).style.fontWeight="bold";
     
      }
      disableGroupBtn(question)
     }
     
     
     function disableGroupBtn(group_id)
     {
      var _radioArr = document.getElementsByName("q_"+group_id);
      for(var i = 0;i<_radioArr.length;i++)
      {
      //console.log=("disabled","disabled");
      //console.log=("disabled","disabled");
       _radioArr[i].setAttribute("disabled","disabled");
      }
     }
     function result()
     {
    document.getElementById('right').innerHTML= '<i class="fa fa-check" style="font-size:36px;"></i> Right : ' +right+ '/' +total;
      document.getElementById('right').style.fontWeight="bold";
      document.getElementById('right').style.color="green";
    document.getElementById('wrong').innerHTML= '&#10060; Wrong: ' +wrong+ '/' +total;
      document.getElementById('wrong').style.fontWeight="bold";
      document.getElementById('wrong').style.color="#FF0000";
    const marks=(right*positive-wrong*negative);
    const maxmarks=(total*positive);
    document.getElementById("marks").innerHTML= 'Marks: ' +marks.toFixed(2)+ '/' +maxmarks;
      document.getElementById('marks').style.fontWeight="bold";
      document.getElementById('marks').style.color="blue";
    const perc=(marks/maxmarks)*100;
      document.getElementById("perc").innerHTML= '&#127942; Result: ' +perc.toFixed(2)+"%";
      document.getElementById('perc').style.fontWeight="bold";
      document.getElementById('perc').style.color="purple";
      
    document.getElementById('ri').innerHTML= right+' &#10004;';
      document.getElementById('ri').style.fontWeight="bold";
      document.getElementById('ri').style.color="green";
    document.getElementById('wr').innerHTML= wrong+' &#10006;';
      document.getElementById('wr').style.fontWeight="bold";
      document.getElementById('wr').style.color="orange";
    const att=right+wrong;
    document.getElementById('att').innerHTML= 'A: '+att;
      document.getElementById('att').style.fontWeight="bold";
      document.getElementById('att').style.color="green";
     }
    function sol()
     {
     //solution();
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
     
     }
    
     function res()
     {
     //reset();
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
     window.location.reload(true);
     }



     $(document).ready(function(){
        $("#flip").click(function(){
          $("#res").slideDown("slow");
        });
      });
    
    
      $(document).ready(function(){
        $("#flipsol").click(function(){
          $("#s1").slideDown("slow");
          $("#s2").slideDown("slow");
          $("#s3").slideDown("slow");
          $("#s4").slideDown("slow"); 
          $("#s5").slideDown("slow");
          $("#s6").slideDown("slow"); 
          $("#s7").slideDown("slow");
          $("#s8").slideDown("slow");
          $("#s9").slideDown("slow");
          $("#s10").slideDown("slow");
          $("#s11").slideDown("slow");
          $("#s12").slideDown("slow");
          $("#s13").slideDown("slow");
          $("#s14").slideDown("slow"); 
          $("#s15").slideDown("slow");
          $("#s16").slideDown("slow"); 
          $("#s17").slideDown("slow");
          $("#s18").slideDown("slow");
          $("#s19").slideDown("slow");
          $("#s20").slideDown("slow");
        });
      });