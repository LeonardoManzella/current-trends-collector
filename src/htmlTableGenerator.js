export default function generateTable(arrayOfArrayOfContent) {
    console.group('Calling generateTable');

    //TODO decompose html generator in internal functions: table general wrapper, table row wrapper, table cell wrapper que permitan de primer parametro un array de contenido (json contenido y estilo custom) y de 2do parametro estilos customs 
    //TODO make sure table is responsive
    //TODO make borders a little rounded 
    //TODO make a drawing of the elements if it is really comfortable to read on mobile and PC, small images maximize lateral text space, vertical spacing, less grey background
    let tableToReturn = '<table style="width:100%; background-color:#b2b2b2; font-size: 180%"> <tr style="width:100%; background-color:#b2b2b2;"><td><center><b><big>ESTADO TRANSPORTE</big></b</center></td> </tr> </table> <table style="width:100%; background-color:#b2b2b2; font-size: 140%"> <tr style="width:50%"> <td><center><b><big>Linea</big></b></center></td> <td><center><b><big>Estado</big></b></center></td> </tr> <tr style="width:50%"><td><center><b><big style="background-color:#ff6b6b;">&nbsp;&nbsp;Linea B&nbsp;&nbsp;</big></b></center></td><td><center><b><big>' + 'status_message(data.status_line_b)status_message(data.status_line_b)status_message(data.status_line_b)' + '</big></b></center></td> </tr><tr style="width:50%"><td><center><b><big style="background-color:#4a82f9;">&nbsp;&nbsp;Linea C&nbsp;&nbsp;</big></b></center></td><td><center><b><big>' + 'status_message(data.status_line_c)status_message(data.status_line_c)' + '</big></b></center></td> </tr><tr style="width:50%"><td><center><b><big style="background-color:#13ad53;">&nbsp;&nbsp;Linea D&nbsp;&nbsp;</big></b></center></td><td><center><b><big>' + 'status_message(data.status_line_d)' + '</big></b></center></td> </tr><tr style="width:50%"><td><center><b><big style="background-color:#6acbff;">&nbsp;&nbsp;Linea A&nbsp;&nbsp;</big></b></center></td><td><center><b><big>' + 'status_message(data.status_line_a)' + '</big></b></center></td> </tr><tr style="width:50%"><td><center><b><big style="background-color:#ab5eff;">&nbsp;&nbsp;Linea E&nbsp;&nbsp;</big></b></center></td><td><center><b><big>' + 'status_message(data.status_line_e)' + '</big></b></center></td> </tr><tr style="width:50%"><td><center><b><big style="background-color:#ffee5e;">&nbsp;&nbsp;Linea H&nbsp;&nbsp;</big></b></center></td><td><center><b><big>' + 'status_message(data.status_line_h)' + '</big></b></center></td> </tr><tr style="width:50%"><td><center><b><big style="background-color:#ff993a;">&nbsp;Tren Urq&nbsp;</big></b></center></td><td><center><b><big>' + 'status_message(data.status_urquiza)' + '</big></b></center></td> </tr><tr style="width:50%"><td><center><b><big style="background-color:#eff5ff;">&nbsp;Tren Mitre&nbsp;</big></b></center></td><td><center><b><big>' + 'status_message(data.status_mitre)' + '</big></b></center></td> </tr></table>';
    
    arrayOfArrayOfContent.forEach( arrayOfContent => {
        
    });

    console.groupEnd();
    return tableToReturn;
}