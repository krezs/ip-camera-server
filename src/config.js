const cameralist = require('../camera-list.json');

module.exports = {
    logType: 2,
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
    http: {
        port: process.env.PORT || 8080,
        mediaroot: process.env.MEDIA_ROOT || './media',
        allow_origin: '*'
    },
    relay: {
        ffmpeg: process.env.FFMPEG_PATH || 'C:/ffmpeg/bin/ffmpeg.exe',
        tasks: cameralist.map((camera) => {return { app: 'live', mode: 'static', edge : camera.rtsp_link, name: camera.name, rtsp_transport: 'tcp' } })
    },
    trans: {
        ffmpeg: process.env.FFMPEG_PATH || 'C:/ffmpeg/bin/ffmpeg.exe',
        tasks: [
          {
                app: 'live',
                hls: true,
                hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]'
                //dash: true,
                //dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
            }
        ]
    },
};
