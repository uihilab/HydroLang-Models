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

<p align="center">
 <img src = "https://github.com/uihilab/HydroLang-Models/blob/main/data/img/hydroLang_api_demo.gif" alt="animated" width="70%" />
</p>

From there onwards, the developer can use the library in whichever means they see fit. There are three ways to run HydroLang: 

* Using the API directly.
* Using the BMI compliant version for simulations.
* Using the HTML driven applications from HL-ML.

## Using the API directly

Declaring a function can be done either within an HTML script tag or through an external file that contains the functions. For example:

```javascript
//A HydroLang instance must be declared previous to any function call.
const hydro = new HydroLang();
var retrieveData = hydro.data.retrieve({params: {param1: "someVal", param2: "someVal"}, args:{arg1: "someVal", arg2: "someVal"})
```

Since some of the functions run asynchronously, running the script through the HTML file may cause the desired function execution to not proceed as expected (e.g. most functions of the data and maps module). There are several approaches to explore HydroLang's features if you want to develop a specific application. For instance, you can use the buttons in the browser's user interface to attach the necessary functions correctly declared in the HTML script (example found on this page).

<p align="center">
 <img src = "https://github.com/uihilab/HydroLang-Models/blob/main/data/img/hydroLang_UI_demo.gif" alt="animated" width="70%" />
</p>


## Using the BMI compliant version

The [BMI](https://csdms.colorado.edu/wiki/BMI) compliant version of HydroLang allows users to declare models through steering files rather than using the API directly, for HydroLang releases 1.1.x onwards. A thorough explanation on how to declare the functions for a specific use case can be seen in [this example](https://github.com/uihilab/HydroLang/tree/master/hydrolang/bmi-implementation). Running a simulation requires the use of the HydroLang-Compliant class for BMI, declared as:

```html
<script
type = "module"
src = "./hydrolang/hydroBMIInstance.js"
> 
```

A JSON-type steering file containing details on the model, the methods to be utilized, and any additional implementation must be declared and called within the script running the HTML file in order to execute a particular simulation. The simulations will proceed as planned after the model's global variables are set and the steering file is executed using the API through the console or a specified UI.

A steering file should contain the following:

```javascript
{
    modelName: "some_model_name",
    modelCode: "some_model_code",
    moduleName: "HydroLang_module",
    functionName: "module_function",
    args:{
        //arguments required by the function(s)
    },
    params:{
        //parameters required by the function(s)
    },
    data:{
        //specific data required by the function(s)
    }
}
```

The steering file will run a HydroLang instance that needs to be tailored to the user's specific needs. An example of a data retrieval use can be found in [this link](https://github.com/uihilab/HydroLang/tree/master/hydrolang/bmi-implementation/case-study).

## Using HTML elements

The HydroLang framework is used by HL-ML, an HTML-based interface that makes it simple to do environmental and hydrological analyses.
It operates according to the web components specification, which enables greater integration between the usage of semantically driven HTML instructions and the use of the native JS environment of the browser to process instructions with little coding.

To use, declare the following in the top of your HTML file:

```html
<link rel="stylesheet" href="../lib/libraries/hydrolang/external/css/hydrolang.css"/>
<script type="module" src="../lib/main.js"></script>
```

In the body of the document, include the following to declare components:

```html
<body>
    <div id="hydrolang">
      <hydrolang-ml>
        <!--Components go here!-->
      </hydrolang-ml>
  </div>
</body>
```

Every function usage can be done using the following structure (the "-here" separation not required): 

```html 
<hydrolang-ml>
    <analyze-mod method="someFunctionName">
        <parameters-here someAtrr="Some Attribute"></parameters-here>
        <arguments-here somArgs="someArguments"></arguments-here>
        <dataset-here>[someData1, someData2...]</dataset-here>
    </analyze-mod>
</hydrolang-ml>
```
To see more examples and use cases, please visit [this link](https://github.com/uihilab/HydroLang-ML).