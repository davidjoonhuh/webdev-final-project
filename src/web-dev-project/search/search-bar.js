import { AiOutlineSearch } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./index.css";

import { updateVideoArray } from "../reducers/video-reducer";
import { useDispatch } from "react-redux";
import youtubeApi from "../youtube-api";


function SearchBar() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const handleChange = (event) => {
    //Store the input value to local state
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const path = location.pathname;

    if (path === "/youboxd/search") {
      navigate("?criteria=" + inputText);
    } else {
      navigate("/youboxd/search?criteria=" + inputText);
    }


    // const response = await youtubeApi.get('/search', {
    //     params: {
    //         q: inputText,
    //         type: "video"
    //     }
    // })
    // await dispatch(updateVideoArray(response.data.items))
    const example = [
      {
        "kind": "youtube#searchResult",
        "etag": "tgqfx-oATmIkMhPOgasbh9lE3rU",
        "id": {
          "kind": "youtube#video",
          "videoId": "2psgnTAVz0E"
        },
        "snippet": {
          "publishedAt": "2021-08-04T03:38:41Z",
          "channelId": "UCXL1bL4sTQatHJNLbTH4GcA",
          "title": "To the Beginning",
          "description": "Provided to YouTube by Sony Music Labels Inc. To the Beginning · Kalafina To The Beginning ℗ 2012 Sony Music Labels Inc.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/2psgnTAVz0E/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/2psgnTAVz0E/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/2psgnTAVz0E/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kalafina - Topic",
          "liveBroadcastContent": "none",
          "publishTime": "2021-08-04T03:38:41Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "C9GvjBqGi0cY52bbx-L03YcdKks",
        "id": {
          "kind": "youtube#video",
          "videoId": "PPH8Y6sOLcE"
        },
        "snippet": {
          "publishedAt": "2019-03-21T04:54:17Z",
          "channelId": "UC89-DsB5zOdg9_3bdmQP7Pg",
          "title": "Kalafina「to the beginning」PV HD 1080p",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PPH8Y6sOLcE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PPH8Y6sOLcE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PPH8Y6sOLcE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "seeu shien",
          "liveBroadcastContent": "none",
          "publishTime": "2019-03-21T04:54:17Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "DUpyp3-gPh60ifjN0jdDlrjpeYM",
        "id": {
          "kind": "youtube#video",
          "videoId": "4cNbQ1x__jA"
        },
        "snippet": {
          "publishedAt": "2023-05-20T12:00:10Z",
          "channelId": "UCOoZLu3-XbgAKX-uawUxWRg",
          "title": "Fate/Zero - Opening 2 Full『to the beginning』by Kalafina",
          "description": "Fate/Zero OP/Opening Song - to the beginning by Kalafina TV Anime \"Fate/Zero\" Theme Song \"to the beginning\" - Kalafina #jpop ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4cNbQ1x__jA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/4cNbQ1x__jA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/4cNbQ1x__jA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "GAccel Kun",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-20T12:00:10Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "_bnckpRub-RG9s5ftyzxYfy62SQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "cSV9c0XRciw"
        },
        "snippet": {
          "publishedAt": "2016-10-01T16:11:02Z",
          "channelId": "UCuKaqB2fmrMvonY4_318myQ",
          "title": "To the Beginning ~English Lyrics",
          "description": "Can't stay away of Fate that long But don't worry, KnK's songs will be uploaded soon. I bet that someone will know what song is ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cSV9c0XRciw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cSV9c0XRciw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cSV9c0XRciw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kohaku Kotomine",
          "liveBroadcastContent": "none",
          "publishTime": "2016-10-01T16:11:02Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Iv0xV7tkEFizgixSRW_f6UvoJyM",
        "id": {
          "kind": "youtube#video",
          "videoId": "AShlW_tZWac"
        },
        "snippet": {
          "publishedAt": "2013-03-26T05:58:08Z",
          "channelId": "UCjTRHlbTuVZIBbhVMAQBweQ",
          "title": "Kalafina To the beginning full LIVE 2012 (Op Fate Zero 2)",
          "description": "Este Es un Op de Fate Zero..y de uno de mis grupos favoritos de Japon KALAFINA...El anime que mencione por supuesto ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/AShlW_tZWac/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/AShlW_tZWac/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/AShlW_tZWac/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DaiChi",
          "liveBroadcastContent": "none",
          "publishTime": "2013-03-26T05:58:08Z"
        }
      }
    ]
    await dispatch(updateVideoArray(example))
  };

  useEffect(() => {
    const param = new URL(window.location.href).searchParams.get("criteria");
    if (param) console.log(param);
  }, [params]);

  return <>
    <div className="row">
      <div className="position-relative">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} placeholder="Search YouTube" id="search-bar"
                 className="form-control rounded-pill ps-5" />
          <label htmlFor="search-bar" className="fs-3 position-absolute
                       wd-nudge-up">
            <AiOutlineSearch />
          </label>
        </form>
      </div>

    </div>
  </>;
}

export default SearchBar