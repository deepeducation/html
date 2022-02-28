
  var answer= new Array;
     var right=0;
     var wrong=0;

  function calc(question, answerwer)
     {
      if(answerwer !=answer[question])
      {
      wrong++
        document.getElementById('answer_'+question).innerHTML="&#10060; Wrong Answer!!"; 
        document.getElementById('answer_'+question).style.color="red";
		    document.getElementById('answer_'+question).style.fontWeight="bold";
        document.getElementById('Op_'+question+answerwer).style.backgroundColor="#e74c3c";
        document.getElementById('Op_'+question+answer[question]).style.backgroundColor="#27ae60";
        document.getElementById('Op_'+question+answerwer).style.color="#fff";
        document.getElementById('Op_'+question+answer[question]).style.color="#fff";
      }
      else
      {
       right++
       document.getElementById('answer_'+question).innerHTML='<i class="fa fa-check" style="font-size:24px;"></i> Correct Answer';
       document.getElementById('answer_'+question).style.color="green";
	     document.getElementById('answer_'+question).style.fontWeight="bold";
       document.getElementById('Op_'+question+answerwer).style.backgroundColor="#27ae60";
       document.getElementById('Op_'+question+answerwer).style.color="#fff";
     
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
    document.getElementById('right').innerHTML= '<i class="fa fa-check" style="font-size:28px;"></i> Right : ' +right+ '/' +total;
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
    function solution()
     {
     //solution();
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
     
     }
    
     function restart()
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
       $("#s21").slideDown("slow");
       $("#s22").slideDown("slow");  
       $("#s23").slideDown("slow");
       $("#s24").slideDown("slow"); 
       $("#s25").slideDown("slow");
       $("#s26").slideDown("slow"); 
       $("#s27").slideDown("slow");
       $("#s28").slideDown("slow");
       $("#s29").slideDown("slow");
       $("#s30").slideDown("slow");
       $("#s31").slideDown("slow");
       $("#s32").slideDown("slow");
       $("#s33").slideDown("slow");
       $("#s34").slideDown("slow"); 
       $("#s35").slideDown("slow");
       $("#s36").slideDown("slow"); 
       $("#s37").slideDown("slow");
       $("#s38").slideDown("slow");
       $("#s39").slideDown("slow");
       $("#s40").slideDown("slow");
       $("#s41").slideDown("slow");
       $("#s42").slideDown("slow");
       $("#s43").slideDown("slow");
       $("#s44").slideDown("slow"); 
       $("#s45").slideDown("slow");
       $("#s46").slideDown("slow"); 
       $("#s47").slideDown("slow");
       $("#s48").slideDown("slow");
       $("#s49").slideDown("slow");
       $("#s50").slideDown("slow");
       $("#s51").slideDown("slow");
       $("#s52").slideDown("slow");
       $("#s53").slideDown("slow");
       $("#s54").slideDown("slow"); 
       $("#s55").slideDown("slow");
       $("#s56").slideDown("slow"); 
       $("#s57").slideDown("slow");
       $("#s58").slideDown("slow");
       $("#s59").slideDown("slow");
       $("#s60").slideDown("slow");
       $("#s61").slideDown("slow");
       $("#s62").slideDown("slow");
       $("#s63").slideDown("slow");
       $("#s64").slideDown("slow"); 
       $("#s65").slideDown("slow");
       $("#s66").slideDown("slow"); 
       $("#s67").slideDown("slow");
       $("#s68").slideDown("slow");
       $("#s69").slideDown("slow");
       $("#s70").slideDown("slow");
       $("#s71").slideDown("slow");
       $("#s72").slideDown("slow");
       $("#s73").slideDown("slow");
       $("#s74").slideDown("slow"); 
       $("#s75").slideDown("slow");
       $("#s76").slideDown("slow"); 
       $("#s77").slideDown("slow");
       $("#s78").slideDown("slow");
       $("#s79").slideDown("slow");
       $("#s80").slideDown("slow");
       $("#s81").slideDown("slow");
       $("#s82").slideDown("slow");
       $("#s83").slideDown("slow");
       $("#s84").slideDown("slow"); 
       $("#s85").slideDown("slow");
       $("#s86").slideDown("slow"); 
       $("#s87").slideDown("slow");
       $("#s88").slideDown("slow");
       $("#s89").slideDown("slow");
       $("#s90").slideDown("slow");
       $("#s91").slideDown("slow");
       $("#s92").slideDown("slow");
       $("#s93").slideDown("slow");
       $("#s94").slideDown("slow"); 
       $("#s95").slideDown("slow");
       $("#s96").slideDown("slow"); 
       $("#s97").slideDown("slow");
       $("#s98").slideDown("slow");
       $("#s99").slideDown("slow");
       $("#s100").slideDown("slow");
        });
      });