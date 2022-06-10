---
title: Add Navigation
date: Last Modified
permalink: /add-functionality/add-nav.html
eleventyNavigation:
  parent: Add Functionality to an Embedded Dossier
  key: Add Navigation
---

The JavaScript Embedding API allows you to quickly integrate dossiers into a web application in a responsive manner. Once you have embedded a dossier, you can use helper methods in the Embedding API to let users navigate within the dossier. For example, you can add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations.

To help you get started, we have provided a [sample application](#Sample_application) that embeds a dossier and adds simple navigation, as well as a description of [helper methods](#Helper_methods_for_navigation) you can use to add additional navigation.

This sample is provided as an HTML file, which must be hosted on a web server. It cannot be run as a standalone file.

## Sample Application

The following sample shows how to leverage the Embedding API to embed a dossier and include navigation controls to allow users to page through the various chapters and pages of their dossier. You use the sample application that is provided for you and configure the code for your environment.

To deploy this sample in your environment, either:

1. Save the [code sample](#Code_sample) below to an HTML file hosted on the same web application server as the MicroStrategy Library application.

   If the application server is different from the server running the MicroStrategyLibrary application, you may need to [perform additional configuration to support Cross-Origin Requests (CORS)](../config.html).

   or

   [Download](https://www2.microstrategy.com/producthelp/2021/downloads/EmbeddingSDK/EmbeddingSample_Navigation.zip) the HTML file provided for you. This file contains the [sample code](#Code_sample) shown below.

1. Configure the HTML file for your environment.

   1. Edit the value of the src attribute in the `<script>`; tag shown below so that it points to the embeddinglib.js within the javascript folder of your MicroStrategyLibrary application.

      ```html
      <!-- Replace path to point to the embeddingLib in your environment -->;
      <script src="https://<YOUR_SERVER>;/MicroStrategyLibrary/javascript/embeddinglib.js"></script>
      ;
      ```

   1. Set the environment parameters located between the two commented lines shown below.

      ```js
      //BEGIN CONFIG PARAMETERS ----------------------------------------------------------------
      baseRestURL = "https://<YOUR_SERVER>;/MicroStrategyLibrary";
      username = "<USER_NAME>;";
      password = "<PASSWORD>;";
      projectID = "<PROJECT_ID>;";
      dossierID = "<DOSSIER_ID>;";
      //END  CONFIG PARAMETERS -----------------------------------------------------------------
      ```

### Code for sample application

```html
<html>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
   
  <body>
      
    <div class="container">
          
      <div class="page-header">
              
        <h1>;Simple Embedding Sample with Navigation</h1>
            
      </div>
        
    </div>
      
    <div style="width: 20%; background-color: white; float:left;">
          
      <div id="nav1" style="width: 100%;"></div>
        
    </div>
      
    <div style="width: 80%; background-color: white; float:right;">
          
      <div id="dossierContainer1" style="width: 100%;"></div>
        
    </div>
  </body>
   
  <!-- Replace path to point to the embeddingLib in your environment -->;

  <script src="https://<YOUR_SERVER>;/MicroStrategyLibrary/javascript/embeddinglib.js"></script>
  <script>
    // BEGIN CONFIG PARAMETERS -------------------------------------------------------------------------
    baseRestURL = "https://<YOUR_SERVER>;/MicroStrategyLibrary";
    username = "<USER_NAME>;";
    password = "<PASSWORD>;";
    projectID = "<PROJECT_ID>;";
    dossierID = "<DOSSIER_ID>;";
    // END CONFIG PARAMETERS ---------------------------------------------------------------------------
    // Form PostData for login REST request
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
        containerWidth: "400px",
        containerHeight: "600px",
        customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
        getLoginToken: function () {
          return getXHRRequestPromise(baseRestURL + "/api/auth/login", postData, "POST", "application/json", "x-mstr-authToken").then(function (authToken) {
            return authToken;
          });
        },
      })
      .then(function (dossier) {
        //add any code you want to run after dossier loads
        var navDiv = document.getElementById("nav1");
        createChapterPageNav(dossier, navDiv);
      });
    function getXHRRequestPromise(url, body, method, contentType, desiredHeader) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
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

## Helper Methods for Navigation

You can use the methods described below to navigate within the dossier. You can get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the currrent page or chapter, get a specific page, or get a list of pages, chapters and visualizations.

- [getTableContent()](#getTableContent)
- [goToPrevPage()](#goToPrevPage)
- [goToNextPage()](#goToNextPage)
- [navigateToPage(page:Page)](#navigateToPage)
- [getCurrentChapter()](#getCurrentChapter)
- [getCurrentPage()](#getCurrentPage)
- [getPageByNodeKey(nodeKey)](#getPageByNodeKey)
- [getChapterList()](#getChapterList)
- [getCurrentPageVisualizationList()](#getCurrentPageVisualizationList)
- [openFilterSummaryBar()](#openFilterSummaryBar)
- [closeFilterSummaryBar()](#closeFilterSummaryBar)
- [getPageList()](#getPageList)

Most of the navigation is performed using methods of the Dossier class, but there is one method for navigation in the Chapter class.

| Class   | Method                            | Return Type                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Example                                        |
| ------- | --------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Dossier | getTableContent()                 | Object                                 | Return the structure of the embedded dossier in the following format:<br/><br/>{ <br/>  "chapters": [<br/><br/>    {<br/><br/>      "name": "Chapter01",<br/><br/>      "nodeKey": "K36",<br/><br/>      "pages": [<br/><br/>        {<br/><br/>          "name": "Page1",<br/><br/>          "nodeKey": "K53--K46"<br/><br/>        },<br/><br/>        {<br/><br/>          "name": "Page2",<br/><br/>          "nodeKey": "K53--K48"<br/><br/>        }<br/><br/>      ]<br/><br/>    },<br/><br/>    {<br/><br/>      "name": "Chapter01",<br/><br/>      "nodeKey": "K36",<br/><br/>      "pages": [<br/><br/>        {<br/><br/>          "name": "Page1",<br/><br/>          "nodeKey": "K53--K46"<br/><br/>        }<br/><br/>      ]<br/><br/>    }<br/><br/>  ]<br/><br/>} | embedDossier.getTableContent()                 |
| Dossier | goToPrevPage()                    | Promise                                | Go to the previous page of the embedded dossier <br/> <br/>Return a promise, resolved with {valid: true, message: "page loading success!"} when navigation is successful; rejected with an error when navigation fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | embedDossier.goToPrevPage()                    |
| Dossier | goToNextPage()                    | Promise                                | Go to the next page of the embedded dossier <br/> <br/>Return a promise, resolved with {valid: true, message: "page loading success!"} when navigation is successful; rejected with an error when navigation fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | embedDossier.goToNextPage()                    |
| Dossier | navigateToPage(page:Page)         | Promise                                | Switch to the specified page of the embedded dossier <br/> <br/>Return a promise, resolved with {valid: true, message: "page loading success!"} when navigation is successful; rejected with an error when navigation fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | embedDossier.navigateToPage(page)              |
| Dossier | getCurrentChapter()               | Chapter                                | Return the current chapter of the embedded dossier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | embedDossier.getCurrentChapter()               |
| Dossier | getCurrentPage()                  | Page                                   | Return the current page of the embedded dossier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | embedDossier.getCurrentPage()                  |
| Dossier | getPageByNodeKey(nodeKey)         | Page                                   | Return the page of the embedded dossier with the specified nodeKey.<br/><br/>_You can get the nodeKey from the return value of getTableContent, or<br/>_ You can get the nodeKey from the nodeKey property of the Page object (Page.nodeKey)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | embedDossier.getPageByNodeKey("K52")           |
| Dossier | getChapterList()                  | Chapter                                | Return a list of all chapters in the embedded dossier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | embedDossier.getChapterList()                  |
| Dossier | getCurrentPageVisualizationList() | Promise([{key:vizKey, name: vizName}]) | Return an array of all the visualizations in the current page of the embedded dossier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | embedDossier.getCurrentPageVisualizationList() |
| Dossier | openFilterSummaryBar()            | null                                   | Open the filter summary bar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | embedDossier.openFilterSummaryBar()            |
| Dossier | closeFilterSummaryBar()           | null                                   | Close the filter summary bar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | embedDossier.closeFilterSummaryBar()           |
| Chapter | getPageList()                     | Page[]                                 | Return an array of all the pages in this chapter of the embedded dossier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | chapter.getPageList()                          |
