export function generateGoogleTable(argArticles, globalArticles) {
    console.group('Calling generateTable');

    //TODO First make the content show correctly without styles, only table wireframe
    //TODO make borders a little rounded 
    //TODO make a drawing of the elements if it is really comfortable to read on mobile and PC, small images maximize lateral text space, vertical spacing, less grey background
    //TODO add colors and styles

    let tableToReturn = generateTableCard(argArticles, "Argentina") + generateTableCard(globalArticles, "Global");
    console.groupEnd();
    return tableToReturn;
}

const generateTableCard = (arrayOfArticles, location) => {
  let sectionToReturn = `
    <div style="margin: 1rem 0; margin-bottom: 2rem;">
      <table style="width:100%; font-size: 210%;">
          <tr style="width:100%">
              <td style="width:100%">
                  <center>
                    <b>Tendencias de Google ${location}</b>
                  </center>
                </td>
          </tr>
      </table>
      ` +
      generateCardItems(arrayOfArticles)  +
    '</div>';
    
  return sectionToReturn;
};

const generateCardItems = () => {
  let items = '';
  arrayOfArticles.forEach( article => {
      items += `
      <div style="background-color:#b2b2b2;">
        <table style="width:100%; font-size: 180%">
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
        <table style="width:100%; font-size: 140%; margin-bottom:1rem">
          <tr style="width:100%">
            <td style="width:100%">
              Excéntrico, respetado, disruptivo, creador alternativo. Convertía la
              chatarra en obras de arte y, por su trayectoria y personalidad, se había
              convertido en un&nbsp;...
            </td>
          </tr>
          <tr style="width:100%">
            <td>
              https://www.clarin.com/cultura/murio-artista-plastico-carlos-regazzoni_0_SuCzZt3Kq8.html
            </td>
          </tr>
        </table>
      </div>
      `;
  });

  return items;
};