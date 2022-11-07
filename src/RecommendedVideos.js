import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
       <div className='recommendedVideos'>
            <h2>recommendedVideos</h2>
            <div className='recommendedVideos__videos'>
            <VideoCard 
                    title="ISRO vs NASA | The History and Future of Space Race | Dhruv Rathee"
                    views="2.5M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj"
                    channel="Dhruv Rathee"
                    image="https://i.ytimg.com/vi/1fuau2Idip8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBo2SkMO4VKjfiYXkhZ6yguqa8PaA"
                  />
                  <VideoCard 
                    title="Hard Work is not Enough | How to Think like Dhoni P-1|Hum Jeetenge"
                    views="1.2M Views"
                    timestamp="4 years ago"
                    channelImage="https://yt3.ggpht.com/ytc/AMLnZu9Amaa3KrG0ZjAoHoun5Y52-_7naTloX0IV9aH_Vw=s68-c-k-c0x00ffffff-no-rj"
                    channel="Hum Jeetenge"
                    image="https://i.ytimg.com/vi/wUJuHq8qx5A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7VklfxQ5SRZNfw-k7e4SFfu3K5A"
                  />
                  <VideoCard 
                    title="Andre de Grasse - The man that ALMOST beat Usain Bolt! 💨"
                    views="7.3M Views"
                    timestamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/ytc/AMLnZu91Flh7ObCO6aMLS5lzF4Z0xBYecb6hXLb26azOGyc=s68-c-k-c0x00ffffff-no-rj"
                    channel="Olympics"
                    image="https://i.ytimg.com/vi/t_P0obZ982o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4U28M8mXojD4578882pGj8b5eQg"
                  />
                  <VideoCard 
                    title="🔴 7 Most Popular JavaScript Libraries in 2020"
                    views="9.3K Views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Clever Programmer"
                    image="https://i.ytimg.com/vi/NWOeM-1tgUI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAsWhPdHsDx_5ttXOuGBr0IdT9PTg"
                  />
                  <VideoCard 
                    title="Apple iPad 10th Gen Unboxing & First Look - Best For Students?🔥🔥🔥"
                    views="392K Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AMLnZu8M7Fd3UDAO3_bM_wD5gC1T2mJW33D8pxRzE3hO3r4=s68-c-k-c0x00ffffff-no-rj"
                    channel="Technical Guruji"
                    image="https://i.ytimg.com/vi/-qiXeoHjsH0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDYQJQUeWNVB5je2Y4EYl_5_duyw"
                  />
                  <VideoCard 
                    title="ABHISHEK UPMANYU |Two Watches, Gym, Article - Standup Comedy By Abhishek Upmanyu | Trash"
                    views="11M Views"
                    timestamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/ytc/AMLnZu_JuGtMn-tnCEHva9hAmgOO__BCLMZdb5gEuaGlcg=s68-c-k-c0x00ffffff-no-rj"
                    channel="Abhishek Upmanyu"
                    image="https://i.ytimg.com/vi/2o5u159w_uI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBti5Cy-nRXy9WzV2VKSTJGjNtWMQ"
                  />
                  <VideoCard 
                    title="1899 | Official Hindi Trailer | Netflix India"
                    views="1M Views"
                    timestamp="1 day ago"
                    channelImage="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s68-c-k-c0x00ffffff-no-rj"
                    channel="Netflix India"
                    image="https://i.ytimg.com/vi/H8a0HDfsN5Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZJmwG3WHdtr85dQRiVVRl11Hv8A"
                  />
                  <VideoCard 
                    title="Ram Ram | MC SQUARE | Hustle 2.0"
                    views="36M Views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/Y0YHXq8Q0p7CznN7iPm2GQ0FRzfnHQbwlBW85vrN5RIM4vi9pTnAsblvdOJS5LnARTK9Zb_iN_w=s88-c-k-c0x00ffffff-no-rj"
                    channel="KaanPhod Music"
                    image="https://i.ytimg.com/vi/Tnfs0MZsBBE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAReGY30IG4ZJrcv3W_bm4aLfiVbQ"
                  />
                   <VideoCard 
                    title="Weird Genius - Sweet Scar (ft. Prince Husein)"
                    views="58.1M Views"
                    timestamp="2 years ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyhUWH0wx_MBMaRFYULMyAjwRHgoPiIuCgoiTmT=s88-c-k-c0x00ffffff-no-rj"
                    channel="Weird Genius"
                    image="https://i.ytimg.com/vi/dxIG9JtakBM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGeCi6dYpgCdt1gmXJrijVQBxhTg"
                  />
                  <VideoCard 
                    title="Day in the Life of a Japanese Game Programmer"
                    views="7M Views"
                    timestamp="9 month ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJzjOc3SNgeA1kDmwPXpSht6n0QTEhZLSciF0W5NbQ=s100-c-k-c0xffffffff-no-rj-mo"
                    channel="Paolo fromTOKYO "
                    image="https://i.ytimg.com/vi/e_TxH59MclA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC-rAIrZojwq7TqBd5Ek_r_94SBZQ"
                  />
                  <VideoCard 
                    title="Channel Update - Taking a Break, Guest Creators"
                    views="103K Views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GgcgHR-l77_lkWlrA3mU6xOkCZLB08l3b1oiw=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Traversy Media"
                    image="https://i.ytimg.com/vi/7_rz28FDpYM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCmJD5msmnDgHvpmByx1UsK2dD9iQ"
                  />
                  <VideoCard 
                    title="Anne-Marie & Ed Sheeran – 2002 [Official Acoustic Video]"
                    views="83M Views"
                    timestamp="2 years ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJxQuKjkILwNh928PJPBTKEr9c2FNLBcflE5y78YSA=s88-c-k-c0x00ffffff-no-rj"
                    channel="Anne-Marie"
                    image="https://i.ytimg.com/vi/u3ePPA0yzSU/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA40JzJrL2r8V082XSRNqxOogAM6g"
                  />
                  <VideoCard 
                    title="React & Node Tutorial - Full ECommerce in 5 Hours [2020]"
                    views="190K Views"
                    timestamp="3 month ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GjivGa_ZhV0i2BNMkSpR1qZtlzL_cH23eoeyQ=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Coding with Basir"
                    image="https://i.ytimg.com/vi/Fy9SdZLBTOo/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB3UJOyozP7f5PMcVMT6jpYPdaYqg"
                  />
                  <VideoCard 
                    title="PERN Stack Mega Course: Postgres Express React Node 6.5Hrs!"
                    views="4.1K Views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gi5EcVLrnyZ1-fUzJ5y47xgMv8U-_T_teBHCA=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Weird Genius"
                    image="https://i.ytimg.com/vi/7qAXvOFhlDc/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC7Uz6vCAsr8u2h09fW-z1UsG6cSw"
                  />
                  <VideoCard 
                    title="Build a Voice Recognition React News Application - Alan AI Voice Assistant"
                    views="23K Views"
                    timestamp="2 week ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhsPMReHx0LFOV0t7dpA7IwtGf_rf6hErq6CA=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="JavaScript Mastery"
                    image="https://i.ytimg.com/vi/rqw3OftE5sA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQLemWME87k6i_e1Qy9LGcMZJBqg"
                  />
                  <VideoCard 
                    title="🔴 Build a Zoom Clone with Node JS for Beginners"
                    views="104K Views"
                    timestamp="2 week ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Clever Programmer"
                    image="https://i.ytimg.com/vi/ZVznzY7EjuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAAHmiSo1PUEJ1QQ0Otifpqfqo_hg"
                  />
            </div>
        </div>
    )
}

export default RecommendedVideos