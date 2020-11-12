/** @OnlyCurrentDoc */

let ui = SpreadsheetApp.getUi()
let ss = SpreadsheetApp.getActiveSpreadsheet()

function onOpen(e) {
        ui.createMenu('Trackables')
        .addItem('Update', 'update')                // update rows with scan results
        .addItem('Verify', 'verify')                // check for missing required info/other issues
        .addItem('Finalize', 'finalize')            // unhide columns, etc.
        .addToUi()
  }

