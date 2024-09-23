import React from 'react';
import TagIcon from '@mui/icons-material/Tag';
import ImageIcon from '@mui/icons-material/Image';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';


function Main() {
  return (
    <div className='flex flex-col gap-5'>

      <div id='contentShare' className='bg-postColor p-7 rounded-xl flex flex-col gap-5'>
        <div className='flex flex-row items-center gap-3'>
          <div className='h-10 w-11 rounded-full bg-indigo-400'></div>
          <input type="text" placeholder="What's happening!?" className='h-10 w-full px-4 placeholder:text-pBtn outline-none rounded-lg bg-inputColor border border-inputBorder' />
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center gap-3'>
            <div className='flex flex-row items-center gap-1 text-pBtn'>
              <ImageIcon/>
              <p>Media Content</p>
            </div>
            <div className='flex flex-row items-center gap-1 text-pBtn'>
              <TagIcon/>
              <p>Hashtags</p>
            </div>
          </div>
          <button className='bg-pBtn w-20 h-8 rounded-xl'>Post</button>
        </div>
      </div>

      <div className='flex flex-row items-center justify-between '>
        <p className='text-sm'>Something else</p>
        <hr className='border border-lineColor flex-1 ml-5' />
      </div>

      <Post/>
      <Post/>
      <Post/>
      
    </div>
  )
}

export default Main

//extra components

const Post = () =>{
  return(
    <div id='post' className='bg-postColor py-5 px-10 rounded-xl flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-3'>
              <div className='h-12 w-12 bg-indigo-400 rounded-full'></div>
              <div className='flex flex-col'>
                <p>soukaina akaroum</p>
                <h6 className='text-sm'>14 May at 6:52 PM</h6>
              </div>
            </div>
            <div><MoreHorizIcon/></div>
          </div>
          <div className='w-full h-96 bg-slate-700 rounded-xl'></div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto deserunt expedita. Ipsa molestias inventore... <span className='text-pBtn'>more</span></p>
          </div>
        </div>
        <div className='flex flex-row items-center gap-5 py-3 border-t border-t-hr1'>
          <FavoriteIcon className='text-pBtn' />
          <CommentIcon className='text-pBtn' />
        </div>
    </div>

  )
}