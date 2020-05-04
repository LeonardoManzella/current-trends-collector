import format from 'date-fns/format';
const DATE_TIME_FORMAT = 'yyyy-MM-dd';
const DATE_DAY_WEEK_FORMAT = 'i';

const currentDayWeek = () => {
  const currentDay = format(new Date(), DATE_DAY_WEEK_FORMAT);
  console.log("currentDay: ", currentDay);
  const LUNES=1, MARTES=2, MIERCOLES=3, JUEVES=4, VIERNES=5, SABADO=6, DOMINGO=7;

  if(currentDay == LUNES) return "Lunes";
  if(currentDay == MARTES) return "Martes";
  if(currentDay == MIERCOLES) return "Miercoles";
  if(currentDay == JUEVES) return "Jueves";
  if(currentDay == VIERNES) return "Viernes";
  if(currentDay == SABADO) return "Sabado";
  if(currentDay == DOMINGO) return "Domingo";
};

export function generateGoogleTable(argArticles, globalArticles) {
    console.group('Calling generateTable');

    let tableToReturn = generateTableCard(argArticles, "Argentina") + generateTableCard(globalArticles, "USA");
    console.groupEnd();
    return tableToReturn;
}

const generateTableCard = (arrayOfArticles, location) => {
  console.log("Calling generateTableCard. arrayOfArticles: ", arrayOfArticles);
  let sectionToReturn = `
    <div style="margin: 1rem 0; margin-bottom: 2rem;">
      <table style="width:100%;">
          <tr style="width:100%">
              <td style="width:100%">
                  <center>
                    <b style="font-size: 125%;">Tendencias de Google ${location} ::: ${currentDayWeek()} ${format(new Date(), DATE_TIME_FORMAT)}</b>
                  </center>
                </td>
          </tr>
      </table>
      ` +
      generateCardItems(arrayOfArticles)  +
    '</div>';
    
  return sectionToReturn;
};

const generateCardItems = (arrayOfArticles) => {
  console.log("Calling generateCardItems. arrayOfArticles: ", arrayOfArticles);
  let items = '';
  arrayOfArticles.forEach( article => {
    console.debug("article: ", article);
    const FIRST = 0;
    article = article.articles[FIRST];
    items += `
    <div style="background-color:white; border: 2px solid black; border-bottom-left-radius: 0.5rem; border-top-left-radius: 0.5rem; border-left: 12px solid black; margin-bottom:1rem;">
      <table style="width:100%; font-size: 170%; font-family: BlenderProBold,sans-serif !important; text-transform: uppercase; color: white; background-color: #4d7f82;">
        <tr style="width:100%">
          
          ${ article.image && article.image.imageUrl?
            `<td style="width:20%; height:100%">
              <img
                  style="max-height:5rem !important; margin-left: 0; display: initial; border-radius: 0.5rem;"
                src="${article.image.imageUrl}"
              />
            </td>`
            :''
          }
          
          <td style="width: ${ article.image && article.image.imageUrl? `80%`: `100%`}">
            <center>
              <b style="color: white !important; font-family: BlenderProBold,sans-serif !important;">${article.title}</b>
            </center>
          </td>
        </tr>
      </table>
      <table style="width:100%;">
        <tr style="width:100%">
          <td style="width:100%; font-size: 100%; border-bottom: #d2d2d2 0.025rem solid; color: #4d7f82 !important; font-family: BlenderProBold,sans-serif !important; ">
            ${article.snippet}
          </td>
        </tr>
      </table>
      <table style="width:100%;">
        <tr style="width:100%">
          <td style="width:95%; font-size: 60%; overflow:hidden; text-overflow:ellipsis;">
            <a style="color: #4d7f82 !important; font-family: BlenderProBold,sans-serif !important;" href="${article.url}">${article.url}<a/>
            </td>
            <td style="width:5%;">
              <center style="font-size: 100%; color: #4d7f82 !important; font-family: BlenderProBold,sans-serif !important;">❭</center>
            </td>
          </tr>
      </table>
      <table style="width:100%;">
        <tr style="width:100%">
          <td style="width:50%">
            <center style="font-size: 80%; color: #4d7f82 !important; font-family: BlenderProBold,sans-serif !important;">${article.source}</center>
          </td>
          <td style="width:50%">
            <center style="font-size: 80%; color: #4d7f82 !important; font-family: BlenderProBold,sans-serif !important;">${article.timeAgo}</center>
          </td>
        </tr>
      </table>
    </div>
    `;
  });

  return items;
};