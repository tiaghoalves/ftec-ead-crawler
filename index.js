// configs da tag script de uma pagina do moodle de videoaula

var config = {
    "cdn_url": "https://f.vimeocdn.com",
    "vimeo_api_url": "api.vimeo.com",
    "request": {
        "files": {
            "dash": {
                "separate_av": true,
                "streams": [{
                    "profile": 174,
                    "quality": "720p",
                    "id": 1178489976,
                    "fps": 29
                }, {
                    "profile": 165,
                    "quality": "540p",
                    "id": 1178489977,
                    "fps": 29
                }, {
                    "profile": 164,
                    "quality": "360p",
                    "id": 1178489975,
                    "fps": 29
                }],
                "cdns": {
                    "akfire_interconnect_quic": {
                        "url": "https://139skyfiregce-vimeo.akamaized.net/exp=1552086501~acl=%2F306875338%2F%2A~hmac=3322a4f527bedd70bbd8e7b81e4e4682f496ac2e81ff4f904234c06070a56342/306875338/sep/video/1178489975,1178489977,1178489976/master.json?base64_init=1",
                        "origin": "gcs"
                    },
                    "fastly_skyfire": {
                        "url": "https://skyfire.vimeocdn.com/1552086501-0x5e822a4f58b6493a2171c3bb2164c2688d0b4306/306875338/sep/video/1178489975,1178489977,1178489976/master.json?base64_init=1",
                        "origin": "gcs"
                    }
                },
                "default_cdn": "akfire_interconnect_quic"
            },
            "hls": {
                "separate_av": false,
                "default_cdn": "akfire_interconnect_quic",
                "cdns": {
                    "akfire_interconnect_quic": {
                        "url": "https://139skyfiregce-vimeo.akamaized.net/exp=1552086501~acl=%2F306875338%2F%2A~hmac=3322a4f527bedd70bbd8e7b81e4e4682f496ac2e81ff4f904234c06070a56342/306875338/video/1178489975,1178489977,1178489976/subtitles/6186588-Espa%C3%B1ol-es/master.m3u8?external-subs=1",
                        "origin": "gcs",
                        "captions": "https://139skyfiregce-vimeo.akamaized.net/exp=1552086501~acl=%2F306875338%2F%2A~hmac=3322a4f527bedd70bbd8e7b81e4e4682f496ac2e81ff4f904234c06070a56342/306875338/video/1178489975,1178489977,1178489976/subtitles/6186588-Espa%C3%B1ol-es/master.m3u8"
                    },
                    "fastly_skyfire": {
                        "url": "https://skyfire.vimeocdn.com/1552086501-0x5e822a4f58b6493a2171c3bb2164c2688d0b4306/306875338/video/1178489975,1178489977,1178489976/subtitles/6186588-Espa%C3%B1ol-es/master.m3u8?external-subs=1",
                        "origin": "gcs",
                        "captions": "https://skyfire.vimeocdn.com/1552086501-0x5e822a4f58b6493a2171c3bb2164c2688d0b4306/306875338/video/1178489975,1178489977,1178489976/subtitles/6186588-Espa%C3%B1ol-es/master.m3u8"
                    }
                },
                "captions": "https://139skyfiregce-vimeo.akamaized.net/exp=1552086501~acl=%2F306875338%2F%2A~hmac=3322a4f527bedd70bbd8e7b81e4e4682f496ac2e81ff4f904234c06070a56342/306875338/video/1178489975,1178489977,1178489976/subtitles/6186588-Espa%C3%B1ol-es/master.m3u8"
            },
            "progressive": [{
                "profile": 165,
                "width": 960,
                "mime": "video/mp4",
                "fps": 29,
                "url": "https://gcs-vimeo.akamaized.net/exp=1552086501~acl=%2A%2F1178489977.mp4%2A~hmac=398ebcd5b58704c4d776a1cc62c7ed47579478b6f7797c9877ccdb16de2415e4/vimeo-prod-skyfire-std-us/01/1375/12/306875338/1178489977.mp4",
                "cdn": "akamai_interconnect",
                "quality": "540p",
                "id": 1178489977,
                "origin": "gcs",
                "height": 540
            }, {
                "profile": 174,
                "width": 1280,
                "mime": "video/mp4",
                "fps": 29,
                "url": "https://gcs-vimeo.akamaized.net/exp=1552086501~acl=%2A%2F1178489976.mp4%2A~hmac=bf435b3d3492e07ce63b2cbb192cb27a7d1dd0137fbf3517afa02857de29371c/vimeo-prod-skyfire-std-us/01/1375/12/306875338/1178489976.mp4",
                "cdn": "akamai_interconnect",
                "quality": "720p",
                "id": 1178489976,
                "origin": "gcs",
                "height": 720
            }, {
                "profile": 164,
                "width": 640,
                "mime": "video/mp4",
                "fps": 29,
                "url": "https://gcs-vimeo.akamaized.net/exp=1552086501~acl=%2A%2F1178489975.mp4%2A~hmac=51068d55233ba538487a89147ce7725c0b6ce1864635ef635a36328a9d5913e3/vimeo-prod-skyfire-std-us/01/1375/12/306875338/1178489975.mp4",
                "cdn": "akamai_interconnect",
                "quality": "360p",
                "id": 1178489975,
                "origin": "gcs",
                "height": 360
            }]
        },
        "lang": "pt-BR",
        "sentry": {
            "url": "https://6f5f8e1cecfa40fb850f578b69fc1705@sentry.io/1297650",
            "enabled": false,
            "debug_enabled": true,
            "debug_intent": 0
        },
        "ab_tests": {
            "chromecast": {
                "data": {},
                "group": false
            },
            "nudge": {
                "data": {},
                "group": false
            }
        },
        "referrer": null,
        "cookie_domain": ".vimeo.com",
        "timestamp": 1552082601,
        "gc_debug": {
            "bucket": "vimeo-player-debug"
        },
        "expires": 3600,
        "text_tracks": [{
            "lang": "es",
            "url": "/texttrack/6186588.vtt?token=5c82f4b9_0x063349ba9e1a816b2bf0bb627f242b7b2a6f99c0",
            "kind": "subtitles",
            "id": 6186588,
            "label": "Espa\u00f1ol"
        }],
        "currency": "USD",
        "session": "6d6bf5352d168f63fb4c1ccb3563c588744358781552082601",
        "cookie": {
            "scaling": 1,
            "volume": 1.0,
            "quality": null,
            "hd": 0,
            "captions": null
        },
        "build": {
            "player": "",
            "backend": "1.1.17",
            "js": "3.8.33"
        },
        "urls": {
            "barebone_js": "https://f.vimeocdn.com/p/3.8.33/js/barebone.js",
            "zeroclip_swf": "https://f.vimeocdn.com/p/external/zeroclipboard/ZeroClipboard.swf",
            "fresnel": "https://fresnel.vimeocdn.com/add/player-stats",
            "js": "https://f.vimeocdn.com/p/3.8.33/js/player.pt-BR.js",
            "proxy": "https://player.vimeo.com/static/proxy.html",
            "chromeless_css": "https://f.vimeocdn.com/p/3.8.33/css/chromeless.css",
            "three_js": "https://f.vimeocdn.com/p/external/three.rvimeo.min.js",
            "sentry_url": "https://f.vimeocdn.com/p/external/sentry.min.js",
            "mux_url": "https://f.vimeocdn.com/p/external/mux.js",
            "vuid_js": "https://f.vimeocdn.com/js_opt/modules/utils/vuid.min.js",
            "chromeless_js": "https://f.vimeocdn.com/p/3.8.33/js/chromeless.js",
            "zeroclip_js": "https://f.vimeocdn.com/p/external/zeroclipboard/ZeroClipboard-patch.js",
            "css": "https://f.vimeocdn.com/p/3.8.33/css/player.css"
        },
        "signature": "22d7a98a10abc8fcf1efec8c2e07ee62",
        "flags": {
            "dnt": 0,
            "preload_video": "metadata_on_hover",
            "plays": 1,
            "partials": 1,
            "autohide_controls": 0
        },
        "country": "BR"
    },
    "player_url": "player.vimeo.com",
    "video": {
        "rating": {
            "id": 6
        },
        "version": {
            "current": null,
            "available": [{
                "is_current": 1,
                "id": 39671195,
                "file_id": 1178489876
            }]
        },
        "height": 720,
        "duration": 612,
        "thumbs": {
            "1280": "https://i.vimeocdn.com/video/746710587_1280.jpg",
            "960": "https://i.vimeocdn.com/video/746710587_960.jpg",
            "640": "https://i.vimeocdn.com/video/746710587_640.jpg",
            "base": "https://i.vimeocdn.com/video/746710587"
        },
        "owner": {
            "account_type": "business",
            "name": "Ftec | Faculdades",
            "img": "https://i.vimeocdn.com/portrait/11635326_60x60.jpg",
            "url": "https://vimeo.com/ftec",
            "img_2x": "https://i.vimeocdn.com/portrait/11635326_120x120.jpg",
            "id": 5198887
        },
        "file_codecs": {
            "hevc": {
                "hdr": [],
                "sdr": []
            },
            "avc": [1178489977, 1178489976, 1178489975]
        },
        "id": 306875338,
        "embed_code": "<iframe src=\"https://player.vimeo.com/video/306875338\" width=\"640\" height=\"360\" frameborder=\"0\" allowfullscreen><\/iframe>",
        "title": "GRA St\u00e9fani Valmini  - Aula 01 - Qualidade e Auditoria de Tecnologia a Informa\u00e7\u00e3o",
        "share_url": "https://vimeo.com/306875338",
        "width": 1280,
        "embed_permission": "public",
        "fps": 29.97,
        "spatial": 0,
        "live_event": null,
        "allow_hd": 1,
        "hd": 1,
        "lang": null,
        "default_to_hd": 0,
        "url": null,
        "privacy": "unlisted",
        "bypass_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGlwX2lkIjozMDY4NzUzMzgsImV4cCI6MTU1MjA4NjEwNH0.-t5SMsgDMvyznHodnJ86sqtIPpOCHUyfxoUmuHvGMpk",
        "unlisted_hash": "824ead1bd8"
    },
    "user": {
        "vimeo_api_interaction_tokens": null,
        "liked": 0,
        "account_type": "none",
        "vimeo_api_client_token": null,
        "logged_in": 0,
        "owner": 0,
        "watch_later": 0,
        "id": 0,
        "mod": 0
    },
    "embed": {
        "autopause": 1,
        "playsinline": 1,
        "settings": {
            "fullscreen": 1,
            "byline": 0,
            "like": 0,
            "playbar": 1,
            "title": 0,
            "color": 1,
            "speed": 0,
            "watch_later": 0,
            "share": 0,
            "scaling": 1,
            "spatial_compass": 1,
            "collections": 0,
            "info_on_pause": 0,
            "portrait": 0,
            "logo": 0,
            "embed": 0,
            "badge": 0,
            "spatial_label": 1,
            "volume": 1
        },
        "color": "00adef",
        "on_site": 0,
        "app_id": "",
        "muted": 0,
        "dnt": 0,
        "player_id": "",
        "api": 3,
        "editor": false,
        "context": "embed.main",
        "time": 0,
        "outro": "videos",
        "log_plays": 1,
        "quality": null,
        "transparent": 1,
        "loop": 0,
        "autoplay": 0
    },
    "view": 1,
    "vimeo_url": "vimeo.com"
};