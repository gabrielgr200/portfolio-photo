import React from "react";
import { ImFacebook, ImTwitter, ImPinterest, ImInstagram, ImYoutube } from 'react-icons/im'

export function Social() {
    return (
        <div className="hidden xl:flex ml-24">
            <ul className="flex gap-x-4">
                <li><a href="#" target="_blanck"><ImFacebook /></a></li>
                <li><a href="#" target="_blanck"><ImTwitter /></a></li>
                <li><a href="#" target="_blanck"><ImPinterest /></a></li>
                <li><a href="#" target="_blanck"><ImInstagram /></a></li>
                <li><a href="#" target="_blanck"><ImYoutube /></a></li>
            </ul>
        </div>
    );
}