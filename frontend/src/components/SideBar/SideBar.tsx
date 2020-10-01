import React from 'react';
import { useHomeStyles } from '../../pages/Home'
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {Typography} from "@material-ui/core";



interface SideBarProps {
    classes: ReturnType<typeof useHomeStyles>;
}


export const SideBar:React.FC<SideBarProps> = ({classes}:SideBarProps):React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
        <li>
            <IconButton className={classes.logo} aria-label="" color='primary'>
                <TwitterIcon className={classes.logoIcon} color='primary'/>
            </IconButton>
        </li>
        <li>
            <IconButton aria-label="">
                <SearchIcon className={classes.sideMenuListItemIcon}/>
            </IconButton>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
        </li>
        <li>
            <IconButton aria-label="">
                <NotificationsNoneIcon className={classes.sideMenuListItemIcon}/>
            </IconButton>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>
        </li>
        <li>
            <IconButton aria-label="">
                <MailOutlineIcon className={classes.sideMenuListItemIcon}/>
            </IconButton>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
        </li>
        <li>
            <IconButton aria-label="">
                <BookmarkBorderIcon className={classes.sideMenuListItemIcon}/>
            </IconButton>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
        </li>
        <li>
            <IconButton aria-label="">
                <ListAltIcon className={classes.sideMenuListItemIcon}/>
            </IconButton>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
        </li>
        <li>
            <IconButton aria-label="">
                <PersonOutlineIcon className={classes.sideMenuListItemIcon}/>
            </IconButton>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">Профиль</Typography>
        </li>
    </ul>
    )
}