import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    width: '200px',
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  media: {
    width: '100%',
    maxWidth: 280,
  },
  title: {
    color: theme.white,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function RefReci () {
  const classes = useStyles();
  
  const url = 'https://nu1997.github.io/portfolio/images/project/refreci/';
  
  const itemData = [
    {
      img: '1',
      title: 'Image',
      author: 'author',
    },
    {
      img: '2',
      title: 'Image',
      author: 'author',
    },
    {
      img: '3',
      title: 'Image',
      author: 'author',
    },
    {
      img: '4',
      title: 'Image',
      author: 'author',
    },
    {
      img: '5',
      title: 'Image',
      author: 'author',
    },
    {
      img: '6',
      title: 'Image',
      author: 'author',
    }
  ];

  const imgNum = 6
  const imgRender = () => {
    const imgRendered = [];
    for (let i = 1; i <= imgNum; i++) {
      imgRendered.push(
        <ImageListItem className={classes.media} cols={2.5}>
          <img 
            src={`${url}/images/project/refreci/ref-${i}.png`} 
            alt="refreci-img"
            />
          <ImageListItemBar
            title={`ref-reci-${i}`}
            className={{
              root: classes.titleBar,
              title: classes.title,
            }}
          />
        </ImageListItem>
      );
    }
    return imgRendered;
  }

  return (
    <div>
      ref:reci
      <div className={classes.root}>
        {/* <ImageList className={classes.imageList}>
          // {imgRender()}
        </ImageList> */}

        <div className={classes.root}>
          <ImageList className={classes.imageList} cols={5}>
            {itemData.map((item) => (
              <ImageListItem key={`${url}ref-${item.img}.png`}>
                <img src={`${url}ref-${item.img}.png`} alt={item.title} className={classes.image}/>
                <ImageListItemBar
                  title={item.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  )
}