# HydroLang-Models
This space is dedicated for users with an interest of using HydroLang to add workflows / scripts to retrieve / filter hydrological and supporting data here. 

In both situations, the HTML file containing the aforementioned script at the top must also contain the script necessary to execute the JavaScript commands:

```html
<script
 type = "module"
 src= "./hydrolang/hydro.js"
></script>
```
Using pure client side development environments, we recommend using [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to serve the HTML file running HydroLang, but any other developing environment or external server than can run the HTML file can be used.

The script tag enables the HydroLang library globaly throughout the window space the HTML file is running on. This means that all the functionalities of HydroLang can be run using the developer console from the web browser as shown in the following example:

![Demo](https://github.com/uihilab/HydroLang-Models/data/img/hydroLang_api_demo.gif)

From there onwards, the developer can use the library in whichever means they see fit. There are two ways to run HydroLang models: 

* Using the API within a JavaScript file to access the framework's features, or 
* Using the BMI compliant version for simulations.

## Using the API directly

Declaring a function can be done either within an HTML script tag or through an external file that contains the functions. For example:

```javascript
//A HydroLang instance must be declared previous to any function call.
const hydro = new HydroLang();
var retrieveData = hydro.data.retrieve({params: {param1: "someVal", param2: "someVal"}, args:{arg1: "someVal", arg2: "someVal"})
```

## Using the BMI compliant version

The [BMI](https://csdms.colorado.edu/wiki/BMI) compliant version of HydroLang allows users to declare models through steering files rather than using the API directly, for HydroLang releases 1.1.x onwards. A thorough explanation on how to declare the functions for a specific use case can be seen in [this example](https://github.com/uihilab/HydroLang/tree/master/hydrolang/bmi-implementation). To run a specific simulation, A JSON type steering file that contains information about the model, functions to be used as well as any further implementation must be declared and called within the script running the HTML file. 