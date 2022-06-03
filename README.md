# EventsApp
Events app made with MyHelsinki Open API. React.js, Node.js, Express.js, Tailwind CSS. 
---------------------------------------------------------------------------

This app has two tabs that show events happening at the major exhibition spaces in Helsinki.

Each exhibition place has a description containing its address, working hours (with the current day of week in bold), and entrance fees. This description is revealed and hidden with a click. 

Below, each place has a carousel gallery that responds to window resizing and is navigated with arrow clicks. Depending on screen size, this gallery shows 1-3 events at a time. Every event card has a representative image, title, and the start and end times of the event. When the title of an event is clicked, the card is overlayed with a detailed, scrollable description of an event along with an external link and a button to exit the description view.

The information for the event cards is fetched through the backend of the app from MyHelsinki Open API (https://open-api.myhelsinki.fi/) using v1events calls, currently based on event place coordinates. The styling of the app was done with Tailwind CSS.

<img src="/EventsApp/events-frontend/public/screenshot.png" alt="Project screenshot">

https://helsinki-events.herokuapp.com/


