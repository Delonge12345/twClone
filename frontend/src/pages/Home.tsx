import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {InputBase, Typography} from "@material-ui/core";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import {Tweet} from "../components/Tweet/Tweet";
import {SideBar} from "../components/SideBar/SideBar"

export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36,

    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        '& li': {
            display: 'flex',
            alignItems: 'center'
        },
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    sideMenuListItemIcon: {
        fontSize: 28
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0
    },
    tweetsHeader: {
        borderRadius: 0,
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800
        }
    },
    tweet: {
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgb(245,248,250)'
        }
    },
    tweetAvatar:{
          width: theme.spacing(5),
          height: theme.spacing(5),
    },
    tweetFooter: {
        display: 'flex',
        position:'relative',
        left: -13,
        justifyContent: 'space-between',
        width: 450

    },
    tweetUserName: {
        color: grey[500]
    }
}))


const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: "#E6ECF0",
            padding: 0,
            height: 45
        },
    })
)(InputBase)


export const Home = () => {
    const classes = useHomeStyles();
    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                   <SideBar classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    {
                        [...new Array(20).fill(
                            <Tweet
                                classes={classes}
                                user={{
                                    fullname: 'Delonge1',
                                    avatarUrl: 'https://images.unsplash.com/profile-1533094978414-38e5903a4585?auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
                                    username: '@delonge1',
                                    text: 'Неважно какое у тебя лицо – важно, что оно выражает. Неважно какой у тебя голос – важно как дороги твои слова. Не имеет значения как ты говоришь – твои поступки говорят сами за себя.'
                                }}
                        />)]
                    }
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField
                        placeholder="Поиск по твиттеру"
                        fullWidth/>
                </Grid>
            </Grid>
        </Container>
    )
}