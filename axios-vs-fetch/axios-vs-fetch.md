#  Axios:
    => 
    1. 3rd party library that needs installation.
    2. Request URL is included in the request/response object
    3. Has built-in XSRF protection
    4. Uses **data** to send and receive content.
    5. sends Javascript objects directly
    6. Automatically parses JSON responses.
    7. Returns error only when status is not in the 200 range.
    8. Supports request timeout and cancellation.
    9. Can intercept requests/responses easily.
    10. Built-in support for download/upload progress.
    11. Widely supported in all browsers.
    12. Ignore body in a GET request.


# Fetch:
    =>
    1. Built-in Browser API, no installation needed.
    2. you manually define and track the URL.
    3. No built-in XSRF protection
    4. Uses body for sending data.
    5. Data must be stringified using JSON.stringify()
    6. You must call .json() to parse the response.
    7. Requires manual check of **response.ok** for errors.
    8. support cancellation via AbortController, but no built-in timeout.
    9. No native intercept support.
    10. No built-in progress support.
    11. Supported in modern browsers only 
    12. Allow body in GET request (though not recommended).

    
