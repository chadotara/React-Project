import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import { data, useFetcher, useParams } from 'react-router-dom'
import moment from 'moment'

const Playvideo = () => {
    const { videoId } = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null)
    const [commentdata, setCommentData] = useState([])

    const fetchVideoData = async () => {
        const video_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(video_Url).then(response => response.json()).then(data => setApiData(data.items[0]))
    }

    const fetchOther = async () => {


        const chaneeldata_Url = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY} `
        await fetch(chaneeldata_Url).then(res => res.json()).then(data => setChannelData(data.items[0]))


        const commetUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        await fetch(commetUrl).then(res => res.json()).then(data => setCommentData(data.items))
    }


    useEffect(() => {
        fetchVideoData();
    }, [videoId])

    useEffect(() => {
        fetchOther();
    }, [apiData])
    return (
        <div className='playvideo'>


            {/* <video src={video1} controls autoPlay muted></video> */}

            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : "16K"} views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
                <div>
                    <span><img src={like} alt="" />{apiData ? value_converter(apiData.statistics.likeCount) : 155}</span>
                    <span><img src={dislike} alt="" />2</span>
                    <span><img src={share} alt="" />share</span>
                    <span><img src={save} alt="" />save</span>

                </div>
            </div><hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
                    <span>
                        {channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"} Subscribers
                    </span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description Here"}
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, quo. Explicabo voluptas, error magni, est corrupti esse, deserunt consequuntur iure minus adipisci quod culpa vel voluptatum. Suscipit praesentium at quam.</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 202} Comments</h4>
                {commentdata.map((item, index) => {
                    return (
                        <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>2 days ago</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>

                                    <img src={dislike} alt="" />
                                </div>
                            </div>
                        </div>)
                })}


            </div>


        </div>
    )
}

export default Playvideo
