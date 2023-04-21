# Activity Generator

## Wireframing
![website wireframe](/images/wireframe.png)
This was my original design for the project. After delving further into the API documentation, I needed to adjust my proposal since the API only allows one parameter to be called at a time.
![updated wireframe](/images/newWireframe.png)

## Development Process
The API I am utilizing in this project can be found here:
[Bored API](https://www.boredapi.com/documentation).

The functional goal for the project was to have a list of activity categories the user could choose. When one is chosen, the API is called and returns a response object that gives the user an activity to do.

The API's response object includes:
- the description of the activity
- the accessibility factor of the activity (how possible an event is to do)
- the type (category) of activity
- the numbers of participants the activity could involve
- the price factor
- the activity's unique key (could be used in queries)

An example response can be seen below:
![example API response](/images/response.png)

I chose to display the description (i.e. the activity itself), the number of participants, the price (multiplied by 10 for a more clear output to the user), and the accessibility (also multiplied by 10). I omitted the type as it was selected by the user during the query. The key was also omitted since I did not feel it was relevant data to the user.

Buttons for each type of activity are displayed on the filter page. The type names match the API query syntax to ensure when the user selects their desired category, the result is routed through a Component and rendered on the page; each type has its own Component page with the query-by-type hardcoded in the fetch.

