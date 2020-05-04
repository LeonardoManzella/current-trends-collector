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

    let tableToReturn = cssLibrary() + generateTableCard(argArticles, "Argentina") + generateTableCard(globalArticles, "USA");
    console.groupEnd();
    return tableToReturn;
}

const cssLibrary = () => {
  return `
  <style type="text/css">
  /*
  augmented-ui
  BSD 2-Clause License
  Copyright (c) James0x57, PropJockey, 2019
  */
  [augmented-ui~="exe-init"],
  [augmented-ui~="exe"],
  [augmented-ui~="exe-lite"],
  [augmented-ui~="before"],
  [augmented-ui~="after"] {
    --aug-tl: 0px;
    --aug-tl-width: initial;
    --aug-tl-height: initial;
    --aug-_TlWidth: initial;
    --aug-_TlHeight: initial;
    --aug-_TlJoinBX: initial;
    --aug-_TlJoinBY: initial;
    --aug-_TlJoinRX: initial;
    --aug-_TlJoinRY: initial;
    --aug-_TlPath: initial;
    --aug-_TlInset1JoinBX: initial;
    --aug-_TlInset1JoinBY: initial;
    --aug-_TlInset1JoinRX: initial;
    --aug-_TlInset1JoinRY: initial;
    --aug-_TlPathInset1: initial;
    --aug-_TlInset2JoinBX: initial;
    --aug-_TlInset2JoinBY: initial;
    --aug-_TlInset2JoinRX: initial;
    --aug-_TlInset2JoinRY: initial;
    --aug-_TlPathInset2: initial;
    --aug-tr: 0px;
    --aug-tr-width: initial;
    --aug-tr-height: initial;
    --aug-_TrWidth: initial;
    --aug-_TrHeight: initial;
    --aug-_TrJoinLX: initial;
    --aug-_TrJoinLY: initial;
    --aug-_TrJoinBX: initial;
    --aug-_TrJoinBY: initial;
    --aug-_TrPath: initial;
    --aug-_TrInset1JoinLX: initial;
    --aug-_TrInset1JoinLY: initial;
    --aug-_TrInset1JoinBX: initial;
    --aug-_TrInset1JoinBY: initial;
    --aug-_TrPathInset1: initial;
    --aug-_TrInset2JoinLX: initial;
    --aug-_TrInset2JoinLY: initial;
    --aug-_TrInset2JoinBX: initial;
    --aug-_TrInset2JoinBY: initial;
    --aug-_TrPathInset2: initial;
    --aug-br: 0px;
    --aug-br-width: initial;
    --aug-br-height: initial;
    --aug-_BrWidth: initial;
    --aug-_BrHeight: initial;
    --aug-_BrJoinTX: initial;
    --aug-_BrJoinTY: initial;
    --aug-_BrJoinLX: initial;
    --aug-_BrJoinLY: initial;
    --aug-_BrPath: initial;
    --aug-_BrInset1JoinTX: initial;
    --aug-_BrInset1JoinTY: initial;
    --aug-_BrInset1JoinLX: initial;
    --aug-_BrInset1JoinLY: initial;
    --aug-_BrPathInset1: initial;
    --aug-_BrInset2JoinTX: initial;
    --aug-_BrInset2JoinTY: initial;
    --aug-_BrInset2JoinLX: initial;
    --aug-_BrInset2JoinLY: initial;
    --aug-_BrPathInset2: initial;
    --aug-bl: 0px;
    --aug-bl-width: initial;
    --aug-bl-height: initial;
    --aug-_BlWidth: initial;
    --aug-_BlHeight: initial;
    --aug-_BlJoinRX: initial;
    --aug-_BlJoinRY: initial;
    --aug-_BlJoinTX: initial;
    --aug-_BlJoinTY: initial;
    --aug-_BlPath: initial;
    --aug-_BlInset1JoinRX: initial;
    --aug-_BlInset1JoinRY: initial;
    --aug-_BlInset1JoinTX: initial;
    --aug-_BlInset1JoinTY: initial;
    --aug-_BlPathInset1: initial;
    --aug-_BlInset2JoinRX: initial;
    --aug-_BlInset2JoinRY: initial;
    --aug-_BlInset2JoinTX: initial;
    --aug-_BlInset2JoinTY: initial;
    --aug-_BlPathInset2: initial;
    --aug-t: 0px;
    --aug-t-width: initial;
    --aug-t-height: initial;
    --aug-t-origin-x: initial;
    --aug-t-offset: initial;
    --aug-_TWidth: initial;
    --aug-_THeight: initial;
    --aug-_TPath: initial;
    --aug-_TPathInset1: initial;
    --aug-_TPathInset2: initial;
    --aug-r: 0px;
    --aug-r-width: initial;
    --aug-r-height: initial;
    --aug-r-origin-y: initial;
    --aug-r-offset: initial;
    --aug-_RWidth: initial;
    --aug-_RHeight: initial;
    --aug-_RPath: initial;
    --aug-_RPathInset1: initial;
    --aug-_RPathInset2: initial;
    --aug-b: 0px;
    --aug-b-width: initial;
    --aug-b-height: initial;
    --aug-b-origin-x: initial;
    --aug-b-offset: initial;
    --aug-_BWidth: initial;
    --aug-_BHeight: initial;
    --aug-_BPath: initial;
    --aug-_BPathInset1: initial;
    --aug-_BPathInset2: initial;
    --aug-l: 0px;
    --aug-l-width: initial;
    --aug-l-height: initial;
    --aug-l-origin-y: initial;
    --aug-l-offset: initial;
    --aug-_LWidth: initial;
    --aug-_LHeight: initial;
    --aug-_LPath: initial;
    --aug-_LPathInset1: initial;
    --aug-_LPathInset2: initial;
  }

  [augmented-ui~="tl-clip"],
  [augmented-ui~="tl-clip"] > [augmented-ui~="tl-inherit"] {
    --aug-tl: 15px; /* clip size */
    --aug-_TlWidth: var(--aug-tl-width, var(--aug-tl));
    --aug-_TlHeight: var(--aug-tl-height, var(--aug-tl));
    --aug-_TlJoinBX: 0px;
    --aug-_TlJoinBY: var(--aug-_TlHeight);
    --aug-_TlJoinRX: var(--aug-_TlWidth);
    --aug-_TlJoinRY: 0px;
    --aug-_TlPath: var(--aug-_TlJoinBX) var(--aug-_TlJoinBY), var(--aug-_TlJoinRX) var(--aug-_TlJoinRY);

    --aug-_TlInset1JoinBX: var(--aug-_W);
    --aug-_TlInset1JoinBY: calc(var(--aug-_TlHeight) + var(--aug-_W) / 2);
    --aug-_TlInset1JoinRX: calc(var(--aug-_TlWidth) + var(--aug-_W) / 2);
    --aug-_TlInset1JoinRY: var(--aug-_W);
    --aug-_TlPathInset1: var(--aug-_TlInset1JoinBX) var(--aug-_TlInset1JoinBY), var(--aug-_TlInset1JoinRX) var(--aug-_TlInset1JoinRY);

    --aug-_TlInset2JoinBX: var(--aug-_WD);
    --aug-_TlInset2JoinBY: calc(var(--aug-_TlHeight) + var(--aug-_WD) / 2);
    --aug-_TlInset2JoinRX: calc(var(--aug-_TlWidth) + var(--aug-_WD) / 2);
    --aug-_TlInset2JoinRY: var(--aug-_WD);
    --aug-_TlPathInset2: var(--aug-_TlInset2JoinBX) var(--aug-_TlInset2JoinBY), var(--aug-_TlInset2JoinRX) var(--aug-_TlInset2JoinRY);
  }
  [augmented-ui~="tr-clip"],
  [augmented-ui~="tr-clip"] > [augmented-ui~="tr-inherit"] {
    --aug-tr: 15px; /* clip size */
    --aug-_TrWidth: var(--aug-tr-width, var(--aug-tr));
    --aug-_TrHeight: var(--aug-tr-height, var(--aug-tr));
    --aug-_TrJoinLX: calc(100% - var(--aug-_TrWidth));
    --aug-_TrJoinLY: 0px;
    --aug-_TrJoinBX: 100%;
    --aug-_TrJoinBY: var(--aug-_TrHeight);
    --aug-_TrPath: var(--aug-_TrJoinLX) var(--aug-_TrJoinLY), var(--aug-_TrJoinBX) var(--aug-_TrJoinBY);

    --aug-_TrInset1JoinLX: calc(100% - (var(--aug-_TrWidth) + var(--aug-_W) / 2));
    --aug-_TrInset1JoinLY: var(--aug-_W);
    --aug-_TrInset1JoinBX: calc(100% - var(--aug-_W));
    --aug-_TrInset1JoinBY: calc(var(--aug-_TrHeight) + var(--aug-_W) / 2);
    --aug-_TrPathInset1: var(--aug-_TrInset1JoinLX) var(--aug-_TrInset1JoinLY), var(--aug-_TrInset1JoinBX) var(--aug-_TrInset1JoinBY);

    --aug-_TrInset2JoinLX: calc(100% - (var(--aug-_TrWidth) + var(--aug-_WD) / 2));
    --aug-_TrInset2JoinLY: var(--aug-_WD);
    --aug-_TrInset2JoinBX: calc(100% - var(--aug-_WD));
    --aug-_TrInset2JoinBY: calc(var(--aug-_TrHeight) + var(--aug-_WD) / 2);
    --aug-_TrPathInset2: var(--aug-_TrInset2JoinLX) var(--aug-_TrInset2JoinLY), var(--aug-_TrInset2JoinBX) var(--aug-_TrInset2JoinBY);
  }
  [augmented-ui~="br-clip"],
  [augmented-ui~="br-clip"] > [augmented-ui~="br-inherit"] {
    --aug-br: 15px; /* clip size */
    --aug-_BrWidth: var(--aug-br-width, var(--aug-br));
    --aug-_BrHeight: var(--aug-br-height, var(--aug-br));
    --aug-_BrJoinTX: 100%;
    --aug-_BrJoinTY: calc(100% - var(--aug-_BrHeight));
    --aug-_BrJoinLX: calc(100% - var(--aug-_BrWidth));
    --aug-_BrJoinLY: 100%;
    --aug-_BrPath: var(--aug-_BrJoinTX) var(--aug-_BrJoinTY), var(--aug-_BrJoinLX) var(--aug-_BrJoinLY);

    --aug-_BrInset1JoinTX: calc(100% - var(--aug-_W));
    --aug-_BrInset1JoinTY: calc(100% - (var(--aug-_BrHeight) + var(--aug-_W) / 2));
    --aug-_BrInset1JoinLX: calc(100% - (var(--aug-_BrWidth) + var(--aug-_W) / 2));
    --aug-_BrInset1JoinLY: calc(100% - var(--aug-_W));
    --aug-_BrPathInset1: var(--aug-_BrInset1JoinTX) var(--aug-_BrInset1JoinTY), var(--aug-_BrInset1JoinLX) var(--aug-_BrInset1JoinLY);

    --aug-_BrInset2JoinTX: calc(100% - var(--aug-_WD));
    --aug-_BrInset2JoinTY: calc(100% - (var(--aug-_BrHeight) + var(--aug-_WD) / 2));
    --aug-_BrInset2JoinLX: calc(100% - (var(--aug-_BrWidth) + var(--aug-_WD) / 2));
    --aug-_BrInset2JoinLY: calc(100% - var(--aug-_WD));
    --aug-_BrPathInset2: var(--aug-_BrInset2JoinTX) var(--aug-_BrInset2JoinTY), var(--aug-_BrInset2JoinLX) var(--aug-_BrInset2JoinLY);
  }
  [augmented-ui~="bl-clip"],
  [augmented-ui~="bl-clip"] > [augmented-ui~="bl-inherit"] {
    --aug-bl: 15px; /* clip size */
    --aug-_BlWidth: var(--aug-bl-width, var(--aug-bl));
    --aug-_BlHeight: var(--aug-bl-height, var(--aug-bl));
    --aug-_BlJoinRX: var(--aug-_BlWidth);
    --aug-_BlJoinRY: 100%;
    --aug-_BlJoinTX: 0px;
    --aug-_BlJoinTY: calc(100% - var(--aug-_BlHeight));
    --aug-_BlPath: var(--aug-_BlJoinRX) var(--aug-_BlJoinRY), var(--aug-_BlJoinTX) var(--aug-_BlJoinTY);

    --aug-_BlInset1JoinRX: calc(var(--aug-_BlWidth) + var(--aug-_W) / 2);
    --aug-_BlInset1JoinRY: calc(100% - var(--aug-_W));
    --aug-_BlInset1JoinTX: var(--aug-_W);
    --aug-_BlInset1JoinTY: calc(100% - (var(--aug-_BlHeight) + var(--aug-_W) / 2));
    --aug-_BlPathInset1: var(--aug-_BlInset1JoinRX) var(--aug-_BlInset1JoinRY), var(--aug-_BlInset1JoinTX) var(--aug-_BlInset1JoinTY);

    --aug-_BlInset2JoinRX: calc(var(--aug-_BlWidth) + var(--aug-_WD) / 2);
    --aug-_BlInset2JoinRY: calc(100% - var(--aug-_WD));
    --aug-_BlInset2JoinTX: var(--aug-_WD);
    --aug-_BlInset2JoinTY: calc(100% - (var(--aug-_BlHeight) + var(--aug-_WD) / 2));
    --aug-_BlPathInset2: var(--aug-_BlInset2JoinRX) var(--aug-_BlInset2JoinRY), var(--aug-_BlInset2JoinTX) var(--aug-_BlInset2JoinTY);
  }
  [augmented-ui~="t-clip"],
  [augmented-ui~="t-clip"] > [augmented-ui~="t-inherit"] {
    --aug-t: 15px; /* clip depth */
    --aug-_TWidth: var(--aug-t-width, calc(var(--aug-t) * 2));
    --aug-_THeight: var(--aug-t-height, var(--aug-t));
    --aug-_TOriginX: calc(var(--aug-t-origin-x, calc(var(--aug-_TlJoinRX, 0px) / 2 + var(--aug-_TrJoinLX, 100%) / 2)) + var(--aug-t-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_TPath: , calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2) 0px,
                    var(--aug-_TOriginX) var(--aug-_THeight),
                    calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2) 0px;

    --aug-_TPathInset1: , calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_W) / 2) var(--aug-_W),
                        var(--aug-_TOriginX) calc(var(--aug-_THeight) + var(--aug-_W) * 1.5),
                        calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_W) / 2) var(--aug-_W);

    --aug-_TPathInset2: , calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_WD) / 2) var(--aug-_WD),
                        var(--aug-_TOriginX) calc(var(--aug-_THeight) + var(--aug-_WD) * 1.5),
                        calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_WD) / 2) var(--aug-_WD);
  }
  [augmented-ui~="r-clip"],
  [augmented-ui~="r-clip"] > [augmented-ui~="r-inherit"] {
    --aug-r: 15px; /* clip depth */
    --aug-_RWidth: var(--aug-r-width, var(--aug-r));
    --aug-_RHeight: var(--aug-r-height, calc(var(--aug-r) * 2));
    --aug-_ROriginY: calc(var(--aug-r-origin-y, calc(var(--aug-_TrJoinBY, 0px) / 2 + var(--aug-_BrJoinTY, 100%) / 2)) + var(--aug-r-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_RPath: , 100% calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2),
                    calc(100% - var(--aug-_RWidth)) var(--aug-_ROriginY),
                    100% calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2);

    --aug-_RPathInset1: , calc(100% - var(--aug-_W)) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_W) / 2),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_W) * 1.5)) var(--aug-_ROriginY),
                          calc(100% - var(--aug-_W)) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_W) / 2);

    --aug-_RPathInset2: , calc(100% - var(--aug-_WD)) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_WD) / 2),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_WD) * 1.5)) var(--aug-_ROriginY),
                          calc(100% - var(--aug-_WD)) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_WD) / 2);
  }
  [augmented-ui~="b-clip"],
  [augmented-ui~="b-clip"] > [augmented-ui~="b-inherit"] {
    --aug-b: 15px; /* clip depth */
    --aug-_BWidth: var(--aug-b-width, calc(var(--aug-b) * 2));
    --aug-_BHeight: var(--aug-b-height, var(--aug-b));
    --aug-_BOriginX: calc(var(--aug-b-origin-x, calc(var(--aug-_BlJoinRX, 0px) / 2 + var(--aug-_BrJoinLX, 100%) / 2)) + var(--aug-b-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_BPath: , calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2) 100%,
                    var(--aug-_BOriginX) calc(100% - var(--aug-_BHeight)),
                    calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2) 100%;

    --aug-_BPathInset1: , calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_W) / 2) calc(100% - var(--aug-_W)),
                        var(--aug-_BOriginX) calc(100% - (var(--aug-_BHeight) + var(--aug-_W) * 1.5)),
                        calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_W) / 2) calc(100% - var(--aug-_W));

    --aug-_BPathInset2: , calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_WD) / 2) calc(100% - var(--aug-_WD)),
                        var(--aug-_BOriginX) calc(100% - (var(--aug-_BHeight) + var(--aug-_WD) * 1.5)),
                        calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_WD) / 2) calc(100% - var(--aug-_WD));
  }
  [augmented-ui~="l-clip"],
  [augmented-ui~="l-clip"] > [augmented-ui~="l-inherit"] {
    --aug-l: 15px; /* clip depth */
    --aug-_LWidth: var(--aug-l-width, var(--aug-l));
    --aug-_LHeight: var(--aug-l-height, calc(var(--aug-l) * 2));
    --aug-_LOriginY: calc(var(--aug-l-origin-y, calc(var(--aug-_TlJoinBY, 0px) / 2 + var(--aug-_BlJoinTY, 100%) / 2)) + var(--aug-l-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_LPath: , 0px calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2),
                    var(--aug-_LWidth) var(--aug-_LOriginY),
                    0px calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2);

    --aug-_LPathInset1: , var(--aug-_W) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_W) / 2),
                          calc(var(--aug-_LWidth) + var(--aug-_W) * 1.5) var(--aug-_LOriginY),
                          var(--aug-_W) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_W) / 2);

    --aug-_LPathInset2: , var(--aug-_WD) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_WD) / 2),
                          calc(var(--aug-_LWidth) + var(--aug-_WD) * 1.5) var(--aug-_LOriginY),
                          var(--aug-_WD) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_WD) / 2);
  }

  [augmented-ui~="tl-round"],
  [augmented-ui~="tl-round"] > [augmented-ui~="tl-inherit"] {
    --aug-tl: 15px; /* radius */
    --aug-_Sin18cos72: 0.30901699437;
    --aug-_Sin36cos54: 0.58778525229;
    --aug-_Sin54cos36: 0.80901699437;
    --aug-_Sin72cos18: 0.95105651629;
    --aug-_TlJoinBX: 0px;
    --aug-_TlJoinBY: var(--aug-tl);
    --aug-_TlJoinRX: var(--aug-tl);
    --aug-_TlJoinRY: 0px;
    --aug-_TlPath: var(--aug-_TlJoinBX) var(--aug-_TlJoinBY),
              calc(var(--aug-tl) - var(--aug-_Sin72cos18) * var(--aug-tl)) calc(var(--aug-tl) - var(--aug-_Sin18cos72) * var(--aug-tl)),
              calc(var(--aug-tl) - var(--aug-_Sin54cos36) * var(--aug-tl)) calc(var(--aug-tl) - var(--aug-_Sin36cos54) * var(--aug-tl)),
              calc(var(--aug-tl) - var(--aug-_Sin36cos54) * var(--aug-tl)) calc(var(--aug-tl) - var(--aug-_Sin54cos36) * var(--aug-tl)),
              calc(var(--aug-tl) - var(--aug-_Sin18cos72) * var(--aug-tl)) calc(var(--aug-tl) - var(--aug-_Sin72cos18) * var(--aug-tl)),
              var(--aug-_TlJoinRX) var(--aug-_TlJoinRY);

    --aug-_TlInset1JoinBX: var(--aug-_W);
    --aug-_TlInset1JoinBY: var(--aug-tl);
    --aug-_TlInset1JoinRX: var(--aug-tl);
    --aug-_TlInset1JoinRY: var(--aug-_W);
    --aug-_TlPathInset1: var(--aug-_TlInset1JoinBX) var(--aug-_TlInset1JoinBY),
                  calc(var(--aug-tl) - var(--aug-_Sin72cos18) * (var(--aug-tl) - var(--aug-_W))) calc(var(--aug-tl) - var(--aug-_Sin18cos72) * (var(--aug-tl) - var(--aug-_W))),
                  calc(var(--aug-tl) - var(--aug-_Sin54cos36) * (var(--aug-tl) - var(--aug-_W))) calc(var(--aug-tl) - var(--aug-_Sin36cos54) * (var(--aug-tl) - var(--aug-_W))),
                  calc(var(--aug-tl) - var(--aug-_Sin36cos54) * (var(--aug-tl) - var(--aug-_W))) calc(var(--aug-tl) - var(--aug-_Sin54cos36) * (var(--aug-tl) - var(--aug-_W))),
                  calc(var(--aug-tl) - var(--aug-_Sin18cos72) * (var(--aug-tl) - var(--aug-_W))) calc(var(--aug-tl) - var(--aug-_Sin72cos18) * (var(--aug-tl) - var(--aug-_W))),
                  var(--aug-_TlInset1JoinRX) var(--aug-_TlInset1JoinRY);

    --aug-_TlInset2JoinBX: var(--aug-_WD);
    --aug-_TlInset2JoinBY: calc(var(--aug-tl) + var(--aug-_WD));
    --aug-_TlInset2JoinRX: calc(var(--aug-tl) + var(--aug-_WD));
    --aug-_TlInset2JoinRY: var(--aug-_WD);
    --aug-_TlPathInset2: var(--aug-_TlInset2JoinBX) var(--aug-_TlInset2JoinBY),
                      calc(var(--aug-tl) - var(--aug-_Sin72cos18) * (var(--aug-tl) - var(--aug-_WD))) calc(var(--aug-tl) - var(--aug-_Sin18cos72) * (var(--aug-tl) - var(--aug-_WD))),
                      calc(var(--aug-tl) - var(--aug-_Sin54cos36) * (var(--aug-tl) - var(--aug-_WD))) calc(var(--aug-tl) - var(--aug-_Sin36cos54) * (var(--aug-tl) - var(--aug-_WD))),
                      calc(var(--aug-tl) - var(--aug-_Sin36cos54) * (var(--aug-tl) - var(--aug-_WD))) calc(var(--aug-tl) - var(--aug-_Sin54cos36) * (var(--aug-tl) - var(--aug-_WD))),
                      calc(var(--aug-tl) - var(--aug-_Sin18cos72) * (var(--aug-tl) - var(--aug-_WD))) calc(var(--aug-tl) - var(--aug-_Sin72cos18) * (var(--aug-tl) - var(--aug-_WD))),
                      var(--aug-_TlInset2JoinRX) var(--aug-_TlInset2JoinRY);
  }
  [augmented-ui~="tr-round"],
  [augmented-ui~="tr-round"] > [augmented-ui~="tr-inherit"] {
    --aug-tr: 15px; /* radius */
    --aug-_Sin18cos72: 0.30901699437;
    --aug-_Sin36cos54: 0.58778525229;
    --aug-_Sin54cos36: 0.80901699437;
    --aug-_Sin72cos18: 0.95105651629;
    --aug-_TrJoinLX: calc(100% - var(--aug-tr));
    --aug-_TrJoinLY: 0px;
    --aug-_TrJoinBX: 100%;
    --aug-_TrJoinBY: var(--aug-tr);
    --aug-_TrPath: var(--aug-_TrJoinLX) var(--aug-_TrJoinLY),
              calc(100% - var(--aug-tr) + var(--aug-_Sin18cos72) * var(--aug-tr)) calc(var(--aug-tr) - var(--aug-_Sin72cos18) * var(--aug-tr)),
              calc(100% - var(--aug-tr) + var(--aug-_Sin36cos54) * var(--aug-tr)) calc(var(--aug-tr) - var(--aug-_Sin54cos36) * var(--aug-tr)),
              calc(100% - var(--aug-tr) + var(--aug-_Sin54cos36) * var(--aug-tr)) calc(var(--aug-tr) - var(--aug-_Sin36cos54) * var(--aug-tr)),
              calc(100% - var(--aug-tr) + var(--aug-_Sin72cos18) * var(--aug-tr)) calc(var(--aug-tr) - var(--aug-_Sin18cos72) * var(--aug-tr)),
              var(--aug-_TrJoinBX) var(--aug-_TrJoinBY);

    --aug-_TrInset1JoinLX: calc(100% - var(--aug-tr));
    --aug-_TrInset1JoinLY: var(--aug-_W);
    --aug-_TrInset1JoinBX: calc(100% - var(--aug-_W));
    --aug-_TrInset1JoinBY: var(--aug-tr);
    --aug-_TrPathInset1: var(--aug-_TrInset1JoinLX) var(--aug-_TrInset1JoinLY),
                  calc(100% - var(--aug-tr) + var(--aug-_Sin18cos72) * (var(--aug-tr) - var(--aug-_W))) calc(var(--aug-tr) - var(--aug-_Sin72cos18) * (var(--aug-tr) - var(--aug-_W))),
                  calc(100% - var(--aug-tr) + var(--aug-_Sin36cos54) * (var(--aug-tr) - var(--aug-_W))) calc(var(--aug-tr) - var(--aug-_Sin54cos36) * (var(--aug-tr) - var(--aug-_W))),
                  calc(100% - var(--aug-tr) + var(--aug-_Sin54cos36) * (var(--aug-tr) - var(--aug-_W))) calc(var(--aug-tr) - var(--aug-_Sin36cos54) * (var(--aug-tr) - var(--aug-_W))),
                  calc(100% - var(--aug-tr) + var(--aug-_Sin72cos18) * (var(--aug-tr) - var(--aug-_W))) calc(var(--aug-tr) - var(--aug-_Sin18cos72) * (var(--aug-tr) - var(--aug-_W))),
                  var(--aug-_TrInset1JoinBX) var(--aug-_TrInset1JoinBY);

    --aug-_TrInset2JoinLX: calc(100% - (var(--aug-tr) + var(--aug-_WD)));
    --aug-_TrInset2JoinLY: var(--aug-_WD);
    --aug-_TrInset2JoinBX: calc(100% - var(--aug-_WD));
    --aug-_TrInset2JoinBY: calc(var(--aug-tr) + var(--aug-_WD));
    --aug-_TrPathInset2: var(--aug-_TrInset2JoinLX) var(--aug-_TrInset2JoinLY),
                      calc(100% - var(--aug-tr) + var(--aug-_Sin18cos72) * (var(--aug-tr) - var(--aug-_WD))) calc(var(--aug-tr) - var(--aug-_Sin72cos18) * (var(--aug-tr) - var(--aug-_WD))),
                      calc(100% - var(--aug-tr) + var(--aug-_Sin36cos54) * (var(--aug-tr) - var(--aug-_WD))) calc(var(--aug-tr) - var(--aug-_Sin54cos36) * (var(--aug-tr) - var(--aug-_WD))),
                      calc(100% - var(--aug-tr) + var(--aug-_Sin54cos36) * (var(--aug-tr) - var(--aug-_WD))) calc(var(--aug-tr) - var(--aug-_Sin36cos54) * (var(--aug-tr) - var(--aug-_WD))),
                      calc(100% - var(--aug-tr) + var(--aug-_Sin72cos18) * (var(--aug-tr) - var(--aug-_WD))) calc(var(--aug-tr) - var(--aug-_Sin18cos72) * (var(--aug-tr) - var(--aug-_WD))),
                      var(--aug-_TrInset2JoinBX) var(--aug-_TrInset2JoinBY);
  }
  [augmented-ui~="br-round"],
  [augmented-ui~="br-round"] > [augmented-ui~="br-inherit"] {
    --aug-br: 15px; /* radius */
    --aug-_Sin18cos72: 0.30901699437;
    --aug-_Sin36cos54: 0.58778525229;
    --aug-_Sin54cos36: 0.80901699437;
    --aug-_Sin72cos18: 0.95105651629;
    --aug-_BrJoinTX: 100%;
    --aug-_BrJoinTY: calc(100% - var(--aug-br));
    --aug-_BrJoinLX: calc(100% - var(--aug-br));
    --aug-_BrJoinLY: 100%;
    --aug-_BrPath: var(--aug-_BrJoinTX) var(--aug-_BrJoinTY),
              calc(100% - var(--aug-br) + var(--aug-_Sin72cos18) * var(--aug-br)) calc(100% - var(--aug-br) + var(--aug-_Sin18cos72) * var(--aug-br)),
              calc(100% - var(--aug-br) + var(--aug-_Sin54cos36) * var(--aug-br)) calc(100% - var(--aug-br) + var(--aug-_Sin36cos54) * var(--aug-br)),
              calc(100% - var(--aug-br) + var(--aug-_Sin36cos54) * var(--aug-br)) calc(100% - var(--aug-br) + var(--aug-_Sin54cos36) * var(--aug-br)),
              calc(100% - var(--aug-br) + var(--aug-_Sin18cos72) * var(--aug-br)) calc(100% - var(--aug-br) + var(--aug-_Sin72cos18) * var(--aug-br)),
              var(--aug-_BrJoinLX) var(--aug-_BrJoinLY);

    --aug-_BrInset1JoinTX: calc(100% - var(--aug-_W));
    --aug-_BrInset1JoinTY: calc(100% - (var(--aug-br) + var(--aug-_W)));
    --aug-_BrInset1JoinLX: calc(100% - (var(--aug-br) + var(--aug-_W)));
    --aug-_BrInset1JoinLY: calc(100% - var(--aug-_W));
    --aug-_BrPathInset1: var(--aug-_BrInset1JoinTX) var(--aug-_BrInset1JoinTY),
                  calc(100% - var(--aug-br) + var(--aug-_Sin72cos18) * (var(--aug-br) - var(--aug-_W))) calc(100% - var(--aug-br) + var(--aug-_Sin18cos72) * (var(--aug-br) - var(--aug-_W))),
                  calc(100% - var(--aug-br) + var(--aug-_Sin54cos36) * (var(--aug-br) - var(--aug-_W))) calc(100% - var(--aug-br) + var(--aug-_Sin36cos54) * (var(--aug-br) - var(--aug-_W))),
                  calc(100% - var(--aug-br) + var(--aug-_Sin36cos54) * (var(--aug-br) - var(--aug-_W))) calc(100% - var(--aug-br) + var(--aug-_Sin54cos36) * (var(--aug-br) - var(--aug-_W))),
                  calc(100% - var(--aug-br) + var(--aug-_Sin18cos72) * (var(--aug-br) - var(--aug-_W))) calc(100% - var(--aug-br) + var(--aug-_Sin72cos18) * (var(--aug-br) - var(--aug-_W))),
                  var(--aug-_BrInset1JoinLX) var(--aug-_BrInset1JoinLY);

    --aug-_BrInset2JoinTX: calc(100% - var(--aug-_WD));
    --aug-_BrInset2JoinTY: calc(100% - (var(--aug-br) + var(--aug-_WD)));
    --aug-_BrInset2JoinLX: calc(100% - (var(--aug-br) + var(--aug-_WD)));
    --aug-_BrInset2JoinLY: calc(100% - var(--aug-_WD));
    --aug-_BrPathInset2: var(--aug-_BrInset2JoinTX) var(--aug-_BrInset2JoinTY),
                      calc(100% - var(--aug-br) + var(--aug-_Sin72cos18) * (var(--aug-br) - var(--aug-_WD))) calc(100% - var(--aug-br) + var(--aug-_Sin18cos72) * (var(--aug-br) - var(--aug-_WD))),
                      calc(100% - var(--aug-br) + var(--aug-_Sin54cos36) * (var(--aug-br) - var(--aug-_WD))) calc(100% - var(--aug-br) + var(--aug-_Sin36cos54) * (var(--aug-br) - var(--aug-_WD))),
                      calc(100% - var(--aug-br) + var(--aug-_Sin36cos54) * (var(--aug-br) - var(--aug-_WD))) calc(100% - var(--aug-br) + var(--aug-_Sin54cos36) * (var(--aug-br) - var(--aug-_WD))),
                      calc(100% - var(--aug-br) + var(--aug-_Sin18cos72) * (var(--aug-br) - var(--aug-_WD))) calc(100% - var(--aug-br) + var(--aug-_Sin72cos18) * (var(--aug-br) - var(--aug-_WD))),
                      var(--aug-_BrInset2JoinLX) var(--aug-_BrInset2JoinLY);
  }
  [augmented-ui~="bl-round"],
  [augmented-ui~="bl-round"] > [augmented-ui~="bl-inherit"] {
    --aug-bl: 15px; /* radius */
    --aug-_Sin18cos72: 0.30901699437;
    --aug-_Sin36cos54: 0.58778525229;
    --aug-_Sin54cos36: 0.80901699437;
    --aug-_Sin72cos18: 0.95105651629;
    --aug-_BlJoinRX: var(--aug-bl);
    --aug-_BlJoinRY: 100%;
    --aug-_BlJoinTX: 0px;
    --aug-_BlJoinTY: calc(100% - var(--aug-bl));
    --aug-_BlPath: var(--aug-_BlJoinRX) var(--aug-_BlJoinRY),
              calc(var(--aug-bl) - var(--aug-_Sin18cos72) * var(--aug-bl)) calc(100% - var(--aug-bl) + var(--aug-_Sin72cos18) * var(--aug-bl)),
              calc(var(--aug-bl) - var(--aug-_Sin36cos54) * var(--aug-bl)) calc(100% - var(--aug-bl) + var(--aug-_Sin54cos36) * var(--aug-bl)),
              calc(var(--aug-bl) - var(--aug-_Sin54cos36) * var(--aug-bl)) calc(100% - var(--aug-bl) + var(--aug-_Sin36cos54) * var(--aug-bl)),
              calc(var(--aug-bl) - var(--aug-_Sin72cos18) * var(--aug-bl)) calc(100% - var(--aug-bl) + var(--aug-_Sin18cos72) * var(--aug-bl)),
              var(--aug-_BlJoinTX) var(--aug-_BlJoinTY);

    --aug-_BlInset1JoinRX: calc(var(--aug-bl) + var(--aug-_W));
    --aug-_BlInset1JoinRY: calc(100% - var(--aug-_W));
    --aug-_BlInset1JoinTX: var(--aug-_W);
    --aug-_BlInset1JoinTY: calc(100% - (var(--aug-bl) + var(--aug-_W)));
    --aug-_BlPathInset1: var(--aug-_BlInset1JoinRX) var(--aug-_BlInset1JoinRY),
                  calc(var(--aug-bl) - var(--aug-_Sin18cos72) * (var(--aug-bl) - var(--aug-_W))) calc(100% - var(--aug-bl) + var(--aug-_Sin72cos18) * (var(--aug-bl) - var(--aug-_W))),
                  calc(var(--aug-bl) - var(--aug-_Sin36cos54) * (var(--aug-bl) - var(--aug-_W))) calc(100% - var(--aug-bl) + var(--aug-_Sin54cos36) * (var(--aug-bl) - var(--aug-_W))),
                  calc(var(--aug-bl) - var(--aug-_Sin54cos36) * (var(--aug-bl) - var(--aug-_W))) calc(100% - var(--aug-bl) + var(--aug-_Sin36cos54) * (var(--aug-bl) - var(--aug-_W))),
                  calc(var(--aug-bl) - var(--aug-_Sin72cos18) * (var(--aug-bl) - var(--aug-_W))) calc(100% - var(--aug-bl) + var(--aug-_Sin18cos72) * (var(--aug-bl) - var(--aug-_W))),
                  var(--aug-_BlInset1JoinTX) var(--aug-_BlInset1JoinTY);

    --aug-_BlInset2JoinRX: calc(var(--aug-bl) + var(--aug-_WD));
    --aug-_BlInset2JoinRY: calc(100% - var(--aug-_WD));
    --aug-_BlInset2JoinTX: var(--aug-_WD);
    --aug-_BlInset2JoinTY: calc(100% - (var(--aug-bl) + var(--aug-_WD)));
    --aug-_BlPathInset2: var(--aug-_BlInset2JoinRX) var(--aug-_BlInset2JoinRY),
                      calc(var(--aug-bl) - var(--aug-_Sin18cos72) * (var(--aug-bl) - var(--aug-_WD))) calc(100% - var(--aug-bl) + var(--aug-_Sin72cos18) * (var(--aug-bl) - var(--aug-_WD))),
                      calc(var(--aug-bl) - var(--aug-_Sin36cos54) * (var(--aug-bl) - var(--aug-_WD))) calc(100% - var(--aug-bl) + var(--aug-_Sin54cos36) * (var(--aug-bl) - var(--aug-_WD))),
                      calc(var(--aug-bl) - var(--aug-_Sin54cos36) * (var(--aug-bl) - var(--aug-_WD))) calc(100% - var(--aug-bl) + var(--aug-_Sin36cos54) * (var(--aug-bl) - var(--aug-_WD))),
                      calc(var(--aug-bl) - var(--aug-_Sin72cos18) * (var(--aug-bl) - var(--aug-_WD))) calc(100% - var(--aug-bl) + var(--aug-_Sin18cos72) * (var(--aug-bl) - var(--aug-_WD))),
                      var(--aug-_BlInset2JoinTX) var(--aug-_BlInset2JoinTY);
  }

  [augmented-ui~="tl-rect"],
  [augmented-ui~="tl-rect"] > [augmented-ui~="tl-inherit"] {
    --aug-tl: 15px; /* size */
    --aug-_TlWidth: var(--aug-tl-width, var(--aug-tl));
    --aug-_TlHeight: var(--aug-tl-height, var(--aug-tl));
    --aug-_TlJoinBX: 0px;
    --aug-_TlJoinBY: var(--aug-_TlHeight);
    --aug-_TlJoinRX: var(--aug-_TlWidth);
    --aug-_TlJoinRY: 0px;
    --aug-_TlPath: var(--aug-_TlJoinBX) var(--aug-_TlJoinBY),
              var(--aug-_TlWidth) var(--aug-_TlHeight),
              var(--aug-_TlJoinRX) var(--aug-_TlJoinRY);

    --aug-_TlInset1JoinBX: var(--aug-_W);
    --aug-_TlInset1JoinBY: calc(var(--aug-_TlHeight) + var(--aug-_W));
    --aug-_TlInset1JoinRX: calc(var(--aug-_TlWidth) + var(--aug-_W));
    --aug-_TlInset1JoinRY: var(--aug-_W);
    --aug-_TlPathInset1: var(--aug-_TlInset1JoinBX) var(--aug-_TlInset1JoinBY),
                  calc(var(--aug-_W) + var(--aug-_TlWidth)) calc(var(--aug-_TlHeight) + var(--aug-_W)),
                  var(--aug-_TlInset1JoinRX) var(--aug-_TlInset1JoinRY);

    --aug-_TlInset2JoinBX: var(--aug-_WD);
    --aug-_TlInset2JoinBY: calc(var(--aug-_TlHeight) + var(--aug-_WD));
    --aug-_TlInset2JoinRX: calc(var(--aug-_TlWidth) + var(--aug-_WD));
    --aug-_TlInset2JoinRY: var(--aug-_WD);
    --aug-_TlPathInset2: var(--aug-_TlInset2JoinBX) var(--aug-_TlInset2JoinBY),
                  calc(var(--aug-_WD) + var(--aug-_TlWidth)) calc(var(--aug-_TlHeight) + var(--aug-_WD)),
                  var(--aug-_TlInset2JoinRX) var(--aug-_TlInset2JoinRY);
  }
  [augmented-ui~="tr-rect"],
  [augmented-ui~="tr-rect"] > [augmented-ui~="tr-inherit"] {
    --aug-tr: 15px; /* size */
    --aug-_TrWidth: var(--aug-tr-width, var(--aug-tr));
    --aug-_TrHeight: var(--aug-tr-height, var(--aug-tr));
    --aug-_TrJoinLX: calc(100% - var(--aug-_TrWidth));
    --aug-_TrJoinLY: 0px;
    --aug-_TrJoinBX: 100%;
    --aug-_TrJoinBY: var(--aug-_TrHeight);
    --aug-_TrPath: var(--aug-_TrJoinLX) var(--aug-_TrJoinLY),
              calc(100% - var(--aug-_TrWidth)) var(--aug-_TrHeight),
              var(--aug-_TrJoinBX) var(--aug-_TrJoinBY);

    --aug-_TrInset1JoinLX: calc(100% - (var(--aug-_TrWidth) + var(--aug-_W)));
    --aug-_TrInset1JoinLY: var(--aug-_W);
    --aug-_TrInset1JoinBX: calc(100% - var(--aug-_W));
    --aug-_TrInset1JoinBY: calc(var(--aug-_TrHeight) + var(--aug-_W));
    --aug-_TrPathInset1: var(--aug-_TrInset1JoinLX) var(--aug-_TrInset1JoinLY),
                  calc(100% - var(--aug-_W) - var(--aug-_TrWidth)) calc(var(--aug-_TrHeight) + var(--aug-_W)),
                  var(--aug-_TrInset1JoinBX) var(--aug-_TrInset1JoinBY);

    --aug-_TrInset2JoinLX: calc(100% - (var(--aug-_TrWidth) + var(--aug-_WD)));
    --aug-_TrInset2JoinLY: var(--aug-_WD);
    --aug-_TrInset2JoinBX: calc(100% - var(--aug-_WD));
    --aug-_TrInset2JoinBY: calc(var(--aug-_TrHeight) + var(--aug-_WD));
    --aug-_TrPathInset2: var(--aug-_TrInset2JoinLX) var(--aug-_TrInset2JoinLY),
                      calc(100% - var(--aug-_WD) - var(--aug-_TrWidth)) calc(var(--aug-_TrHeight) + var(--aug-_WD)),
                      var(--aug-_TrInset2JoinBX) var(--aug-_TrInset2JoinBY);
  }
  [augmented-ui~="br-rect"],
  [augmented-ui~="br-rect"] > [augmented-ui~="br-inherit"] {
    --aug-br: 15px; /* size */
    --aug-_BrWidth: var(--aug-br-width, var(--aug-br));
    --aug-_BrHeight: var(--aug-br-height, var(--aug-br));
    --aug-_BrJoinTX: 100%;
    --aug-_BrJoinTY: calc(100% - var(--aug-_BrHeight));
    --aug-_BrJoinLX: calc(100% - var(--aug-_BrWidth));
    --aug-_BrJoinLY: 100%;
    --aug-_BrPath: var(--aug-_BrJoinTX) var(--aug-_BrJoinTY),
              calc(100% - var(--aug-_BrWidth)) calc(100% - var(--aug-_BrHeight)),
              var(--aug-_BrJoinLX) var(--aug-_BrJoinLY);

    --aug-_BrInset1JoinTX: calc(100% - var(--aug-_W));
    --aug-_BrInset1JoinTY: calc(100% - (var(--aug-_BrHeight) + var(--aug-_W)));
    --aug-_BrInset1JoinLX: calc(100% - (var(--aug-_BrWidth) + var(--aug-_W)));
    --aug-_BrInset1JoinLY: calc(100% - var(--aug-_W));
    --aug-_BrPathInset1: var(--aug-_BrInset1JoinTX) var(--aug-_BrInset1JoinTY),
                  calc(100% - var(--aug-_W) - var(--aug-_BrWidth)) calc(100% - (var(--aug-_BrHeight) + var(--aug-_W))),
                  var(--aug-_BrInset1JoinLX) var(--aug-_BrInset1JoinLY);

    --aug-_BrInset2JoinTX: calc(100% - var(--aug-_WD));
    --aug-_BrInset2JoinTY: calc(100% - (var(--aug-_BrHeight) + var(--aug-_WD)));
    --aug-_BrInset2JoinLX: calc(100% - (var(--aug-_BrWidth) + var(--aug-_WD)));
    --aug-_BrInset2JoinLY: calc(100% - var(--aug-_WD));
    --aug-_BrPathInset2: var(--aug-_BrInset2JoinTX) var(--aug-_BrInset2JoinTY),
                      calc(100% - var(--aug-_WD) - var(--aug-_BrWidth)) calc(100% - (var(--aug-_BrHeight) + var(--aug-_WD))),
                      var(--aug-_BrInset2JoinLX) var(--aug-_BrInset2JoinLY);
  }
  [augmented-ui~="bl-rect"],
  [augmented-ui~="bl-rect"] > [augmented-ui~="bl-inherit"] {
    --aug-bl: 15px; /* size */
    --aug-_BlWidth: var(--aug-bl-width, var(--aug-bl));
    --aug-_BlHeight: var(--aug-bl-height, var(--aug-bl));
    --aug-_BlJoinRX: var(--aug-_BlWidth);
    --aug-_BlJoinRY: 100%;
    --aug-_BlJoinTX: 0px;
    --aug-_BlJoinTY: calc(100% - var(--aug-_BlHeight));
    --aug-_BlPath: var(--aug-_BlJoinRX) var(--aug-_BlJoinRY),
              var(--aug-_BlWidth) calc(100% - var(--aug-_BlHeight)),
              var(--aug-_BlJoinTX) var(--aug-_BlJoinTY);

    --aug-_BlInset1JoinRX: calc(var(--aug-_BlWidth) + var(--aug-_W));
    --aug-_BlInset1JoinRY: calc(100% - var(--aug-_W));
    --aug-_BlInset1JoinTX: var(--aug-_W);
    --aug-_BlInset1JoinTY: calc(100% - (var(--aug-_BlHeight) + var(--aug-_W)));
    --aug-_BlPathInset1: var(--aug-_BlInset1JoinRX) var(--aug-_BlInset1JoinRY),
                  calc(var(--aug-_BlWidth) + var(--aug-_W)) calc(100% - (var(--aug-_BlHeight) + var(--aug-_W))),
                  var(--aug-_BlInset1JoinTX) var(--aug-_BlInset1JoinTY);

    --aug-_BlInset2JoinRX: calc(var(--aug-_BlWidth) + var(--aug-_WD));
    --aug-_BlInset2JoinRY: calc(100% - var(--aug-_WD));
    --aug-_BlInset2JoinTX: var(--aug-_WD);
    --aug-_BlInset2JoinTY: calc(100% - (var(--aug-_BlHeight) + var(--aug-_WD)));
    --aug-_BlPathInset2: var(--aug-_BlInset2JoinRX) var(--aug-_BlInset2JoinRY),
                      calc(var(--aug-_BlWidth) + var(--aug-_WD)) calc(100% - (var(--aug-_BlHeight) + var(--aug-_WD))),
                      var(--aug-_BlInset2JoinTX) var(--aug-_BlInset2JoinTY);
  }
  [augmented-ui~="t-rect"],
  [augmented-ui~="t-rect"] > [augmented-ui~="t-inherit"] {
    --aug-t: 15px; /* size */
    --aug-_TWidth: var(--aug-t-width, calc(var(--aug-t) * 2));
    --aug-_THeight: var(--aug-t-height, var(--aug-t));
    --aug-_TOriginX: calc(var(--aug-t-origin-x, calc(var(--aug-_TlJoinRX, 0px) / 2 + var(--aug-_TrJoinLX, 100%) / 2)) + var(--aug-t-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_TPath: , calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2) 0px,
                    calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2) var(--aug-_THeight),
                    calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2) var(--aug-_THeight),
                    calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2) 0px;

    --aug-_TPathInset1: , calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_W)) var(--aug-_W),
                          calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_W)) calc(var(--aug-_THeight) + var(--aug-_W)),
                          calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_W)) calc(var(--aug-_THeight) + var(--aug-_W)),
                          calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_W)) var(--aug-_W);

    --aug-_TPathInset2: , calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_WD)) var(--aug-_WD),
                          calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_WD)) calc(var(--aug-_THeight) + var(--aug-_WD)),
                          calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_WD)) calc(var(--aug-_THeight) + var(--aug-_WD)),
                          calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_WD)) var(--aug-_WD);
  }
  [augmented-ui~="r-rect"],
  [augmented-ui~="r-rect"] > [augmented-ui~="r-inherit"] {
    --aug-r: 15px; /* size */
    --aug-_RWidth: var(--aug-r-width, var(--aug-r));
    --aug-_RHeight: var(--aug-r-height, calc(var(--aug-r) * 2));
    --aug-_ROriginY: calc(var(--aug-r-origin-y, calc(var(--aug-_TrJoinBY, 0px) / 2 + var(--aug-_BrJoinTY, 100%) / 2)) + var(--aug-r-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_RPath: , 100% calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2),
                    calc(100% - var(--aug-_RWidth)) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2),
                    calc(100% - var(--aug-_RWidth)) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2),
                    100% calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2);

    --aug-_RPathInset1: , calc(100% - var(--aug-_W)) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_W)),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_W))) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_W)),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_W))) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_W)),
                          calc(100% - var(--aug-_W)) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_W));

    --aug-_RPathInset2: , calc(100% - var(--aug-_WD)) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_WD)),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_WD))) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_WD)),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_WD))) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_WD)),
                          calc(100% - var(--aug-_WD)) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_WD));
  }
  [augmented-ui~="b-rect"],
  [augmented-ui~="b-rect"] > [augmented-ui~="b-inherit"] {
    --aug-b: 15px; /* size */
    --aug-_BWidth: var(--aug-b-width, calc(var(--aug-b) * 2));
    --aug-_BHeight: var(--aug-b-height, var(--aug-b));
    --aug-_BOriginX: calc(var(--aug-b-origin-x, calc(var(--aug-_BlJoinRX, 0px) / 2 + var(--aug-_BrJoinLX, 100%) / 2)) + var(--aug-b-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_BPath: , calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2) 100%,
                    calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2) calc(100% - var(--aug-_BHeight)),
                    calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2) calc(100% - var(--aug-_BHeight)),
                    calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2) 100%;

    --aug-_BPathInset1: , calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_W)) calc(100% - var(--aug-_W)),
                          calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_W)) calc(100% - var(--aug-_BHeight) - var(--aug-_W)),
                          calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_W)) calc(100% - var(--aug-_BHeight) - var(--aug-_W)),
                          calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_W)) calc(100% - var(--aug-_W));

    --aug-_BPathInset2: , calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_WD)) calc(100% - var(--aug-_WD)),
                          calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_WD)) calc(100% - var(--aug-_BHeight) - var(--aug-_WD)),
                          calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_WD)) calc(100% - var(--aug-_BHeight) - var(--aug-_WD)),
                          calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_WD)) calc(100% - var(--aug-_WD));
  }
  [augmented-ui~="l-rect"],
  [augmented-ui~="l-rect"] > [augmented-ui~="l-inherit"] {
    --aug-l: 15px; /* size */
    --aug-_LWidth: var(--aug-l-width, var(--aug-l));
    --aug-_LHeight: var(--aug-l-height, calc(var(--aug-l) * 2));
    --aug-_LOriginY: calc(var(--aug-l-origin-y, calc(var(--aug-_TlJoinBY, 0px) / 2 + var(--aug-_BlJoinTY, 100%) / 2)) + var(--aug-l-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_LPath: , 0px calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2),
                    var(--aug-_LWidth) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2),
                    var(--aug-_LWidth) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2),
                    0px calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2);

    --aug-_LPathInset1: , var(--aug-_W) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_W)),
                          calc(var(--aug-_LWidth) + var(--aug-_W)) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_W)),
                          calc(var(--aug-_LWidth) + var(--aug-_W)) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_W)),
                          var(--aug-_W) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_W));

    --aug-_LPathInset2: , var(--aug-_WD) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_WD)),
                          calc(var(--aug-_LWidth) + var(--aug-_WD)) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_WD)),
                          calc(var(--aug-_LWidth) + var(--aug-_WD)) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_WD)),
                          var(--aug-_WD) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_WD));
  }

  [augmented-ui~="tl-clip-x"],
  [augmented-ui~="tl-clip-x"] > [augmented-ui~="tl-inherit"] {
    --aug-tl: 15px;
    --aug-_TlHeight: var(--aug-tl-height, var(--aug-tl));
    --aug-_TlNotch: var(--aug-_TlHeight); /* how much of width is the notch */
    --aug-_TlWidth: var(--aug-tl-width, calc(var(--aug-tl) + var(--aug-_TlNotch)));
    --aug-_TlJoinBX: 0px;
    --aug-_TlJoinBY: var(--aug-_TlHeight);
    --aug-_TlJoinRX: var(--aug-_TlWidth);
    --aug-_TlJoinRY: 0px;
    --aug-_TlPath: var(--aug-_TlJoinBX) var(--aug-_TlJoinBY),
              calc(var(--aug-_TlWidth) - var(--aug-_TlNotch)) var(--aug-_TlHeight),
              var(--aug-_TlJoinRX) var(--aug-_TlJoinRY);

    --aug-_TlInset1JoinBX: var(--aug-_W);
    --aug-_TlInset1JoinBY: calc(var(--aug-_TlHeight) + var(--aug-_W));
    --aug-_TlInset1JoinRX: calc(var(--aug-_TlWidth) + var(--aug-_W) / 2);
    --aug-_TlInset1JoinRY: var(--aug-_W);
    --aug-_TlPathInset1: var(--aug-_TlInset1JoinBX) var(--aug-_TlInset1JoinBY),
                  calc(var(--aug-_W) / 2 + var(--aug-_TlWidth) - var(--aug-_TlNotch)) calc(var(--aug-_TlHeight) + var(--aug-_W)),
                  var(--aug-_TlInset1JoinRX) var(--aug-_TlInset1JoinRY);

    --aug-_TlInset2JoinBX: var(--aug-_WD);
    --aug-_TlInset2JoinBY: calc(var(--aug-_TlHeight) + var(--aug-_WD));
    --aug-_TlInset2JoinRX: calc(var(--aug-_TlWidth) + var(--aug-_WD) / 2);
    --aug-_TlInset2JoinRY: var(--aug-_WD);
    --aug-_TlPathInset2: var(--aug-_TlInset2JoinBX) var(--aug-_TlInset2JoinBY),
                  calc(var(--aug-_WD) / 2 + var(--aug-_TlWidth) - var(--aug-_TlNotch)) calc(var(--aug-_TlHeight) + var(--aug-_WD)),
                  var(--aug-_TlInset2JoinRX) var(--aug-_TlInset2JoinRY);
  }
  [augmented-ui~="tr-clip-x"],
  [augmented-ui~="tr-clip-x"] > [augmented-ui~="tr-inherit"] {
    --aug-tr: 15px;
    --aug-_TrHeight: var(--aug-tr-height, var(--aug-tr));
    --aug-_TrNotch: var(--aug-_TrHeight); /* how much of width is the notch */
    --aug-_TrWidth: var(--aug-tr-width, calc(var(--aug-tr) + var(--aug-_TrNotch)));
    --aug-_TrJoinLX: calc(100% - var(--aug-_TrWidth));
    --aug-_TrJoinLY: 0px;
    --aug-_TrJoinBX: 100%;
    --aug-_TrJoinBY: var(--aug-_TrHeight);
    --aug-_TrPath: var(--aug-_TrJoinLX) var(--aug-_TrJoinLY),
              calc(100% - var(--aug-_TrWidth) + var(--aug-_TrNotch)) var(--aug-_TrHeight),
              var(--aug-_TrJoinBX) var(--aug-_TrJoinBY);

    --aug-_TrInset1JoinLX: calc(100% - (var(--aug-_TrWidth) + var(--aug-_W) / 2));
    --aug-_TrInset1JoinLY: var(--aug-_W);
    --aug-_TrInset1JoinBX: calc(100% - var(--aug-_W));
    --aug-_TrInset1JoinBY: calc(var(--aug-_TrHeight) + var(--aug-_W));
    --aug-_TrPathInset1: var(--aug-_TrInset1JoinLX) var(--aug-_TrInset1JoinLY),
                  calc(100% - var(--aug-_W) / 2 - var(--aug-_TrWidth) + var(--aug-_TrNotch)) calc(var(--aug-_TrHeight) + var(--aug-_W)),
                  var(--aug-_TrInset1JoinBX) var(--aug-_TrInset1JoinBY);

    --aug-_TrInset2JoinLX: calc(100% - (var(--aug-_TrWidth) + var(--aug-_WD) / 2));
    --aug-_TrInset2JoinLY: var(--aug-_WD);
    --aug-_TrInset2JoinBX: calc(100% - var(--aug-_WD));
    --aug-_TrInset2JoinBY: calc(var(--aug-_TrHeight) + var(--aug-_WD));
    --aug-_TrPathInset2: var(--aug-_TrInset2JoinLX) var(--aug-_TrInset2JoinLY),
                      calc(100% - var(--aug-_WD) / 2 - var(--aug-_TrWidth) + var(--aug-_TrNotch)) calc(var(--aug-_TrHeight) + var(--aug-_WD)),
                      var(--aug-_TrInset2JoinBX) var(--aug-_TrInset2JoinBY);
  }
  [augmented-ui~="br-clip-x"],
  [augmented-ui~="br-clip-x"] > [augmented-ui~="br-inherit"] {
    --aug-br: 15px; /* size */
    --aug-_BrHeight: var(--aug-br-height, var(--aug-br));
    --aug-_BrNotch: var(--aug-_BrHeight); /* how much of width is the notch */
    --aug-_BrWidth: var(--aug-br-width, calc(var(--aug-br) + var(--aug-_BrNotch)));
    --aug-_BrJoinTX: 100%;
    --aug-_BrJoinTY: calc(100% - var(--aug-_BrHeight));
    --aug-_BrJoinLX: calc(100% - var(--aug-_BrWidth));
    --aug-_BrJoinLY: 100%;
    --aug-_BrPath: var(--aug-_BrJoinTX) var(--aug-_BrJoinTY),
              calc(100% - var(--aug-_BrWidth) + var(--aug-_BrNotch)) calc(100% - var(--aug-_BrHeight)),
              var(--aug-_BrJoinLX) var(--aug-_BrJoinLY);

    --aug-_BrInset1JoinTX: calc(100% - var(--aug-_W));
    --aug-_BrInset1JoinTY: calc(100% - (var(--aug-_BrHeight) + var(--aug-_W)));
    --aug-_BrInset1JoinLX: calc(100% - (var(--aug-_BrWidth) + var(--aug-_W) / 2));
    --aug-_BrInset1JoinLY: calc(100% - var(--aug-_W));
    --aug-_BrPathInset1: var(--aug-_BrInset1JoinTX) var(--aug-_BrInset1JoinTY),
                  calc(100% - var(--aug-_W) / 2 - var(--aug-_BrWidth) + var(--aug-_BrNotch)) calc(100% - (var(--aug-_BrHeight) + var(--aug-_W))),
                  var(--aug-_BrInset1JoinLX) var(--aug-_BrInset1JoinLY);

    --aug-_BrInset2JoinTX: calc(100% - var(--aug-_WD));
    --aug-_BrInset2JoinTY: calc(100% - (var(--aug-_BrHeight) + var(--aug-_WD)));
    --aug-_BrInset2JoinLX: calc(100% - (var(--aug-_BrWidth) + var(--aug-_WD) / 2));
    --aug-_BrInset2JoinLY: calc(100% - var(--aug-_WD));
    --aug-_BrPathInset2: var(--aug-_BrInset2JoinTX) var(--aug-_BrInset2JoinTY),
                      calc(100% - var(--aug-_WD) / 2 - var(--aug-_BrWidth) + var(--aug-_BrNotch)) calc(100% - (var(--aug-_BrHeight) + var(--aug-_WD))),
                      var(--aug-_BrInset2JoinLX) var(--aug-_BrInset2JoinLY);
  }
  [augmented-ui~="bl-clip-x"],
  [augmented-ui~="bl-clip-x"] > [augmented-ui~="bl-inherit"] {
    --aug-bl: 15px; /* size */
    --aug-_BlHeight: var(--aug-bl-height, var(--aug-bl));
    --aug-_BlNotch: var(--aug-_BlHeight); /* how much of width is the notch */
    --aug-_BlWidth: var(--aug-bl-width, calc(var(--aug-bl) + var(--aug-_BlNotch)));
    --aug-_BlJoinRX: var(--aug-_BlWidth);
    --aug-_BlJoinRY: 100%;
    --aug-_BlJoinTX: 0px;
    --aug-_BlJoinTY: calc(100% - var(--aug-_BlHeight));
    --aug-_BlPath: var(--aug-_BlJoinRX) var(--aug-_BlJoinRY),
              calc(var(--aug-_BlWidth) - var(--aug-_BlNotch)) calc(100% - var(--aug-_BlHeight)),
              var(--aug-_BlJoinTX) var(--aug-_BlJoinTY);

    --aug-_BlInset1JoinRX: calc(var(--aug-_BlWidth) + var(--aug-_W) / 2);
    --aug-_BlInset1JoinRY: calc(100% - var(--aug-_W));
    --aug-_BlInset1JoinTX: var(--aug-_W);
    --aug-_BlInset1JoinTY: calc(100% - (var(--aug-_BlHeight) + var(--aug-_W)));
    --aug-_BlPathInset1: var(--aug-_BlInset1JoinRX) var(--aug-_BlInset1JoinRY),
                  calc(var(--aug-_BlWidth) + var(--aug-_W) / 2 - var(--aug-_BlNotch)) calc(100% - (var(--aug-_BlHeight) + var(--aug-_W))),
                  var(--aug-_BlInset1JoinTX) var(--aug-_BlInset1JoinTY);

    --aug-_BlInset2JoinRX: calc(var(--aug-_BlWidth) + var(--aug-_WD) / 2);
    --aug-_BlInset2JoinRY: calc(100% - var(--aug-_WD));
    --aug-_BlInset2JoinTX: var(--aug-_WD);
    --aug-_BlInset2JoinTY: calc(100% - (var(--aug-_BlHeight) + var(--aug-_WD)));
    --aug-_BlPathInset2: var(--aug-_BlInset2JoinRX) var(--aug-_BlInset2JoinRY),
                      calc(var(--aug-_BlWidth) + var(--aug-_WD) / 2 - var(--aug-_BlNotch)) calc(100% - (var(--aug-_BlHeight) + var(--aug-_WD))),
                      var(--aug-_BlInset2JoinTX) var(--aug-_BlInset2JoinTY);
  }
  [augmented-ui~="t-clip-x"],
  [augmented-ui~="t-clip-x"] > [augmented-ui~="t-inherit"] {
    --aug-t: 15px; /* size */
    --aug-_THeight: var(--aug-t-height, var(--aug-t));
    --aug-_TNotch: var(--aug-_THeight); /* how much of half the width is the notch */
    --aug-_TWidth: var(--aug-t-width, calc(var(--aug-t) * 2 + var(--aug-_TNotch) * 2));
    --aug-_TOriginX: calc(var(--aug-t-origin-x, calc(var(--aug-_TlJoinRX, 0px) / 2 + var(--aug-_TrJoinLX, 100%) / 2)) + var(--aug-t-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_TPath: , calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2) 0px,
                    calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 + var(--aug-_TNotch)) var(--aug-_THeight),
                    calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 - var(--aug-_TNotch)) var(--aug-_THeight),
                    calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2) 0px;

    --aug-_TPathInset1: , calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_W) / 2) var(--aug-_W),
                          calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_W) / 2 + var(--aug-_TNotch)) calc(var(--aug-_THeight) + var(--aug-_W)),
                          calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_W) / 2 - var(--aug-_TNotch)) calc(var(--aug-_THeight) + var(--aug-_W)),
                          calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_W) / 2) var(--aug-_W);

    --aug-_TPathInset2: , calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_WD) / 2) var(--aug-_WD),
                          calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_WD) / 2 + var(--aug-_TNotch)) calc(var(--aug-_THeight) + var(--aug-_WD)),
                          calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_WD) / 2 - var(--aug-_TNotch)) calc(var(--aug-_THeight) + var(--aug-_WD)),
                          calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_WD) / 2) var(--aug-_WD);
  }
  [augmented-ui~="r-clip-x"],
  [augmented-ui~="r-clip-x"] > [augmented-ui~="r-inherit"] {
    --aug-r: 15px; /* size */
    --aug-_RHeight: var(--aug-r-height, calc(var(--aug-r) * 2));
    --aug-_RNotch: calc(var(--aug-_RHeight) / 2); /* how much of width is the notch */
    --aug-_RWidth: var(--aug-r-width, calc(var(--aug-r) + var(--aug-_RNotch)));
    --aug-_ROriginY: calc(var(--aug-r-origin-y, calc(var(--aug-_TrJoinBY, 0px) / 2 + var(--aug-_BrJoinTY, 100%) / 2)) + var(--aug-r-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_RPath: , 100% calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2),
                    calc(100% - var(--aug-_RWidth) + var(--aug-_RNotch)) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2),
                    calc(100% - var(--aug-_RWidth)) var(--aug-_ROriginY),
                    calc(100% - var(--aug-_RWidth) + var(--aug-_RNotch)) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2),
                    100% calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2);

    --aug-_RPathInset1: , calc(100% - var(--aug-_W)) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_W)),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_W) / 2 - var(--aug-_RNotch))) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_W)),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_W) * 1.5)) var(--aug-_ROriginY),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_W) / 2 - var(--aug-_RNotch))) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_W)),
                          calc(100% - var(--aug-_W)) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_W));

    --aug-_RPathInset2: , calc(100% - var(--aug-_WD)) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_WD)),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_WD) / 2 - var(--aug-_RNotch))) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_WD)),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_WD) * 1.5)) var(--aug-_ROriginY),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_WD) / 2 - var(--aug-_RNotch))) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_WD)),
                          calc(100% - var(--aug-_WD)) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_WD));
  }
  [augmented-ui~="b-clip-x"],
  [augmented-ui~="b-clip-x"] > [augmented-ui~="b-inherit"] {
    --aug-b: 15px; /* size */
    --aug-_BHeight: var(--aug-b-height, var(--aug-b));
    --aug-_BNotch: var(--aug-_BHeight); /* how much of half the width is the notch */
    --aug-_BWidth: var(--aug-b-width, calc(var(--aug-b) * 2 + var(--aug-_BNotch) * 2));
    --aug-_BOriginX: calc(var(--aug-b-origin-x, calc(var(--aug-_BlJoinRX, 0px) / 2 + var(--aug-_BrJoinLX, 100%) / 2)) + var(--aug-b-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_BPath: , calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2) 100%,
                    calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 - var(--aug-_BNotch)) calc(100% - var(--aug-_BHeight)),
                    calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 + var(--aug-_BNotch)) calc(100% - var(--aug-_BHeight)),
                    calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2) 100%;

    --aug-_BPathInset1: , calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_W) / 2) calc(100% - var(--aug-_W)),
                          calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_W) / 2 - var(--aug-_BNotch)) calc(100% - var(--aug-_BHeight) - var(--aug-_W)),
                          calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_W) / 2 + var(--aug-_BNotch)) calc(100% - var(--aug-_BHeight) - var(--aug-_W)),
                          calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_W) / 2) calc(100% - var(--aug-_W));

    --aug-_BPathInset2: , calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_WD) / 2) calc(100% - var(--aug-_WD)),
                          calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_WD) / 2 - var(--aug-_BNotch)) calc(100% - var(--aug-_BHeight) - var(--aug-_WD)),
                          calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_WD) / 2 + var(--aug-_BNotch)) calc(100% - var(--aug-_BHeight) - var(--aug-_WD)),
                          calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_WD) / 2) calc(100% - var(--aug-_WD));
  }
  [augmented-ui~="l-clip-x"],
  [augmented-ui~="l-clip-x"] > [augmented-ui~="l-inherit"] {
    --aug-l: 15px; /* size */
    --aug-_LHeight: var(--aug-l-height, calc(var(--aug-l) * 2));
    --aug-_LNotch: calc(var(--aug-_LHeight) / 2); /* how much of width is the notch */
    --aug-_LWidth: var(--aug-l-width, calc(var(--aug-l) + var(--aug-_LNotch)));
    --aug-_LOriginY: calc(var(--aug-l-origin-y, calc(var(--aug-_TlJoinBY, 0px) / 2 + var(--aug-_BlJoinTY, 100%) / 2)) + var(--aug-l-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_LPath: , 0px calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2),
                    calc(var(--aug-_LWidth) - var(--aug-_LNotch)) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2),
                    calc(var(--aug-_LWidth)) var(--aug-_LOriginY),
                    calc(var(--aug-_LWidth) - var(--aug-_LNotch)) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2),
                    0px calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2);

    --aug-_LPathInset1: , var(--aug-_W) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_W)),
                          calc(var(--aug-_LWidth) + var(--aug-_W) / 2 - var(--aug-_LNotch)) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_W)),
                          calc(var(--aug-_LWidth) + var(--aug-_W) * 1.5) var(--aug-_LOriginY),
                          calc(var(--aug-_LWidth) + var(--aug-_W) / 2 - var(--aug-_LNotch)) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_W)),
                          var(--aug-_W) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_W));

    --aug-_LPathInset2: , var(--aug-_WD) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_WD)),
                          calc(var(--aug-_LWidth) + var(--aug-_WD) / 2 - var(--aug-_LNotch)) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_WD)),
                          calc(var(--aug-_LWidth) + var(--aug-_WD) * 1.5) var(--aug-_LOriginY),
                          calc(var(--aug-_LWidth) + var(--aug-_WD) / 2 - var(--aug-_LNotch)) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_WD)),
                          var(--aug-_WD) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_WD));
  }

  [augmented-ui~="tl-clip-y"],
  [augmented-ui~="tl-clip-y"] > [augmented-ui~="tl-inherit"] {
    --aug-tl: 15px; /* size */
    --aug-_TlWidth: var(--aug-tl-width, var(--aug-tl));
    --aug-_TlNotch: var(--aug-_TlWidth); /* how much of height is the notch */
    --aug-_TlHeight: var(--aug-tl-height, calc(var(--aug-tl) + var(--aug-_TlNotch)));
    --aug-_TlJoinBX: 0px;
    --aug-_TlJoinBY: var(--aug-_TlHeight);
    --aug-_TlJoinRX: var(--aug-_TlWidth);
    --aug-_TlJoinRY: 0px;
    --aug-_TlPath: var(--aug-_TlJoinBX) var(--aug-_TlJoinBY),
              var(--aug-_TlWidth) calc(var(--aug-_TlHeight) - var(--aug-_TlNotch)),
              var(--aug-_TlJoinRX) var(--aug-_TlJoinRY);

    --aug-_TlInset1JoinBX: var(--aug-_W);
    --aug-_TlInset1JoinBY: calc(var(--aug-_TlHeight) + var(--aug-_W) / 2);
    --aug-_TlInset1JoinRX: calc(var(--aug-_TlWidth) + var(--aug-_W));
    --aug-_TlInset1JoinRY: var(--aug-_W);
    --aug-_TlPathInset1: var(--aug-_TlInset1JoinBX) var(--aug-_TlInset1JoinBY),
                  calc(var(--aug-_W) + var(--aug-_TlWidth)) calc(var(--aug-_TlHeight) + var(--aug-_W) / 2 - var(--aug-_TlNotch)),
                  var(--aug-_TlInset1JoinRX) var(--aug-_TlInset1JoinRY);

    --aug-_TlInset2JoinBX: var(--aug-_WD);
    --aug-_TlInset2JoinBY: calc(var(--aug-_TlHeight) + var(--aug-_WD) / 2);
    --aug-_TlInset2JoinRX: calc(var(--aug-_TlWidth) + var(--aug-_WD));
    --aug-_TlInset2JoinRY: var(--aug-_WD);
    --aug-_TlPathInset2: var(--aug-_TlInset2JoinBX) var(--aug-_TlInset2JoinBY),
                  calc(var(--aug-_WD) + var(--aug-_TlWidth)) calc(var(--aug-_TlHeight) + var(--aug-_WD) / 2 - var(--aug-_TlNotch)),
                  var(--aug-_TlInset2JoinRX) var(--aug-_TlInset2JoinRY);
  }
  [augmented-ui~="tr-clip-y"],
  [augmented-ui~="tr-clip-y"] > [augmented-ui~="tr-inherit"] {
    --aug-tr: 15px; /* size */
    --aug-_TrWidth: var(--aug-tr-width, var(--aug-tr));
    --aug-_TrNotch: var(--aug-_TrWidth); /* how much of height is the notch */
    --aug-_TrHeight: var(--aug-tr-height, calc(var(--aug-tr) + var(--aug-_TrNotch)));
    --aug-_TrJoinLX: calc(100% - var(--aug-_TrWidth));
    --aug-_TrJoinLY: 0px;
    --aug-_TrJoinBX: 100%;
    --aug-_TrJoinBY: var(--aug-_TrHeight);
    --aug-_TrPath: var(--aug-_TrJoinLX) var(--aug-_TrJoinLY),
              calc(100% - var(--aug-_TrWidth)) calc(var(--aug-_TrHeight) - var(--aug-_TrNotch)),
              var(--aug-_TrJoinBX) var(--aug-_TrJoinBY);

    --aug-_TrInset1JoinLX: calc(100% - (var(--aug-_TrWidth) + var(--aug-_W)));
    --aug-_TrInset1JoinLY: var(--aug-_W);
    --aug-_TrInset1JoinBX: calc(100% - var(--aug-_W));
    --aug-_TrInset1JoinBY: calc(var(--aug-_TrHeight) + var(--aug-_W) / 2);
    --aug-_TrPathInset1: var(--aug-_TrInset1JoinLX) var(--aug-_TrInset1JoinLY),
                  calc(100% - var(--aug-_W) - var(--aug-_TrWidth)) calc(var(--aug-_TrHeight) + var(--aug-_W) / 2 - var(--aug-_TrNotch)),
                  var(--aug-_TrInset1JoinBX) var(--aug-_TrInset1JoinBY);

    --aug-_TrInset2JoinLX: calc(100% - (var(--aug-_TrWidth) + var(--aug-_WD)));
    --aug-_TrInset2JoinLY: var(--aug-_WD);
    --aug-_TrInset2JoinBX: calc(100% - var(--aug-_WD));
    --aug-_TrInset2JoinBY: calc(var(--aug-_TrHeight) + var(--aug-_WD) / 2);
    --aug-_TrPathInset2: var(--aug-_TrInset2JoinLX) var(--aug-_TrInset2JoinLY),
                      calc(100% - var(--aug-_WD) - var(--aug-_TrWidth)) calc(var(--aug-_TrHeight) + var(--aug-_WD) / 2 - var(--aug-_TrNotch)),
                      var(--aug-_TrInset2JoinBX) var(--aug-_TrInset2JoinBY);
  }
  [augmented-ui~="br-clip-y"],
  [augmented-ui~="br-clip-y"] > [augmented-ui~="br-inherit"] {
    --aug-br: 15px; /* size */
    --aug-_BrWidth: var(--aug-br-width, var(--aug-br));
    --aug-_BrNotch: var(--aug-_BrWidth); /* how much of height is the notch */
    --aug-_BrHeight: var(--aug-br-height, calc(var(--aug-br) + var(--aug-_BrNotch)));
    --aug-_BrJoinTX: 100%;
    --aug-_BrJoinTY: calc(100% - var(--aug-_BrHeight));
    --aug-_BrJoinLX: calc(100% - var(--aug-_BrWidth));
    --aug-_BrJoinLY: 100%;
    --aug-_BrPath: var(--aug-_BrJoinTX) var(--aug-_BrJoinTY),
              calc(100% - var(--aug-_BrWidth)) calc(100% - var(--aug-_BrHeight) + var(--aug-_BrNotch)),
              var(--aug-_BrJoinLX) var(--aug-_BrJoinLY);

    --aug-_BrInset1JoinTX: calc(100% - var(--aug-_W));
    --aug-_BrInset1JoinTY: calc(100% - (var(--aug-_BrHeight) + var(--aug-_W) / 2));
    --aug-_BrInset1JoinLX: calc(100% - (var(--aug-_BrWidth) + var(--aug-_W)));
    --aug-_BrInset1JoinLY: calc(100% - var(--aug-_W));
    --aug-_BrPathInset1: var(--aug-_BrInset1JoinTX) var(--aug-_BrInset1JoinTY),
                  calc(100% - var(--aug-_W) - var(--aug-_BrWidth)) calc(100% - (var(--aug-_BrHeight) + var(--aug-_W) / 2) + var(--aug-_BrNotch)),
                  var(--aug-_BrInset1JoinLX) var(--aug-_BrInset1JoinLY);

    --aug-_BrInset2JoinTX: calc(100% - var(--aug-_WD));
    --aug-_BrInset2JoinTY: calc(100% - (var(--aug-_BrHeight) + var(--aug-_WD) / 2));
    --aug-_BrInset2JoinLX: calc(100% - (var(--aug-_BrWidth) + var(--aug-_WD)));
    --aug-_BrInset2JoinLY: calc(100% - var(--aug-_WD));
    --aug-_BrPathInset2: var(--aug-_BrInset2JoinTX) var(--aug-_BrInset2JoinTY),
                      calc(100% - var(--aug-_WD) - var(--aug-_BrWidth)) calc(100% - (var(--aug-_BrHeight) + var(--aug-_WD) / 2) + var(--aug-_BrNotch)),
                      var(--aug-_BrInset2JoinLX) var(--aug-_BrInset2JoinLY);
  }
  [augmented-ui~="bl-clip-y"],
  [augmented-ui~="bl-clip-y"] > [augmented-ui~="bl-inherit"] {
    --aug-bl: 15px; /* size */
    --aug-_BlWidth: var(--aug-bl-width, var(--aug-bl));
    --aug-_BlNotch: var(--aug-_BlWidth); /* how much of height is the notch */
    --aug-_BlHeight: var(--aug-bl-height, calc(var(--aug-bl) + var(--aug-_BlNotch)));
    --aug-_BlJoinRX: var(--aug-_BlWidth);
    --aug-_BlJoinRY: 100%;
    --aug-_BlJoinTX: 0px;
    --aug-_BlJoinTY: calc(100% - var(--aug-_BlHeight));
    --aug-_BlPath: var(--aug-_BlJoinRX) var(--aug-_BlJoinRY),
              var(--aug-_BlWidth) calc(100% - var(--aug-_BlHeight) + var(--aug-_BlNotch)),
              var(--aug-_BlJoinTX) var(--aug-_BlJoinTY);

    --aug-_BlInset1JoinRX: calc(var(--aug-_BlWidth) + var(--aug-_W));
    --aug-_BlInset1JoinRY: calc(100% - var(--aug-_W));
    --aug-_BlInset1JoinTX: var(--aug-_W);
    --aug-_BlInset1JoinTY: calc(100% - (var(--aug-_BlHeight) + var(--aug-_W) / 2));
    --aug-_BlPathInset1: var(--aug-_BlInset1JoinRX) var(--aug-_BlInset1JoinRY),
                  calc(var(--aug-_BlWidth) + var(--aug-_W)) calc(100% - (var(--aug-_BlHeight) + var(--aug-_W) / 2) + var(--aug-_BlNotch)),
                  var(--aug-_BlInset1JoinTX) var(--aug-_BlInset1JoinTY);

    --aug-_BlInset2JoinRX: calc(var(--aug-_BlWidth) + var(--aug-_WD));
    --aug-_BlInset2JoinRY: calc(100% - var(--aug-_WD));
    --aug-_BlInset2JoinTX: var(--aug-_WD);
    --aug-_BlInset2JoinTY: calc(100% - (var(--aug-_BlHeight) + var(--aug-_WD) / 2));
    --aug-_BlPathInset2: var(--aug-_BlInset2JoinRX) var(--aug-_BlInset2JoinRY),
                      calc(var(--aug-_BlWidth) + var(--aug-_WD)) calc(100% - (var(--aug-_BlHeight) + var(--aug-_WD) / 2) + var(--aug-_BlNotch)),
                      var(--aug-_BlInset2JoinTX) var(--aug-_BlInset2JoinTY);
  }

  [augmented-ui~="t-clip-y"],
  [augmented-ui~="t-clip-y"] > [augmented-ui~="t-inherit"] {
    --aug-t: 15px; /* size */
    --aug-_TWidth: var(--aug-t-width, var(--aug-t) * 2);
    --aug-_TNotch: calc(var(--aug-_TWidth) / 2); /* how much of height is the notch */
    --aug-_THeight: var(--aug-t-height, calc(var(--aug-t) + var(--aug-_TNotch)));
    --aug-_TOriginX: calc(var(--aug-t-origin-x, calc(var(--aug-_TlJoinRX, 0px) / 2 + var(--aug-_TrJoinLX, 100%) / 2)) + var(--aug-t-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_TPath: , calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2) 0px,
                    calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2) calc(var(--aug-_THeight) - var(--aug-_TNotch)),
                    var(--aug-_TOriginX) var(--aug-_THeight),
                    calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2) calc(var(--aug-_THeight) - var(--aug-_TNotch)),
                    calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2) 0px;

    --aug-_TPathInset1: , calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_W)) var(--aug-_W),
                          calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_W)) calc(var(--aug-_THeight) + var(--aug-_W) / 2 - var(--aug-_TNotch)),
                          var(--aug-_TOriginX) calc(var(--aug-_THeight) + var(--aug-_W) * 1.5),
                          calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_W)) calc(var(--aug-_THeight) + var(--aug-_W) / 2 - var(--aug-_TNotch)),
                          calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_W)) var(--aug-_W);

    --aug-_TPathInset2: , calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_WD)) var(--aug-_WD),
                          calc(var(--aug-_TOriginX) - var(--aug-_TWidth) / 2 - var(--aug-_WD)) calc(var(--aug-_THeight) + var(--aug-_WD) / 2 - var(--aug-_TNotch)),
                          var(--aug-_TOriginX) calc(var(--aug-_THeight) + var(--aug-_WD) * 1.5),
                          calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_WD)) calc(var(--aug-_THeight) + var(--aug-_WD) / 2 - var(--aug-_TNotch)),
                          calc(var(--aug-_TOriginX) + var(--aug-_TWidth) / 2 + var(--aug-_WD)) var(--aug-_WD);
  }
  [augmented-ui~="r-clip-y"],
  [augmented-ui~="r-clip-y"] > [augmented-ui~="r-inherit"] {
    --aug-r: 15px; /* size */
    --aug-_RWidth: var(--aug-r-width, var(--aug-r));
    --aug-_RNotch: var(--aug-_RWidth); /* how much of half the height is the notch */
    --aug-_RHeight: var(--aug-r-height, calc(var(--aug-r) * 2 + var(--aug-_RNotch) * 2));
    --aug-_ROriginY: calc(var(--aug-r-origin-y, calc(var(--aug-_TrJoinBY, 0px) / 2 + var(--aug-_BrJoinTY, 100%) / 2)) + var(--aug-r-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_RPath: , 100% calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2),
                    calc(100% - var(--aug-_RWidth)) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 + var(--aug-_RNotch)),
                    calc(100% - var(--aug-_RWidth)) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 - var(--aug-_RNotch)),
                    100% calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2);

    --aug-_RPathInset1: , calc(100% - var(--aug-_W)) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_W) / 2),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_W))) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_W) / 2 + var(--aug-_RNotch)),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_W))) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_W) / 2 - var(--aug-_RNotch)),
                          calc(100% - var(--aug-_W)) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_W) / 2);

    --aug-_RPathInset2: , calc(100% - var(--aug-_WD)) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_WD) / 2),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_WD))) calc(var(--aug-_ROriginY) - var(--aug-_RHeight) / 2 - var(--aug-_WD) / 2 + var(--aug-_RNotch)),
                          calc(100% - (var(--aug-_RWidth) + var(--aug-_WD))) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_WD) / 2 - var(--aug-_RNotch)),
                          calc(100% - var(--aug-_WD)) calc(var(--aug-_ROriginY) + var(--aug-_RHeight) / 2 + var(--aug-_WD) / 2);
  }
  [augmented-ui~="b-clip-y"],
  [augmented-ui~="b-clip-y"] > [augmented-ui~="b-inherit"] {
    --aug-b: 15px; /* size */
    --aug-_BWidth: var(--aug-b-width, var(--aug-b) * 2);
    --aug-_BNotch: calc(var(--aug-_BWidth) / 2); /* how much of height is the notch */
    --aug-_BHeight: var(--aug-b-height, calc(var(--aug-b) + var(--aug-_BNotch)));
    --aug-_BOriginX: calc(var(--aug-b-origin-x, calc(var(--aug-_BlJoinRX, 0px) / 2 + var(--aug-_BrJoinLX, 100%) / 2)) + var(--aug-b-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_BPath: , calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2) 100%,
                    calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2) calc(100% - var(--aug-_BHeight) + var(--aug-_BNotch)),
                    var(--aug-_BOriginX) calc(100% - var(--aug-_BHeight)),
                    calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2) calc(100% - var(--aug-_BHeight) + var(--aug-_BNotch)),
                    calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2) 100%;

    --aug-_BPathInset1: , calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_W)) calc(100% - var(--aug-_W)),
                          calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_W)) calc(100% - (var(--aug-_BHeight) + var(--aug-_W) / 2 - var(--aug-_BNotch))),
                          var(--aug-_BOriginX) calc(100% - (var(--aug-_BHeight) + var(--aug-_W) * 1.5)),
                          calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_W)) calc(100% - (var(--aug-_BHeight) + var(--aug-_W) / 2 - var(--aug-_BNotch))),
                          calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_W)) calc(100% - var(--aug-_W));

    --aug-_BPathInset2: , calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_WD)) calc(100% - var(--aug-_WD)),
                          calc(var(--aug-_BOriginX) + var(--aug-_BWidth) / 2 + var(--aug-_WD)) calc(100% - (var(--aug-_BHeight) + var(--aug-_WD) / 2 - var(--aug-_BNotch))),
                          var(--aug-_BOriginX) calc(100% - (var(--aug-_BHeight) + var(--aug-_WD) * 1.5)),
                          calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_WD)) calc(100% - (var(--aug-_BHeight) + var(--aug-_WD) / 2 - var(--aug-_BNotch))),
                          calc(var(--aug-_BOriginX) - var(--aug-_BWidth) / 2 - var(--aug-_WD)) calc(100% - var(--aug-_WD));
  }
  [augmented-ui~="l-clip-y"],
  [augmented-ui~="l-clip-y"] > [augmented-ui~="l-inherit"] {
    --aug-l: 15px; /* size */
    --aug-_LWidth: var(--aug-l-width, var(--aug-l));
    --aug-_LNotch: var(--aug-_LWidth); /* how much of half the height is the notch */
    --aug-_LHeight: var(--aug-l-height, calc(var(--aug-l) * 2 + var(--aug-_LNotch) * 2));
    --aug-_LOriginY: calc(var(--aug-l-origin-y, calc(var(--aug-_TlJoinBY, 0px) / 2 + var(--aug-_BlJoinTY, 100%) / 2)) + var(--aug-l-offset, 0px));
    /* edge augs start with their comma path joiner - corners don't */
    --aug-_LPath: , 0px calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2),
                    var(--aug-_LWidth) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 - var(--aug-_LNotch)),
                    var(--aug-_LWidth) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 + var(--aug-_LNotch)),
                    0px calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2);

    --aug-_LPathInset1: , var(--aug-_W) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_W) / 2),
                          calc(var(--aug-_LWidth) + var(--aug-_W)) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_W) / 2 - var(--aug-_LNotch)),
                          calc(var(--aug-_LWidth) + var(--aug-_W)) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_W) / 2 + var(--aug-_LNotch)),
                          var(--aug-_W) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_W) / 2);

    --aug-_LPathInset2: , var(--aug-_WD) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_WD) / 2),
                          calc(var(--aug-_LWidth) + var(--aug-_WD)) calc(var(--aug-_LOriginY) + var(--aug-_LHeight) / 2 + var(--aug-_WD) / 2 - var(--aug-_LNotch)),
                          calc(var(--aug-_LWidth) + var(--aug-_WD)) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_WD) / 2 + var(--aug-_LNotch)),
                          var(--aug-_WD) calc(var(--aug-_LOriginY) - var(--aug-_LHeight) / 2 - var(--aug-_WD) / 2);
  }

  [augmented-ui~="tl-border-el-clean"],
  [augmented-ui~="tl-border-clean"]::after {
    /* if --aug-_W <= --aug-tl */
    /* if border width is less than top-left effect size, don't apply an effect on the inner part of the tl border effect */
    --aug-_TlPathInset1: var(--aug-_W) var(--aug-_W);
  }
  [augmented-ui~="tl-inset-el-clean"],
  [augmented-ui~="tl-inset-clean"]::before,
  [augmented-ui~="tl-border-el-clean"],
  [augmented-ui~="tl-border-clean"]::after {
    /* if --aug-_WD <= --aug-tl OR --aug-_W <= --aug-tl */
    /* if border width + inset distance is less than top-left effect size,
      OR if border width alone is less than top-left effect size,
      don't apply an effect on inset more tl either
    */
    --aug-_TlPathInset2: var(--aug-_WD) var(--aug-_WD);
  }

  [augmented-ui~="tr-border-el-clean"],
  [augmented-ui~="tr-border-clean"]::after { --aug-_TrPathInset1: var(--aug-_100W) var(--aug-_W); }
  [augmented-ui~="tr-inset-el-clean"],
  [augmented-ui~="tr-inset-clean"]::before,
  [augmented-ui~="tr-border-el-clean"],
  [augmented-ui~="tr-border-clean"]::after { --aug-_TrPathInset2: var(--aug-_100WD) var(--aug-_WD); }

  [augmented-ui~="br-border-el-clean"],
  [augmented-ui~="br-border-clean"]::after { --aug-_BrPathInset1: var(--aug-_100W) var(--aug-_100W); }
  [augmented-ui~="br-inset-el-clean"],
  [augmented-ui~="br-inset-clean"]::before,
  [augmented-ui~="br-border-el-clean"],
  [augmented-ui~="br-border-clean"]::after { --aug-_BrPathInset2: var(--aug-_100WD) var(--aug-_100WD); }

  [augmented-ui~="bl-border-el-clean"],
  [augmented-ui~="bl-border-clean"]::after { --aug-_BlPathInset1: var(--aug-_W) var(--aug-_100W); }
  [augmented-ui~="bl-inset-el-clean"],
  [augmented-ui~="bl-inset-clean"]::before,
  [augmented-ui~="bl-border-el-clean"],
  [augmented-ui~="bl-border-clean"]::after { --aug-_BlPathInset2: var(--aug-_WD) var(--aug-_100WD); }

  [augmented-ui~="exe"]::after {
    content: "";
    display: var(--aug-border-bg, none);
  }
  [augmented-ui~="border-el"],
  [augmented-ui~="exe"]::after {
    opacity: var(--aug-border-opacity, 1);
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    pointer-events: none;
    clip-path: polygon(
      var(--aug-_TlPathInset1, var(--aug-_W) var(--aug-_W))
      var(--aug-_TPathInset1, ),
      var(--aug-_TrPathInset1, var(--aug-_100W) var(--aug-_W))
      var(--aug-_RPathInset1, ),
      var(--aug-_BrPathInset1, var(--aug-_100W) var(--aug-_100W))
      var(--aug-_BPathInset1, ),
      var(--aug-_BlPathInset1, var(--aug-_W) var(--aug-_100W))
      var(--aug-_LPathInset1, ),
      var(--aug-_TlInset1JoinBX, var(--aug-_W)) var(--aug-_TlInset1JoinBY, var(--aug-_W)),
      0px var(--aug-_TlInset1JoinBY, var(--aug-_W)),
      0px 100%, 100% 100%, 100% 0px, 0px 0px,
      0px var(--aug-_TlInset1JoinBY, var(--aug-_W)),
      var(--aug-_TlInset1JoinBX, var(--aug-_W)) var(--aug-_TlInset1JoinBY, var(--aug-_W))
    );
  }
  /* This renders a background in an element (or pseudo element) on top of the content. If it can't be clipped, it must not happen. Fallbacks add a css border to it. */
  @supports (--foo: , 0 0) and ((clip-path: polygon(0 0, 100% 0, 50% 50%)) or (-webkit-clip-path: polygon(0 0, 100% 0, 50% 50%))) {
    [augmented-ui~="border-el"],
    [augmented-ui~="exe"]::after {
      background: var(--aug-border-bg, none);
    }
  }
  [augmented-ui~="exe"]::before {
    content: "";
    display: var(--aug-inset-bg, none);
  }
  [augmented-ui~="inset-el"],
  [augmented-ui~="exe"]::before {
    background: var(--aug-inset-bg, none);
    opacity: var(--aug-inset-opacity, 1);
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    clip-path: polygon(
      var(--aug-_TlPathInset2, var(--aug-_WD) var(--aug-_WD))
      var(--aug-_TPathInset2, ),
      var(--aug-_TrPathInset2, var(--aug-_100WD) var(--aug-_WD))
      var(--aug-_RPathInset2, ),
      var(--aug-_BrPathInset2, var(--aug-_100WD) var(--aug-_100WD))
      var(--aug-_BPathInset2, ),
      var(--aug-_BlPathInset2, var(--aug-_WD) var(--aug-_100WD))
      var(--aug-_LPathInset2, )
    );
    z-index: -1;
  }

  /* exe-init does not clip itself and can not spawn pseudo elements for the border/inset. It allows delegated border-el and inset-el children. */
  /* exe-lite clips itself but can not spawn pseudo elements for the border/inset. It allows delegated border-el and inset-el children. */
  [augmented-ui~="exe-init"],
  [augmented-ui~="exe"],
  [augmented-ui~="exe-lite"],
  [augmented-ui~="before"]::before,
  [augmented-ui~="after"]::after {
    position: relative;
    --aug-border: initial;
    --aug-border-bg: initial;
    --aug-border-opacity: initial;
    --aug-inset: initial;
    --aug-inset-bg: initial;
    --aug-inset-opacity: initial;
    --aug-border-radius-fallback: initial;
    --aug-border-radius-fallback-inset: initial;
    --aug-border-fallback-color: initial;
    --aug-_W: var(--aug-border, 0px);
    --aug-_D: var(--aug-inset, 0px);
    --aug-_WD: calc(var(--aug-_W) + var(--aug-_D));
    --aug-_100W: calc(100% - var(--aug-_W));
    --aug-_100WD: calc(100% - var(--aug-_WD));
  }
  [augmented-ui~="exe"],
  [augmented-ui~="exe-lite"],
  [augmented-ui~="before"]::before,
  [augmented-ui~="after"]::after {
    clip-path: polygon(
      var(--aug-_TlPath, 0px 0px)
      var(--aug-_TPath, ),
      var(--aug-_TrPath, 100% 0px)
      var(--aug-_RPath, ),
      var(--aug-_BrPath, 100% 100%)
      var(--aug-_BPath, ),
      var(--aug-_BlPath, 0px 100%)
      var(--aug-_LPath, )
    );
  }

  /* Full featured webkit support: Chrome 51-54, Safari 9.1+, iOS Safari >= 11, Opera 38-41, Opera mobile 46+, UC Browser 12+, Samsung Internet 5+ */
  @supports (--foo: , 0 0) and (-webkit-clip-path: polygon(0 0, 100% 0, 50% 50%)) and (not (clip-path: polygon(0 0, 100% 0, 50% 50%))) {
    [augmented-ui~="border-el"],
    [augmented-ui~="exe"]::after {
      -webkit-clip-path: polygon(
        var(--aug-_TlPathInset1, var(--aug-_W) var(--aug-_W))
        var(--aug-_TPathInset1, ),
        var(--aug-_TrPathInset1, var(--aug-_100W) var(--aug-_W))
        var(--aug-_RPathInset1, ),
        var(--aug-_BrPathInset1, var(--aug-_100W) var(--aug-_100W))
        var(--aug-_BPathInset1, ),
        var(--aug-_BlPathInset1, var(--aug-_W) var(--aug-_100W))
        var(--aug-_LPathInset1, ),
        var(--aug-_TlInset1JoinBX, var(--aug-_W)) var(--aug-_TlInset1JoinBY, var(--aug-_W)),
        0px var(--aug-_TlInset1JoinBY, var(--aug-_W)),
        0px 100%, 100% 100%, 100% 0px, 0px 0px,
        0px var(--aug-_TlInset1JoinBY, var(--aug-_W)),
        var(--aug-_TlInset1JoinBX, var(--aug-_W)) var(--aug-_TlInset1JoinBY, var(--aug-_W))
      );
    }
    [augmented-ui~="inset-el"],
    [augmented-ui~="exe"]::before {
      -webkit-clip-path: polygon(
        var(--aug-_TlPathInset2, var(--aug-_WD) var(--aug-_WD))
        var(--aug-_TPathInset2, ),
        var(--aug-_TrPathInset2, var(--aug-_100WD) var(--aug-_WD))
        var(--aug-_RPathInset2, ),
        var(--aug-_BrPathInset2, var(--aug-_100WD) var(--aug-_100WD))
        var(--aug-_BPathInset2, ),
        var(--aug-_BlPathInset2, var(--aug-_WD) var(--aug-_100WD))
        var(--aug-_LPathInset2, )
      );
    }
    [augmented-ui~="exe"],
    [augmented-ui~="exe-lite"],
    [augmented-ui~="before"]::before,
    [augmented-ui~="after"]::after {
      -webkit-clip-path: polygon(
        var(--aug-_TlPath, 0px 0px)
        var(--aug-_TPath, ),
        var(--aug-_TrPath, 100% 0px)
        var(--aug-_RPath, ),
        var(--aug-_BrPath, 100% 100%)
        var(--aug-_BPath, ),
        var(--aug-_BlPath, 0px 100%)
        var(--aug-_LPath, )
      );
    }
  }

  /* Eliptical border radius fallback. (browsers without (-webkit-)clip-path or browsers that don't supprot css vars with leading or trailing commas) */
  /* pre chromium Edge and safari iOS < 11 */
  @supports (not ((--foo: , 0 0) and ((clip-path: polygon(0 0, 100% 0, 50% 50%)) or (-webkit-clip-path: polygon(0 0, 100% 0, 50% 50%))))) {
    /* vvv almost all of the code here avoids this: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/17410857/ for 5 layers of inheritance vvv */

    /* Step 1: set up any pseduo-level vars on main elements first (setup for any el that uses them to avoid repeat, not just pseudo parents) */
    [augmented-ui~="exe"],
    [augmented-ui~="before"],
    [augmented-ui~="after"],
    [augmented-ui~="border-el"] {
      --aug-_AutoBorderRadiusFallback: var(--aug-_TlWidth, var(--aug-tl, 0px))
                                      var(--aug-_TrWidth, var(--aug-tr, 0px))
                                      var(--aug-_BrWidth, var(--aug-br, 0px))
                                      var(--aug-_BlWidth, var(--aug-bl, 0px)) /
                                      var(--aug-_TlHeight, var(--aug-tl, 0px))
                                      var(--aug-_TrHeight, var(--aug-tr, 0px))
                                      var(--aug-_BrHeight, var(--aug-br, 0px))
                                      var(--aug-_BlHeight, var(--aug-bl, 0px));
      /* used on main el (or main el pseudo delegates) and main exe::after / border-el */
      --aug-_PrimaryBorderRadiusFallbackResolved: var(--aug-border-radius-fallback, var(--aug-_AutoBorderRadiusFallback));
    }
    [augmented-ui~="exe"],
    [augmented-ui~="inset-el"] {
      --aug-_InsetAutoBorderRadiusFallback: calc(var(--aug-_TlWidth, var(--aug-tl, 0px)) - var(--aug-_WD, 0px))
                                            calc(var(--aug-_TrWidth, var(--aug-tr, 0px)) - var(--aug-_WD, 0px))
                                            calc(var(--aug-_BrWidth, var(--aug-br, 0px)) - var(--aug-_WD, 0px))
                                            calc(var(--aug-_BlWidth, var(--aug-bl, 0px)) - var(--aug-_WD, 0px)) /
                                            calc(var(--aug-_TlHeight, var(--aug-tl, 0px)) - var(--aug-_WD, 0px))
                                            calc(var(--aug-_TrHeight, var(--aug-tr, 0px)) - var(--aug-_WD, 0px))
                                            calc(var(--aug-_BrHeight, var(--aug-br, 0px)) - var(--aug-_WD, 0px))
                                            calc(var(--aug-_BlHeight, var(--aug-bl, 0px)) - var(--aug-_WD, 0px));
      /* used on exe::before and inset-el */
      --aug-_InsetBorderRadiusFallbackResolved: var(--aug-border-radius-fallback-inset, var(--aug-_InsetAutoBorderRadiusFallback));
      --aug-_InsetDistanceResolved: var(--aug-_WD, 0px);
      --aug-_InsetBGResolved: var(--aug-inset-bg, none);
      --aug-_InsetOpacityResolved: var(--aug-inset-opacity, 1);
    }
    [augmented-ui~="exe"],
    [augmented-ui~="border-el"] {
      --aug-_BorderNoColorResolved: var(--aug-_W, 0px) solid;
      --aug-_BorderColorResolved: var(--aug-border-fallback-color, var(--aug-border-bg, transparent));
      --aug-_BorderOpacityResolved: var(--aug-border-opacity, 1);
    }

    /* Step 2: apply CSS as normal to their respective parts, using only resolved form of vars as needed */
    [augmented-ui~="inset-el"],
    [augmented-ui~="exe"]::before {
      left: var(--aug-_InsetDistanceResolved);
      top: var(--aug-_InsetDistanceResolved);
      right: var(--aug-_InsetDistanceResolved);
      bottom: var(--aug-_InsetDistanceResolved);
      border-radius: var(--aug-_InsetBorderRadiusFallbackResolved, 0px);
      background: var(--aug-_InsetBGResolved);
      opacity: var(--aug-_InsetOpacityResolved);
      /* clip-path causes a new stacking context and hides overflow, this reproduces that */
      transform: translateZ(0px);
      overflow: hidden;
    }
    [augmented-ui~="border-el"],
    [augmented-ui~="exe"]::after {
      overflow: hidden;
      transform: translateZ(0px);
      background: transparent!important;
      border-radius: var(--aug-_PrimaryBorderRadiusFallbackResolved, 0px);
      border: var(--aug-_BorderNoColorResolved) var(--aug-_BorderColorResolved);
      opacity: var(--aug-_BorderOpacityResolved);
    }
    [augmented-ui~="exe"],
    [augmented-ui~="before"]::before,
    [augmented-ui~="after"]::after {
      border-radius: var(--aug-_PrimaryBorderRadiusFallbackResolved, 0px);
      /* clip-path causes a new stacking context and hides overflow, this reproduces that */
      transform: translateZ(0px);
      overflow: hidden;
    }

    /* Step 3 part 1: For any pseudo children using resoved vars,
      create duplicate vars, with depth dependent names, of each resolved var on their parent, for the first depth,
      then use the depth copy on pseudo children of that depth to override the broken one
    */
    [augmented-ui] [augmented-ui~="exe"] {
      --aug-_CDEPTH1_BorderNoColor: var(--aug-_BorderNoColorResolved);
      --aug-_CDEPTH1_BorderColor: var(--aug-_BorderColorResolved);
      --aug-_CDEPTH1_InsetDistance: var(--aug-_InsetDistanceResolved);
      --aug-_CDPETH1_PrimaryBorderRadius: var(--aug-_PrimaryBorderRadiusFallbackResolved, 0px);
      --aug-_CDEPTH1_InsetBorderRadius: var(--aug-_InsetBorderRadiusFallbackResolved, 0px);
      --aug-_CDEPTH1_InsetBG: var(--aug-_InsetBGResolved);
      --aug-_CDEPTH1_InsetOpacity: var(--aug-_InsetOpacityResolved);
      --aug-_CDEPTH1_BorderOpacity: var(--aug-_BorderOpacityResolved);
    }
    [augmented-ui] [augmented-ui~="before"],
    [augmented-ui] [augmented-ui~="after"] {
      --aug-_CDPETH1_PrimaryBorderRadiusDelegated: var(--aug-_PrimaryBorderRadiusFallbackResolved, 0px);
    }
    [augmented-ui] [augmented-ui~="exe"]::after {
      border:        var(--aug-_CDEPTH1_BorderNoColor) var(--aug-_CDEPTH1_BorderColor);
      border-radius: var(--aug-_CDPETH1_PrimaryBorderRadius);
      opacity:       var(--aug-_CDEPTH1_BorderOpacity);
      display:       var(--aug-_CDEPTH1_BorderColor);
    }
    [augmented-ui] [augmented-ui~="exe"]::before {
      left:          var(--aug-_CDEPTH1_InsetDistance);
      top:           var(--aug-_CDEPTH1_InsetDistance);
      right:         var(--aug-_CDEPTH1_InsetDistance);
      bottom:        var(--aug-_CDEPTH1_InsetDistance);
      border-radius: var(--aug-_CDEPTH1_InsetBorderRadius);
      background:    var(--aug-_CDEPTH1_InsetBG);
      opacity:       var(--aug-_CDEPTH1_InsetOpacity);
      display:       var(--aug-_CDEPTH1_InsetBG);
    }
    [augmented-ui] [augmented-ui~="before"]::before,
    [augmented-ui] [augmented-ui~="after"]::after {
      border-radius: var(--aug-_CDPETH1_PrimaryBorderRadiusDelegated);
    }

    /* Step 3 part 2: copy step 3 part 1, increase the number on the depth vars, prepend the depth selector, repeat until supported dpeth reached */
    /* Note: preprosessor could make this painless */

    /* 2 deep */
    [augmented-ui] [augmented-ui] [augmented-ui~="exe"] {
      --aug-_CDEPTH2_BorderNoColor: var(--aug-_BorderNoColorResolved);
      --aug-_CDEPTH2_BorderColor: var(--aug-_BorderColorResolved);
      --aug-_CDEPTH2_InsetDistance: var(--aug-_InsetDistanceResolved);
      --aug-_CDPETH2_PrimaryBorderRadius: var(--aug-_PrimaryBorderRadiusFallbackResolved, 0px);
      --aug-_CDEPTH2_InsetBorderRadius: var(--aug-_InsetBorderRadiusFallbackResolved, 0px);
      --aug-_CDEPTH2_InsetBG: var(--aug-_InsetBGResolved);
      --aug-_CDEPTH2_InsetOpacity: var(--aug-_InsetOpacityResolved);
      --aug-_CDEPTH2_BorderOpacity: var(--aug-_BorderOpacityResolved);
    }
    [augmented-ui] [augmented-ui] [augmented-ui~="before"],
    [augmented-ui] [augmented-ui] [augmented-ui~="after"] {
      --aug-_CDPETH2_PrimaryBorderRadiusDelegated: var(--aug-_PrimaryBorderRadiusFallbackResolved, 0px);
    }
    [augmented-ui] [augmented-ui] [augmented-ui~="exe"]::after {
      border:        var(--aug-_CDEPTH2_BorderNoColor) var(--aug-_CDEPTH2_BorderColor);
      border-radius: var(--aug-_CDPETH2_PrimaryBorderRadius);
      opacity:       var(--aug-_CDEPTH2_BorderOpacity);
      display:       var(--aug-_CDEPTH2_BorderColor);
    }
    [augmented-ui] [augmented-ui] [augmented-ui~="exe"]::before {
      left:          var(--aug-_CDEPTH2_InsetDistance);
      top:           var(--aug-_CDEPTH2_InsetDistance);
      right:         var(--aug-_CDEPTH2_InsetDistance);
      bottom:        var(--aug-_CDEPTH2_InsetDistance);
      border-radius: var(--aug-_CDEPTH2_InsetBorderRadius);
      background:    var(--aug-_CDEPTH2_InsetBG);
      opacity:       var(--aug-_CDEPTH2_InsetOpacity);
      display:       var(--aug-_CDEPTH2_InsetBG);
    }
    [augmented-ui] [augmented-ui] [augmented-ui~="before"]::before,
    [augmented-ui] [augmented-ui] [augmented-ui~="after"]::after {
      border-radius: var(--aug-_CDPETH2_PrimaryBorderRadiusDelegated);
    }
    /* 3 deep */
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="exe"] {
      --aug-_CDEPTH3_BorderNoColor: var(--aug-_BorderNoColorResolved);
      --aug-_CDEPTH3_BorderColor: var(--aug-_BorderColorResolved);
      --aug-_CDEPTH3_InsetDistance: var(--aug-_InsetDistanceResolved);
      --aug-_CDPETH3_PrimaryBorderRadius: var(--aug-_PrimaryBorderRadiusFallbackResolved, 0px);
      --aug-_CDEPTH3_InsetBorderRadius: var(--aug-_InsetBorderRadiusFallbackResolved, 0px);
      --aug-_CDEPTH3_InsetBG: var(--aug-_InsetBGResolved);
      --aug-_CDEPTH3_InsetOpacity: var(--aug-_InsetOpacityResolved);
      --aug-_CDEPTH3_BorderOpacity: var(--aug-_BorderOpacityResolved);
    }
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="before"],
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="after"] {
      --aug-_CDPETH3_PrimaryBorderRadiusDelegated: var(--aug-_PrimaryBorderRadiusFallbackResolved, 0px);
    }
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="exe"]::after {
      border:        var(--aug-_CDEPTH3_BorderNoColor) var(--aug-_CDEPTH3_BorderColor);
      border-radius: var(--aug-_CDPETH3_PrimaryBorderRadius);
      opacity:       var(--aug-_CDEPTH3_BorderOpacity);
      display:       var(--aug-_CDEPTH3_BorderColor);
    }
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="exe"]::before {
      left:          var(--aug-_CDEPTH3_InsetDistance);
      top:           var(--aug-_CDEPTH3_InsetDistance);
      right:         var(--aug-_CDEPTH3_InsetDistance);
      bottom:        var(--aug-_CDEPTH3_InsetDistance);
      border-radius: var(--aug-_CDEPTH3_InsetBorderRadius);
      background:    var(--aug-_CDEPTH3_InsetBG);
      opacity:       var(--aug-_CDEPTH3_InsetOpacity);
      display:       var(--aug-_CDEPTH3_InsetBG);
    }
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="before"]::before,
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="after"]::after {
      border-radius: var(--aug-_CDPETH3_PrimaryBorderRadiusDelegated);
    }
    /* 4 deep */
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="exe"] {
      --aug-_CDEPTH4_BorderNoColor: var(--aug-_BorderNoColorResolved);
      --aug-_CDEPTH4_BorderColor: var(--aug-_BorderColorResolved);
      --aug-_CDEPTH4_InsetDistance: var(--aug-_InsetDistanceResolved);
      --aug-_CDPETH4_PrimaryBorderRadius: var(--aug-_PrimaryBorderRadiusFallbackResolved, 0px);
      --aug-_CDEPTH4_InsetBorderRadius: var(--aug-_InsetBorderRadiusFallbackResolved, 0px);
      --aug-_CDEPTH4_InsetBG: var(--aug-_InsetBGResolved);
      --aug-_CDEPTH4_InsetOpacity: var(--aug-_InsetOpacityResolved);
      --aug-_CDEPTH4_BorderOpacity: var(--aug-_BorderOpacityResolved);
    }
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="before"],
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="after"] {
      --aug-_CDPETH4_PrimaryBorderRadiusDelegated: var(--aug-_PrimaryBorderRadiusFallbackResolved, 0px);
    }
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="exe"]::after {
      border:        var(--aug-_CDEPTH4_BorderNoColor) var(--aug-_CDEPTH4_BorderColor);
      border-radius: var(--aug-_CDPETH4_PrimaryBorderRadius);
      opacity:       var(--aug-_CDEPTH4_BorderOpacity);
      display:       var(--aug-_CDEPTH4_BorderColor);
    }
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="exe"]::before {
      left:          var(--aug-_CDEPTH4_InsetDistance);
      top:           var(--aug-_CDEPTH4_InsetDistance);
      right:         var(--aug-_CDEPTH4_InsetDistance);
      bottom:        var(--aug-_CDEPTH4_InsetDistance);
      border-radius: var(--aug-_CDEPTH4_InsetBorderRadius);
      background:    var(--aug-_CDEPTH4_InsetBG);
      opacity:       var(--aug-_CDEPTH4_InsetOpacity);
      display:       var(--aug-_CDEPTH4_InsetBG);
    }
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="before"]::before,
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="after"]::after {
      border-radius: var(--aug-_CDPETH4_PrimaryBorderRadiusDelegated);
    }
    /* 5 deep */
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="exe"] {
      --aug-_CDEPTH5_BorderNoColor: var(--aug-_BorderNoColorResolved);
      --aug-_CDEPTH5_BorderColor: var(--aug-_BorderColorResolved);
      --aug-_CDEPTH5_InsetDistance: var(--aug-_InsetDistanceResolved);
      --aug-_CDPETH5_PrimaryBorderRadius: var(--aug-_PrimaryBorderRadiusFallbackResolved, 0px);
      --aug-_CDEPTH5_InsetBorderRadius: var(--aug-_InsetBorderRadiusFallbackResolved, 0px);
      --aug-_CDEPTH5_InsetBG: var(--aug-_InsetBGResolved);
      --aug-_CDEPTH5_InsetOpacity: var(--aug-_InsetOpacityResolved);
      --aug-_CDEPTH5_BorderOpacity: var(--aug-_BorderOpacityResolved);
    }
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="before"],
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="after"] {
      --aug-_CDPETH5_PrimaryBorderRadiusDelegated: var(--aug-_PrimaryBorderRadiusFallbackResolved, 0px);
    }
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="exe"]::after {
      border:        var(--aug-_CDEPTH5_BorderNoColor) var(--aug-_CDEPTH5_BorderColor);
      border-radius: var(--aug-_CDPETH5_PrimaryBorderRadius);
      opacity:       var(--aug-_CDEPTH5_BorderOpacity);
      display:       var(--aug-_CDEPTH5_BorderColor);
    }
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="exe"]::before {
      left:          var(--aug-_CDEPTH5_InsetDistance);
      top:           var(--aug-_CDEPTH5_InsetDistance);
      right:         var(--aug-_CDEPTH5_InsetDistance);
      bottom:        var(--aug-_CDEPTH5_InsetDistance);
      border-radius: var(--aug-_CDEPTH5_InsetBorderRadius);
      background:    var(--aug-_CDEPTH5_InsetBG);
      opacity:       var(--aug-_CDEPTH5_InsetOpacity);
      display:       var(--aug-_CDEPTH5_InsetBG);
    }
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="before"]::before,
    [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui] [augmented-ui~="after"]::after {
      border-radius: var(--aug-_CDPETH5_PrimaryBorderRadiusDelegated);
    }
    /* ^^^ almost all of the code here avoids this: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/17410857/ for 5 layers of inheritance ^^^ */
  }
  </style>
  `;
};

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
    <div  augmented-ui="tl-clip br-clip exe" style="background-color:#e2e1e1; border-radius: 0.5rem;">
      <table style="width:100%;">
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
              <b style="font-size: 100%;">${article.title}</b>
            </center>
          </td>
        </tr>
      </table>
      <table style="width:100%;">
        <tr style="width:100%">
          <td style="width:100%; font-size: 100%; border-bottom: #d2d2d2 0.025rem solid;">
            ${article.snippet}
          </td>
        </tr>
      </table>
      <table style="width:100%;">
        <tr style="width:100%">
          <td style="width:95%; font-size: 60%; overflow:hidden; text-overflow:ellipsis">
            ${article.url}
            </td>
            <td style="width:5%;">
              <center style="font-size: 100%">❭</center>
            </td>
          </tr>
      </table>
      <table style="width:100%; margin-bottom:1rem">
        <tr style="width:100%">
          <td style="width:50%">
            <center style="font-size: 80%">${article.source}</center>
          </td>
          <td style="width:50%">
            <center style="font-size: 80%">${article.timeAgo}</center>
          </td>
        </tr>
      </table>
    </div>
    `;
  });

  return items;
};