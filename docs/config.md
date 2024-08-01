---
title: Configure Library Server for embedding
description: If you plan to use Embedding SDK on a different domain from your MicroStrategy environment, please enable Cross-Origin Resource Sharing (CORS) and allow SameSite cookies.
---

If you plan to use Embedding SDK on a different domain from your MicroStrategy environment, please also meet the following requirements.

## Enable Cross-Origin Resource Sharing (CORS)

Cross-Origin Resource Sharing (CORS) provides a way for a web application running in one origin (domain, protocol, and port) to access selected resources from a server in a different origin. A cross-origin HTTP request uses additional HTTP headers to tell the browser to let the web application share resources. For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts. This means that when a web application requests HTTP resources from a different origin, the response from the other origin must include the right CORS headers.

:::note

Chrome Web Browser version 80 and above introduces new changes which may impact embedding. For more information, see [KB484005: Chrome v80 Cookie Behavior and the Impact on MicroStrategy Deployments](https://community.microstrategy.com/s/article/Chrome-v80-Cookie-Behavior-and-the-impact-on-MicroStrategy-Deployments).

:::

To enable CORS for the REST Server:

1. Open the Library Admin page. Your URL should be similar to the following:

   `https://<host_name>:<port>/MicroStrategyLibrary/admin`

1. Navigate to **Library Server -> Security Settings**.
1. Choose the appropriate setting for **Allow Library embedding in other sites** to reconfigure CORS.

   ![Library Admin CORS Setting](./images/LibraryAdmin_CORSsetting.png)

Using the Library Admin page is the easiest way to enable CORS for the REST Server, but you can also configure CORS manually.

1. Navigate to `MicroStrategyLibrary/WEB-INF/classes/config/configOverride.properties`.
1. Edit the `configOverride.properties` file in a text editor.
1. Add the following lines, or replace them if already present:

   `auth.cors.origins=http://example.com:port`

   `security.allowedOrigins=http://example.com:port`

1. Restart your MicroStrategy Library web application hosted on the application server.

Alternatively, you can also configure this in MicroStrategy Workstation by [editing the properties of the environment](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/library_admin_settings.htm#View).

## Allow SameSite cookies

Google Chrome (version 80+) and Microsoft Edge (version 86+) introduced new changes that may impact embedding.

For Embedding SDK to function as expected in a 3rd-party context, it is required to explicitly label session cookies with `SameSite=None; Secure`.

### For MicroStrategy 2021 Update 6 or after

Starting in MicroStrategy 2021 Update 6, you can manage SameSite Cookies for Library in Workstation, by following the steps in [this document](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/config_samesite_cookies.htm).

![SameSite Cookie](./images/SameSiteCookie.png)

### For MicroStrategy 2021 Update 5 or before

If you are using MicroStrategy 2021 Update 5 or before, make the following changes on your server instance.

1. If `context.xml` doesn't already exist in the following folder location, create it: `[Tomcat Folder]\webapps\MicroStrategyLibrary\META-INF\context.xml`. Add the following to `context.xml`:

   ```xml
   <Context>
      <CookieProcessor sameSiteCookies="None"/>
   </Context>
   ```

1. In `[Tomcat Folder]\webapps\MicroStrategyLibrary\WEB-INF\web.xml`, change `sameSite` param-value blow to `NONE` to permit embedding.

   ```xml
   <!-- ... -->
   <filter>
   <filter-name>cookieProcessorFilter</filter-name>
   <filter-class>com.microstrategy.web.filter.CookieProcessorFilter</filter-class>
   <init-param>
   <param-name>sameSite</param-name>
   <param-value>NONE</param-value>
   </init-param>
   </filter>
   <!-- ... -->
   ```

1. Ensure your Tomcat is configured to support HTTPS.
1. Restart Tomcat.

For more information, see [Chrome v80 Cookie Behavior and the Impact on MicroStrategy Deployments](https://community.microstrategy.com/s/article/Chrome-v80-Cookie-Behavior-and-the-impact-on-MicroStrategy-Deployments?language=en_US).

## The Partitioned Cookie Change

Before MicroStrategy ONE June 2024, when the Library server and the client website are in different domains, the Embedding SDK requires third-party cookies to be allowed to work correctly. In the past, Chrome's default setting was only "Block third-party cookies in Incognito mode", so the customer can use Embedding SDK without changing the Chrome settings.

![The default Chrome preference](./images/chrome-preference.png)

However, third-party cookies are on their way out. Google is expected to stop the use of third-party cookies by [2025 Q2](https://developers.google.com/privacy-sandbox/3pcd). At that time, Chrome will block third-party cookies by default, and the customer can't use Embedding SDK unless he changes the Chrome preference to enable the 3rd party cookies manually.

To avoid the changes of third-party cookies default setting breaking the Embedding SDK workflow, we adopt [CHIPS](https://developer.chrome.com/docs/privacy-sandbox/chips/)(Cookies Having Independent Partitioned State) solution to put the Library server's cookie into partitioned storage. The user needs to enable the partitioned cookie in the Library settings to use this solution:

![The partitioned cookie setting](./images/partitioned-cookie.png)

After this change, the customer can use most of the Embedding SDK functionalities even if 3rd party cookies are blocked in the Chrome preference. But for the SAML/OIDC login, the old workflow changes, and the user need to do more to make it work. The details can be seen in [SAML or OIDC authentication after MicroStrategy ONE June 2024](./support-for-different-authentication-environments/authentication-saml.md#for-microstrategy-2024-update-6-or-after).
