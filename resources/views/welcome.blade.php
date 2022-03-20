<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Little Brothers Driver Scheduling</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../css/main-style.css">
    </head>
    </head>
    <body class="antialiased">
      <div id="app">
        <app></app>
      </div>
    </body>
    <script src="{{mix('js/app.js')}}"></script>

    
  <!-- msal.min.js can be used in the place of msal.js; included msal.js to make debug easy -->
  <script src="https://alcdn.msauth.net/browser/2.15.0/js/msal-browser.js"
    integrity="sha384-dFzMiVGB5HpWZ+5w5VSif6jhWfNeplSw9ACYmQKZcY2azuT9kCxVWVI9HyfGdkHV"
    crossorigin="anonymous"></script>

  <!-- To help ensure reliability, Microsoft provides a second CDN -->
  <script type="text/javascript">
    if (typeof Msal === 'undefined') document.write(unescape("%3Cscript src='https://alcdn.msftauth.net/browser/2.15.0/js/msal-browser.js' type='text/javascript' crossorigin='anonymous' %3E%3C/script%3E"));
  </script>

  
  <!-- importing app scripts (load order is important) -->
  <script type="text/javascript" src="../js/authConfig.js"></script>
  <script type="text/javascript" src="../js/graphConfig.js"></script>
  <script type="text/javascript" src="../js/ui.js"></script>

  <!-- <script type="text/javascript" src="./authRedirect.js"></script>   -->
  <!-- uncomment the above line and comment the line below if you would like to use the redirect flow -->
  <script type="text/javascript" src="../js/authPopup.js"></script>
  <script type="text/javascript" src="../js/graph.js"></script>

</html>
