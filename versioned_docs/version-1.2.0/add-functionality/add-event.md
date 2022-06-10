---
title: Add Event Handling
date: Last Modified
permalink: /add-functionality/add-event.html
eleventyNavigation:
  parent: Add Functionality to an Embedded Dossier
  key: Add Event Handling
---

Events allow an embedded dossier to communicate with the container page. You can listen for these events and provide event handler functions to respond to them. You use helper methods in the Embedding API to add event handling. For example, you can add code to capture selection events from one dossier and apply them as a filter to a second dossier.

To help you get started, we have provided a [sample application](#Sample_application) that embeds a dossier and adds event handling, as well as a description of [events](#Events), [event handlers](#Event_handlers), and [wrapper functions](#Wrapper_functions) you can use to handle additional events.

This sample is provided as an HTML file, which must be hosted on a web server. It cannot be run as a standalone file.

## Sample Application

The following sample shows how to leverage the Embedding API to embed a dossier and capture selection events from one dossier and apply them as a filter to a second dossier. You use the sample application that is provided for you and configure the code for your environment.

To deploy this sample in your environment, either:

1. Save the [code sample](#Code_sample) below to an HTML file hosted on the same web application server as the MicroStrategy Library application.

   If the application server is different from the server running the MicroStrategyLibrary application, you may need to [perform additional configuration to support Cross-Origin Requests (CORS)](../config.html).

   or

   [Download](https://www2.microstrategy.com/producthelp/2021/downloads/EmbeddingSDK/EmbeddingSample_EventHandling.zip) the HTML file provided for you. This file contains the [sample code shown below](#Code_sample).

1. Configure the HTML file for your environment.

   1. Edit the value of the src attribute in the `<script>` tag shown below so that it points to the embeddinglib.js within the javascript folder of your MicroStrategyLibrary application.

   ```html
     <!-- Replace path to point to the embeddingLib in your environment -->
     <script src="https://<YOUR_SERVER>/MicroStrategyLibrary/javascript/embeddinglib.js"></script>
     <script>
   ```

   1. Set the environment parameters located between the tags shown below.

   ```js
   //BEGIN CONFIG PARAMETERS  ----------------------------------------------------------------
   var baseRestURL = "https://<YOUR_SERVER>/MicroStrategyLibrary";
   var username = "<USER_NAME>";
   var password = "<PASSWORD>";
   var projectID = "<PROJECT_ID>";
   var dossierID = "<DOSSIER_ID>";
   var dossier2ID = "<DOSSIER2_ID>";
   // Stands for Cross Origin Requests. If this sample is deployed on a different
   // erver than MicroStrategy Library, you must set CORS to true.
   var CORS = true;
   //END CONFIG PARAMETERS -----------------------------------------------------------------
   ```

### Code for the Sample Application

```html
<html>
  <!-- Latest compiled and minified CSS -->

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
   
  <body>
      
    <div class="container">
          
      <div class="page-header">
              
        <h1>Simple Embedding Sample With Event Handling</h1>
            
      </div>
        
    </div>
      
    <div style="width: 20%; background-color: white; float:left;">
          
      <div id="nav1" style="width: 100%; height: 50%;"></div>
          
      <div id="nav2" style="width: 100%; height: 50%;"></div>
        
    </div>
      
    <div style="width: 80%; background-color: white; float:right;">
          
      <div id="dossierContainer1" style="width: 100%; height: 50%;"></div>
          
      <div id="dossierContainer2" style="width: 100%; height: 50%;"></div>
        
    </div>
  </body>
   
  <!-- Replace path to point to the embeddingLib in your environment -->
  <script src="https://<YOUR_SERVER>/MicroStrategyLibrary/javascript/embeddinglib.js"></script>
  <script>
    // BEGIN CONFIG PARAMETERS -------------------------------------------------------------------------
    baseRestURL = "https://<YOUR_SERVER>/MicroStrategyLibrary";
    username = "<USER_NAME>";
    password = "<PASSWORD>";
    projectID = "<PROJECT_ID>";
    dossierID = "<DOSSIER_ID>";
    // Stands for Cross Origin Requests. If this sample is deployed on a different
    // server than MicroStrategy Library, you must set CORS to true.
    dossier2ID = "<DOSSIER2_ID>";
    CORS = true;
    //END CONFIG PARAMETERS -------------------------------------------------------------------------
    var dossier1 = null;
    var dossier2 = null; //Form PostData for login REST request
    var postData = {};
    postData.username = username;
    postData.password = password;
    postData.loginMode = 1;
    var projectUrl = baseRestURL + "/app/" + projectID;
    var dossierUrl = projectUrl + "/" + dossierID;
    console.log("DossierURL: " + dossierUrl); //populate div with dossier
    microstrategy.dossier
      .create({
        placeholder: document.getElementById("dossierContainer1"),
        url: dossierUrl,
        enableCustomAuthentication: true,
        enableResponsive: false,
        customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
        getLoginToken: function () {
          return getXHRRequestPromise(baseRestURL + "/api/auth/login", postData, "POST", "application/json", "x-mstr-authToken").then(function (authToken) {
            return authToken;
          });
        },
      })
      .then(function (dossier) {
        //get hook to dossierObj
        dossier1 = dossier;
        var navDiv = document.getElementById("nav1");
        createChapterPageNav(dossier, navDiv); //register handlers
        var selectHandler = function (e) {
          dossier2.getFilterList().then(function (filterList) {
            var selections = [];
            var selectionName = null;
            for (var i = 0; i < e.graphics.length; i++) {
              var selection = e.graphics[i]; //single attribute selection
              selectionName = selection[0].n;
              var selectionValue = selection[0].vid;
              var selectionObj = {};
              selectionObj.value = selectionValue;
              selections.push(selectionObj);
            } //find filters that can be effected by selection
            for (var i = 0; i < filterList.length; i++) {
              var filter = filterList[i];
              var availableFilterName = filter.filterName;
              var availableFilterKey = filter.filterKey;
              if (availableFilterName == selectionName) {
                //apply to dossier2
                var filterDataObj = {};
                var filterInfoObj = {};
                filterInfoObj.key = availableFilterKey;
                filterDataObj.selections = selections;
                filterDataObj.filterInfo = filterInfoObj;
                dossier2.filterSelectMultiAttributes(filterDataObj);
              }
            }
          });
        };
        dossier.registerEventHandler("onGraphicsSelected", selectHandler);
      }); //populate dossier2
    microstrategy.dossier
      .create({
        placeholder: document.getElementById("dossierContainer2"),
        url: projectUrl + "/" + dossier2ID,
        enableCustomAuthentication: true,
        enableResponsive: false,
        customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
        getLoginToken: function () {
          return getXHRRequestPromise(baseRestURL + "/api/auth/login", postDataObj, "POST", "application/json", "x-mstr-authToken").then(function (authToken) {
            return authToken;
          });
        },
      })
      .then(function (dossier) {
        //get hook to dossierObj
        dossier2 = dossier;
        var navDiv = document.getElementById("nav2");
        createChapterPageNav(dossier, navDiv);
      });
    function getXHRRequestPromise(url, body, method, contentType, desiredHeader) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/json");
        // Setting CORS to true will work even if the sample and MicroStrategy
        // Library are on the same server
        xhr.setRequestHeader("Accept", "application/json");
        if (CORS) {
          xhr.withCredentials = true;
        }
        xhr.send(JSON.stringify(body));
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 2) {
            resolve(xhr.getResponseHeader(desiredHeader));
          } else {
            reject({
              status: this.status,
              statusText: xhr.statusText,
            });
          }
        };
      });
    }
    function createChapterPageNav(dossier, div) {
      var navData = dossier.getTableContent();
      var pill = document.createElement("ul");
      pill.className = "nav nav-pills nav-stacked";
      var child = document.createElement("li");
      child.className = "active";
      var href = document.createElement("a");
      href.href = "#";
      href.innerHTML = "Navigation";
      child.appendChild(href);
      pill.appendChild(child);
      for (var i = 0; i < navData.chapters.length; i++) {
        var chapter = navData.chapters[i];
        for (var j = 0; j < chapter.pages.length; j++) {
          var page = chapter.pages[j];
          var newChild = null;
          var newHREF = null;
          newChild = document.createElement("li");
          newHREF = document.createElement("a");
          newHREF.href = "#";
          newHREF.innerHTML = chapter.name + ": " + page.name;
          newHREF.id = page.nodeKey;
          console.log(newHREF.id);
          newHREF.onclick = function () {
            console.log("trying to navigate to: " + this.id);
            dossier.navigateToPage(dossier.getPageByNodeKey(this.id));
          };
          newChild.appendChild(newHREF);
          pill.appendChild(newChild);
        }
      }
      div.appendChild(pill);
    }
  </script>
</html>
```

## Events, event handlers, and wrapper functions

Once you have used the dossier.create(props) method to embed a dossier into a third-party web page, you can use the methods described below to communicate between the dossier and the container page. You can register [event handlers](#Event_handlers) for the [events](#Events) that are automatically raised when a visualization is selected or when a page or filter is changed. [Wrapper functions](#Wrapper_functions) are provided to make it easy to register event handlers for specific events.

### Events

Each supported event is described in the table below. You get the EventType from mstr.dossier.EventType.

| Event enumeration              | Event name         | Description                                                                                                                              | Data                                             |                                                                                                            | Event content example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EventType.ON_GRAPHICS+SELECTED | onGraphicsSelected | Raised when a graphic in the visualization is selected <br/> <br/>This event is raised only if the visualization supports "use as filter". | Attribute element list for each selected graphic | embedDossier.registerEventHandler(<br/><br/>EventType.ON_GRAPHICS_SELECTED,<br/><br/>graphicsSelectedHandler ) | {<br/><br/>  name: "onGraphicsSelected",<br/><br/>  value: {<br/><br/>    vizKey: 'K52',<br/><br/>    graphics: [//an array containing all the selected graphics info, each item is one graphic<br/><br/>      [// an array containing the attribute combination for one graphic<br/><br/>        //n: attribute name, v: attribute value<br/><br/>        {n: "Category", v: "Electronics"},<br/><br/>        {n: "Quarter", v: "2009 Q4"}<br/><br/>      ],[<br/><br/>        {n: "Category", v: "Electronics"},<br/><br/>        {n: "Quarter", v: "2009 Q3"}<br/><br/>      ]<br/><br/>    ]<br/><br/>  }<br/><br/>} |
| EventType.ON_PAGE_SWITCHED     | onPageSwitched     | Raised when the page is switched                                                                                                         | Current page path                                | embedDossier.registerEventHandler(<br/><br/>EventType.ON_PAGE_SWITCHED,<br/><br/>pageSwitchedHandler)          | {key: 'K52'}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| EventType.ON_FILTER_UPDATED    | onFilterUpdated    | Raised when a filter is changed                                                                                                          | Changed filter information                       | embedDossier.registerEventHandler(<br/><br/>EventType.ON_FILTER_UPDATED,<br/><br/>filterUpdatedHandler)        | getFilterList                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Event handlers

There are two methods for registering and removing an event handler.

| Class   | Method                                 | Description                                       |
| ------- | -------------------------------------- | ------------------------------------------------- |
| Dossier | registerEventHandler(evtName, handler) | Register the event handler 'handler' on 'evtName' |
| Dossier | removeEventHandler(evtName, handler)   | Remove the event handler 'handler' on 'evtName'   |

### Wrapper functions

The following wrapper functions make it easy to register event handlers for specific events.

| Class   | Method                                                   | Description                                                                                                                                                          |
| ------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dossier | registerGraphicsSelectEventHandlerToViz(vizKey, handler) | Wrapper function for registerEventHandler for EventType.ON_GRAPHICS_SELECTED on certain visualizations (whose node key is equal to vizKey)                           |
| Dossier | registerFilterUpdateHandler(handler)                     | Wrapper function for registerEventHandler for EventType.ON_FILTER_UPDATED. <br/> <br/>Equal to registerEventHandler(EventType.ON_FILTER_UPDATED, filterUpdatedHandler) |
| Dossier | registerPageSwitchHandler(handler)                       | Wrapper function for registerEventHandler for EventType.ON_PAGE_SWITCHED<br/><br/>Equal to registerEventHandler(EventType.ON_PAGE_SWITCHED, pageSwitchedHandler        |

Because the Map visualization can have multiple map layers, the selected graphics can come from different map layers. As a result, the event raised for EventType.ON_GRAPHICS_SELECTED for the Map visualization is different from the event raised for other visualizations. See the following example.

```javascript
{
  name: "graphicsSelected",
  value: {
    //primary key for the map visualization
    vizKey: 'W99',
    graphics: [
    //each object represent the selected graphics info for one layer
    {
    //layer key
    key: "W99",
    //layer name
    name: "Layer 1",
    graphics: [
      [
        {n: "Category", v: "Electronics"},
        {n: "Quarter", v: "2009 Q4"}
      ],[
        {n: "Category", v: "Electronics"},
        {n: "Quarter", v: "2009 Q3"}
      ]
    ]
      },{
        key: "W100",
        name: "Layer 2",
        graphics: [
          [
            {n: "Category", v: "Books"},
            {n: "Year", v: "2009"}
          ],[
            {n: "Category", v: "Movies"},
            {n: "Year", v: "2008"}
          ]
        ]
      }
    ]
  }
}
```
