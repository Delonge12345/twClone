import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import {useHomeStyles} from "../../pages/Home";
import { ButtonBase } from '@material-ui/core';


interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        text: string;
        fullname: string;
        username: string;
        avatarUrl: string;
    }
}

export const Tweet: React.FC<TweetProps> = ({user, classes}: TweetProps): React.ReactElement => {
    return (
        <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
                <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar
                            className={classes.tweetAvatar}
                            alt={`Аватарка пользователя ${user.fullname}`}
                                src={user.avatarUrl}/>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography>
                            <b>{user.fullname}</b>
                            <span className={classes.tweetUserName}>{user.username}</span>&nbsp;
                            <span className={classes.tweetUserName}>-</span>&nbsp;
                            <span className={classes.tweetUserName}>1 ч</span>
                        </Typography>
                        <Typography variant='body1' gutterBottom>
                            {user.text}
                        </Typography>
                        <div className={classes.tweetFooter}>
                            <div>
                                <IconButton color='primary'>
                                    <ChatBubbleOutlineIcon style={{fontSize: 20}}/>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton color='primary'>
                                    <RepeatIcon style={{fontSize: 20}}/>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton color='primary'>
                                    <FavoriteBorderIcon style={{fontSize: 20}}/>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton color='primary'>
                                    <PublishIcon style={{fontSize: 20}}/>
                                </IconButton>
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </Paper>
        </Paper>
    )
}