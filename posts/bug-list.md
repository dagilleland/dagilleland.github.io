---
header:
    title: TODO Bug Reports
    hero: posts/buglist.jpg
    color: #ffffff
    summary: During development, I found a crash of lite-server by John Papa, and I captured the details so that I might possibly post a bug report.
footer:
    author: Dan Gilleland
    modified: Jan 29, 2017
---
# Bug List

----

**_For John Papa's Lite-Server..._**

```text
16.12.28 07:06:49 200 GET /README.md

<--- Last few GCs --->

44032700 ms: Mark-sweep 1380.2 (1436.9) -> 1380.2 (1436.9) MB, 1862.9 / 2.2 ms [allocation failure]
 [GC in old space requested].
44034555 ms: Mark-sweep 1380.2 (1436.9) -> 1380.1 (1418.9) MB, 1850.8 / 2.4 ms (+ 3.8 ms in 1 steps
 since start of marking, biggest step 3.8 ms) [last resort gc].
44036440 ms: Mark-sweep 1380.1 (1418.9) -> 1380.1 (1418.9) MB, 1884.7 / 2.7 ms [last resort gc].


<--- JS stacktrace --->

==== JS stack trace =========================================

Security context: 0000006BC68CFB61 <JS Object>
    1: new constructor(aka ReaddirpReadable) [C:\Users\Dan\AppData\Roaming\npm\node_modules\lite-se
rver\node_modules\readdirp\stream-api.js:18] [pc=000002E0EB318DB6] (this=0000014DF9CAE691 <a Readdi
rpReadable with map 0000018352C657E1>,opts=0000014DF9CAE701 <an Object with map 000001225B3075E9>)
    2: arguments adaptor frame: 0->1
    4: createStreamAPI(aka createStreamAPI) [C:\Users\Dan\App...

FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
```