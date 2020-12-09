# Fast Trackables
 
Google Apps Script to simplify bulk changes on the [Clark County School District](https://ccsd.net)'s Trackables Inventory system

## Concept

This is a WIP, but here is the idea...

**Prerequisites**
* All trackable items are barcoded with serial numbers.
* Each campus has a barcode map with room numbers and commands.

**Physical inventory process**
1. When taking physical inventory, the user scans the ROOM command followed by the room number to indicate the location.
2. Each serial in that room is scanned.
3. User moves onto the next room and repeats.  

This can be done without a computer using a bacode scanner memory function.

**Following that**
1. User exports existing inventory into a Google Sheet.
2. User dumps the scanned data from above into a second sheet.
3. User runs this utility.
4. Utility analyzes scanned data, updates room numbers for items that have moved, and notifies the user of missing items that are not accounted for.

**Other ideas**
* UNDO command to revert bad scans
* COMMENT command to add notes to the Comments if using a computer during physical inventory

## License

[ISC](LICENSE)

## Author

[Mitchell Cooper](https://mitchellcooper.me), <mitchell@mitchellcooper.me>
