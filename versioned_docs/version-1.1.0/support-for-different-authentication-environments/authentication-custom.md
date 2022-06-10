---
title: Use Custom Authentication
date: Last Modified
permalink: /support-for-different-authentication-environments/authentication-custom.html
eleventyNavigation:
  parent: Support for Different Authentication Environments
  key: Use Custom Authentication
---

You can use custom authentication to allow users to view an embedded dossier without logging in with their user name and password.

To embed a dossier that uses custom authentication, do the following:

1. [Create a servlet that supports custom authentication](#servlet)

   To support custom authentication, you provide a servlet on the web server that can receive a POST request with the payload `{dossierContextPath}`, where `dossierContextPath` is a RESTful dossier server URL. This POST request should get the identity token and return it in the response header as 'X-MSTR-IdentityToken'.

1. [Edit the web.xml file](#web-xml)

   You modify the `web.xml` file to configure and map the custom authentication servlet.

1. [Embed a dossier in a web page, with custom authentication enabled](#Embed)

   You embed the dossier in a web page with the `enableCustomAuthentication` property of the `dossier.create()` method set to "true".

Code samples for each step are provided below:

1. <a name="servlet"></a> **Create a servlet that supports custom authentication**

   To support custom authentication, you provide a servlet on the web server that can receive a POST request with the payload `{dossierContextPath}`, where `dossierContextPath` is a RESTful dossier server URL. This POST request should get the identity token and return it in the response header as 'X-MSTR-IdentityToken'. The sample code below creates a servlet named `IdentityTokenServlet.java`, which implements the `doPost` function.

   ```java
   package com.microstrategy.embedsdk.demo;
   import java.io.IOException;
   import java.io.OutputStreamWriter;
   import java.net.HttpURLConnection;
   import javax.net.ssl.HttpsURLConnection;
   import java.net.URL;
   import java.util.Iterator;
   import java.util.List;
   import javax.servlet.ServletException;
   import javax.servlet.annotation.WebServlet;
   import javax.servlet.http.HttpServlet;
   import javax.servlet.http.HttpServletRequest;
   import javax.servlet.http.HttpServletResponse;
   /**
    * Servlet implementation class AuthServlet
    */
   @WebServlet("/IdentityTokenServlet")
    public class IdentityTokenServlet extends HttpServlet {
        private static final long serialVersionUID = 1L;
        /**
        * @see HttpServlet#HttpServlet()
        */
        public IdentityTokenServlet() {
            super();
            // TODO Auto-generated constructor stub
        }
        /**
        * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
        *      response)
        */
        protected void doPost(HttpServletRequest request, HttpServletResponse response)
                throws ServletException, IOException {
            String dossierContextPath = request.getParameter("dossierContextPath");
            String identityToken = getIdentityToken(
                dossierContextPath,
                "administrator", ""
            );
            response.addHeader("X-MSTR-IdentityToken", identityToken);
        }
        /**
        * get identity token from user credentials with filter-based
        * authentication workflows
        * @param applicationRoot dossier web root
        * @param username
        * @param password
        * @return
        */
        private String getIdentityToken(
            String applicationRoot,
            String username,
            String password
        ) {
            try {
                boolean useHttps = applicationRoot.startsWith("https");

                //login with user credential
                URL loginUrl = new URL(applicationRoot + "/auth/login");
                HttpURLConnection loginConnection = (HttpURLConnection)loginUrl.openConnection();
                if (useHttps) {
                    loginConnection = (HttpsURLConnection) loginConnection;
                }
                loginConnection.setRequestProperty("Accept", "application/json");
                loginConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
                loginConnection.setRequestProperty ("X-Requested-With", "XMLHttpRequest");
                loginConnection.setRequestMethod("POST");
                loginConnection.setDoOutput(true);

                String urlParameters = "loginMode=1&username=" +
                    username + "&password=" + password;
                OutputStreamWriter wr = new OutputStreamWriter(loginConnection.getOutputStream());
                wr.write(urlParameters);
                wr.flush();
                wr.close();
                int status = loginConnection.getResponseCode();
                if (status == 204) {
                    //login success, get authToken
                    String authToken = loginConnection.getHeaderField("X-MSTR-AuthToken");
                    List<String> cookies = loginConnection.getHeaderFields().get("Set-Cookie");
                    //create Identity token with authToken
                    URL getIdentityTokenUrl = new URL(applicationRoot + "/api/auth/identityToken");
                    HttpURLConnection gIdnTknConnection = (HttpURLConnection)getIdentityTokenUrl.openConnection();
                    if (useHttps) {
                        gIdnTknConnection = (HttpsURLConnection) gIdnTknConnection;
                    }
                    gIdnTknConnection.setRequestProperty("Accept", "application/json");
                    gIdnTknConnection.setRequestProperty("Content-Type", "application/json");
                    gIdnTknConnection.setRequestProperty("X-MSTR-AuthToken", authToken);
                    Iterator<String> it = cookies.iterator();
                    while(it.hasNext()) {
                        gIdnTknConnection.setRequestProperty("Cookie", it.next());
                    }
                    gIdnTknConnection.setRequestMethod("POST");
                    gIdnTknConnection.setDoOutput(true);
                    int gIdnTknStatus = gIdnTknConnection.getResponseCode();
                    if (gIdnTknStatus == 201) {
                        //identityToken create success
                        String identityToken = gIdnTknConnection.getHeaderField("X-MSTR-IdentityToken");
                        return identityToken;
                    }

                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return null;

        }
   ```

1. <a name="web-xml"></a> **Edit the `web.xml` file**

   The sample code below shows how to modify `web.xml` to configure and map the custom authentication servlet.

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
    <web-app
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns="http://xmlns.jcp.org/xml/ns/javaee"
        xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
        id="WebApp_ID" version="3.1"
    >
        <display-name>EmbedSDKDemo</display-name>
        <servlet>
        <servlet-name>IdentityTokenServlet</servlet-name>
        <servlet-class>com.microstrategy.embedsdk.demo.IdentityTokenServlet</servlet-class>
        </servlet>
        <servlet-mapping>
        <servlet-name>IdentityTokenServlet</servlet-name>
        <url-pattern>/identityToken</url-pattern>
        </servlet-mapping>
    </web-app>
   ```

1. <a name="Embed"></a> **Embed a dossier in a web page, with custom authentication enabled**

   You embed the dossier in a web page with the `enableCustomAuthentication` property of the `dossier.create()` method set to `true`. The sample code below shows how to embed a dossier with custom authentication enabled in a web page.

   ```js
   microstrategy.dossier.create({
     placeholder: placeholderDiv,
     srcURL: "http://{host}:{port}/{Library}/app/{ProjectID}/{DossierID}",
     enableCustomAuthentication: true,
   });
   ```
