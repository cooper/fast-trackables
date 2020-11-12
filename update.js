function update() {
    let trackables = ss.getSheetByName('Trackables')
    let scans = ss.getSheetByName('Scans')

    // can't find Trackables
    if (!trackables)
        return ui.alert(
            'The "Trackables" sheet which should contain your Trackables export was not found.',
            ui.ButtonSet.OK
        )

    // can't find Scans
    if (!scans)
        return ui.alert(
            'The "Scans" sheet which should contain your scanned data was not found.',
            ui.ButtonSet.OK
        )

    // make sure column count is right
    let cols = trackables.getMaxColumns()
    if (cols != 40 && cols != 52)
        return ui.alert(
            'Your "Trackables" sheet has the wrong number of columns. It should be exactly 40 or 52 columns wide. ' +
            'Make sure you have the "Equipment Download" view selected before downloading the export from Trackables.',
            ui.ButtonSet.OK
        )

    ui.alert("YES")
}