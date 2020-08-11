# http-crash-course

Traversy Media HTTP Crash Course - https://youtu.be/iYM2zFP3Zn0

- [http-crash-course](#http-crash-course)
  - [HTTP](#http)
    - [Stateless](#stateless)
    - [HTTPS](#https)
    - [HTTP/2](#http2)
  - [Methods](#methods)
  - [Header](#header)
  - [Status Codes](#status-codes)

***

## HTTP

- **H**yper **T**ext **T**ransfer **P**rotocol
- Communication between web servers & clients
- HTTP Requests / Responses
- Loading pages, form submit, ajax calls

### Stateless

- Every request is completely **independent**
- Similar to transactions
- Programming, local storage, cookies, and sessions are used to create enhanced user experiences

### HTTPS

- Hyper Text Transfer Protocol **Secure**
- Data sent is encrypted
- Secure Sockets Layer (SSL) / Transport Layer Security (TLS)
- Install certificate on web host

### HTTP/2

- Major revision of HTTP/1.1 (Baseline)
- Under the hood changes
- Respond with more data
- Reduce latency be enabling full request and response **multiplexing**
- Fast, efficient, & secure

## Methods

- GET
  - retrieves data from the server
- POST
  - submit data to the server
- PUT
  - update data already on the server
- DELETE
  - deletes data from the server

There are more request types not mentioned here.

## Header

General

- Request URL
- Request Method
- Status Code
- Remote Address
- Referrer Policy

Response

- Server
- Set-Cookie
- Content-Type
- Content-Length
- Data

Request

- Cookies
- Accept-xxx
- Content-Type
- Content-Length
- Authorization
- User-Agent
- Referrer

There are more header fields not mentioned here.

## Status Codes

- 1xx: Informational
  - Request received / processing
- 2xx: Success
  - Successfully received, understood and accepted
- 3xx: Redirect
  - Further action must be taken / redirect
- 4xx: Client Error
  - Request does not have what it needs
- 5xx: Server Error
  - Server failed to fulfill an apparent valid request

Specific Codes

- 200 - OK
- 201 - OK created
- 301 - Moved to new URL
- 304 - Not modified (cached version)
- 400 - Bad request
- 401 - Unauthorized
- 404 - Not found
- 500 - Internal server error
