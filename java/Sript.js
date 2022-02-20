function doGet(e) {
    return ManageSheet(e);
  }
  function doPost(e) {
    return ManageSheet(e);
  }
  
  function ManageSheet(e) {
  
    //READ ALL RECORDS
    
    if ( e.parameter.func == "ReadAll") {
      var ss = SpreadsheetApp.getActive();
      var sh = ss.getSheets()[parseInt(e.parameter.SN)-1]; 
      var rg = sh.getDataRange().getValues(); 
      var outString = '';
        for(var row=0 ; row<rg.length ; ++row){
          outString += rg[row].join(',') + ';';  
        } 
      return ContentService.createTextOutput(outString).setMimeType(ContentService.MimeType.TEXT);
    }
    
    
      
     //DELETE SINGLE RECORD
     
     else if (e.parameter.func == "Delete") {
      var record = e.parameter.id;
      var ss = SpreadsheetApp.getActive();
      var sh = ss.getSheets()[parseInt(e.parameter.SN)-1];
      sh.deleteRow(parseInt(record) + 1);  
      return ContentService.createTextOutput("true");  
   } 
   
   
    //READ SINGLE RECORD
     else if ( e.parameter.func == "ReadRecord") {
      var ss = SpreadsheetApp.getActive();
      var sh = ss.getSheets()[parseInt(e.parameter.SN)-1];
      var rg = sh.getDataRange().getValues();
      var outString = '';
      outString += rg[parseInt(e.parameter.id)].join(', ');
      return ContentService.createTextOutput(outString).setMimeType(ContentService.MimeType.TEXT);
    } 
    
    
    
    //UPDATE SNNGLE RECORD Specify PoSNtion
    
     else if (e.parameter.func == "UpdateSP") { 
      var ss = SpreadsheetApp.getActive();
      var sh = ss.getSheets()[parseInt(e.parameter.SN)-1];
      var data = [ [ e.parameter.UpdateRecord ] ]; 
       sh.getRange((e.parameter.CN)+(parseInt(e.parameter.id)+1)).setValues(data); 
      return ContentService.createTextOutput("true");
    }
    
    
    
    //Do not changed any parameters, because this is new script. for more information please watch this video:- https://youtu.be/dB-cfsbGbLg
    
    //CREATE NEW RECORD  
    if (e.parameter.func == "Create") {
      
      var ss = SpreadsheetApp.getActive();
      
      var sh = ss.getSheets()[parseInt(e.parameter.SN)-1];
      
      var data =[e.parameter.A, e.parameter.B, e.parameter.C, e.parameter.D, e.parameter.E, e.parameter.F, e.parameter.G, e.parameter.H, e.parameter.I, e.parameter.J, e.parameter.K, e.parameter.L, e.parameter.M, e.parameter.N, e.parameter.O, e.parameter.P,e.parameter.Q, e.parameter.R, e.parameter.S, e.parameter.T, e.parameter.U, e.parameter.V, e.parameter.W, e.parameter.X, e.parameter.Y, e.parameter.Z]; 
      
      sh.appendRow(data);
      
      return ContentService.createTextOutput(data);
    
    }
    
  
  
    
  }