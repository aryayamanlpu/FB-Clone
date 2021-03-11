import React from "react";
import "./Siderbar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { useStateValue } from "./StateProvider";

function Siderbar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="siderbar">
            <SidebarRow src={user.photoURL} title={user.displayname}/>
           <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Centre"/>
           <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
           <SidebarRow Icon={PeopleIcon} title="Friends" />
           <SidebarRow Icon={ChatIcon} title="Messenger" />
           <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
           <SidebarRow Icon={VideoLibraryIcon} title="Vidoes" />
           <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
           
        </div>
    )
}

export default Siderbar;
