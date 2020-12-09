# Fast Trackables
 
Google Apps Script to simplify bulk changes on the [Clark County School District](https://ccsd.net)'s Trackables Inventory system

## Concept

This is a WIP, but here is the idea...

**Prerequisites**
* All trackable items will be barcoded with serial numbers.
* Each campus will have a barcode map with room numbers and commands.

**Physical inventory process**
1. When taking physical inventory, the user scans the ROOM command followed by the room number to indicate the location.
2. Each serial in that room is scanned.
3. User moves onto the next room and repeats.  

This can be done without a computer using a bacode scanner memory function.

**Following that**
1. User will export existing inventory into a Google Sheet.
2. User will dump the scanned data from above into a second sheet.
3. User will run this utility.
4. Utility will analyze the scanned data, update room numbers for items that have moved, and notify the user of missing items that were not accounted for.

## License

[ISC](LICENSE)

## Author

[Mitchell Cooper](https://mitchellcooper.me), <mitchell@mitchellcooper.me>
