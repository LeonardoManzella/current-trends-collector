export default function generateTable(arrayOfArrayOfContent) {
    console.group('Calling generateTable');

    //TODO First make the content show correctly without styles, only table wireframe
    //TODO make sure table is responsive
    //TODO make borders a little rounded 
    //TODO make a drawing of the elements if it is really comfortable to read on mobile and PC, small images maximize lateral text space, vertical spacing, less grey background
    //TODO add colors and styles
    let oldTable = `
    <table style="width:100%; background-color:#b2b2b2; font-size: 180%">
    <tr style="width:100%; background-color:#b2b2b2;">
        <td>
            <center><b><big>ESTADO TRANSPORTE</big></b</center>
        </td>
    </tr>
    </table>
    <table style="width:100%; background-color:#b2b2b2; font-size: 140%">
    <tr style="width:50%"> 
        <td>
        <center><b><big>Linea</big></b></center>
        </td>
            <td>
                <center><b><big>Estado</big></b></center>
            </td>
        </tr>
        <tr style="width:50%">
            <td>
                <center><b><big style="background-color:#ff6b6b;">&nbsp;&nbsp;Linea B&nbsp;&nbsp;</big></b></center>
            </td>
            <td>
                <center><b><big>status_message(data.status_line_b)status_message(data.status_line_b)status_message(data.status_line_b)</big></b></center>
            </td>
        </tr>
        <tr style="width:50%">
            <td>
                <center><b><big style="background-color:#4a82f9;">&nbsp;&nbsp;Linea C&nbsp;&nbsp;</big></b></center>
            </td>
            <td>
                <center><b><big>status_message(data.status_line_c)status_message(data.status_line_c)</big></b></center>
            </td>
        </tr>
        <tr style="width:50%">
            <td>
                <center><b><big style="background-color:#13ad53;">&nbsp;&nbsp;Linea D&nbsp;&nbsp;</big></b></center>
            </td>
            <td>
                <center><b><big>status_message(data.status_line_d)</big></b></center>
            </td>
        </tr>
        <tr style="width:50%">
            <td>
                <center><b><big style="background-color:#6acbff;">&nbsp;&nbsp;Linea A&nbsp;&nbsp;</big></b></center>
            </td>
            <td>
                <center><b><big>status_message(data.status_line_a)</big></b></center>
            </td>
        </tr>
        <tr style="width:50%">
            <td>
                <center><b><big style="background-color:#ab5eff;">&nbsp;&nbsp;Linea E&nbsp;&nbsp;</big></b></center>
            </td>
            <td>
                <center><b><big>status_message(data.status_line_e)</big></b></center>
            </td>
        </tr>
        <tr style="width:50%">
            <td>
                <center><b><big style="background-color:#ffee5e;">&nbsp;&nbsp;Linea H&nbsp;&nbsp;</big></b></center>
            </td>
            <td>
                <center><b><big>status_message(data.status_line_h)</big></b></center>
            </td>
        </tr>
        <tr style="width:50%">
            <td>
                <center><b><big style="background-color:#ff993a;">&nbsp;Tren Urq&nbsp;</big></b></center>
            </td>
            <td>
                <center><b><big>status_message(data.status_urquiza)</big></b></center>
            </td>
        </tr>
        <tr style="width:50%">
            <td>
                <center><b><big style="background-color:#eff5ff;">&nbsp;Tren Mitre&nbsp;</big></b></center>
            </td>
            <td>
                <center><b><big>status_message(data.status_mitre)</big></b></center>
            </td>
        </tr>
    </table>
    `;

    let tableToReturn = `
    <div style="margin: 1rem 0;">
    <table style="width:100%; font-size: 210%;">
        <tr style="width:100%">
            <td style="width:100%">
                <center>
                  <b>Tendencias de Google</b>
                </center>
              </td>
        </tr>
    </table>
    <a href="https://www.clarin.com/cultura/murio-artista-plastico-carlos-regazzoni_0_SuCzZt3Kq8.html" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.clarin.com/cultura/murio-artista-plastico-carlos-regazzoni_0_SuCzZt3Kq8.html;source=gmail&amp;ust=1588167207177000&amp;usg=AFQjCNGxEdbF5XuEmmSIiWlg5LUm-Zcg6g" style="text-decoration: none;">
        <table style="width:100%; background-color:#b2b2b2; font-size: 180%">
            <tr style="width:100%">
              <td style="width:20%; height:100%">
                <img
                    style="max-height:5rem !important; margin-left: 0; display: initial"
                  src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFog8vOY3hsAQ2C69X5z_0SnrxmkLfYEsAMWSDGXJxzvjxEuiEZyCgKCwk-YDR6wug1lxFM4Ot"
                />
              </td>
              <td style="width:80%">
                <center>
                  <b>Murió el artista plástico Carlos Regazzoni</b>
                </center>
              </td>
            </tr>
          </table>
          <table style="width:100%; background-color:#b2b2b2; font-size: 140%; margin-bottom:1rem">
            <tr style="width:100%">
              <td style="width:100%">
                Excéntrico, respetado, disruptivo, creador alternativo. Convertía la
                chatarra en obras de arte y, por su trayectoria y personalidad, se había
                convertido en un&nbsp;...
              </td>
            </tr>
          </table>
    </a>
    
    
    <a href="https://www.clarin.com/cultura/murio-artista-plastico-carlos-regazzoni_0_SuCzZt3Kq8.html" title="Open in browser" target="_blank" style="text-decoration: none;">
        <table style="width:100%; background-color:#b2b2b2; font-size: 180%">
            <tr style="width:100%">
              <td style="width:20%; height:100%">
                <img
                    style="max-height:5rem !important; margin-left: 0; display: initial"
                  src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFog8vOY3hsAQ2C69X5z_0SnrxmkLfYEsAMWSDGXJxzvjxEuiEZyCgKCwk-YDR6wug1lxFM4Ot"
                />
              </td>
              <td style="width:80%">
                <center>
                  <b>Murió el artista plástico Carlos Regazzoni</b>
                </center>
              </td>
            </tr>
          </table>
          <table style="width:100%; background-color:#b2b2b2; font-size: 140%; margin-bottom:1rem">
            <tr style="width:100%">
              <td style="width:100%">
                Excéntrico, respetado, disruptivo, creador alternativo. Convertía la
                chatarra en obras de arte y, por su trayectoria y personalidad, se había
                convertido en un&nbsp;...
              </td>
            </tr>
          </table>
    </a>
</div>
        
    `;
    
    arrayOfArrayOfContent.forEach( arrayOfContent => {
        
    });

    console.groupEnd();
    return tableToReturn;
}