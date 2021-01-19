import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export const Footer = () => {
    return (
        <div className='footer-container'>
             <h3>&copy;M.Masham 2020</h3>
             <br/>
             <FacebookIcon/>
             {" "}
             <GitHubIcon />
             {" "}
             <TwitterIcon/>
             {" "}
             <InstagramIcon/>
        </div>
    )
}
