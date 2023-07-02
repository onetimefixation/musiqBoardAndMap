



Changed the type of "airline" file to .txt since most servers do not allow reading of .dat files that ChatGPT used. Changed the fetch in the code to handle this.

Moved the code to a temporary test server since running locally gives CORS errors.  When ready to go live, I'll place it on a commercial server.

Changed background to give more of an open look.  Could go back to all black if needed.

Added logo.

Took out the "Arrivals" and "Departures" titles.  In its place, put that verbiage in the search boxes themselves to save some space.

To do:
Resize logo

Move time from where it is to top-right

* Add missing code that was left out when ChatGPT added to the "map"
 - expand the map to 800 or more px
 - the "flight data" section expands automatically when the data is entered.  Therefore, just need to add the code that seems to have been left out when ChatGPT added the "map"
 - expand the inset of the overlay of the "flight-board" to show the missing fields.  For some reason, the code is there but not showing on the overlay when I expanded it while testing.

* Change the asthetics of of the "flight-data" box

 * Realign the search boxes

* Move all the code to GitHub for future sharing

* Move the finished code to a commercial server so it is accessible all the time