# NodeJS HLS Server

Live streaming server based on node-media-server module, Make sure that you have fmmpeg installed (https://www.ffmpeg.org/)

# Usage

## fmmpeg

Install fmmpeg following instructions from https://www.ffmpeg.org/ (depending on your operating system)


## node modules

Just run
```
npm i
```

# configure .env variables

.env example

```js

NODE_ENV='development'

#port to stream publishing
PORT=8080

# Where to store the playlist files
MEDIA_ROOT='./media'

# Where is ffmpeg executable located. Run which ffmpeg
FFMPEG_PATH='C:/ffmpeg/bin/ffmpeg.exe'

```

# ip camera configuration

Cameras rtsp url and names should be configurated in camera-list.json

```js
    {
        "rtsp_link": "rtsp://user:password@camera_url/Streaming/channels/101/", // this may vary depending on camera brand
        "name" : "STREAM_NAME" // custom name, this will be used for streaming connection with some app
    }
```

and finally 

```bash
npm start
```

## Accessing the live stream

```
HLS - http://localhost:PORT/live/STREAM_NAME/index.m3u8
FLV - http://localhost:PORT/live/STREAM_NAME.flv
WSS - ws://localhost:PORT/live/STREAM_NAME.flv
RTMP - ws://localhost:PORT/live/STREAM_NAME
```



# Logging

There are a total of 4 possible options:
- 0 - Don't log anything
- 1 - Log errors
- 2 - Log errors and generic info
- 3 - Log everything (debug)

Modifying the logging type is easy - just add a new value `logType` in the config and set it to a value between 0 and 4.
By default, this is set to show errors and generic info internally (setting 2).