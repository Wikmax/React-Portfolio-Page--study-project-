import React, { Component } from 'react';
import SOCIAL_PROFILES_ARRAY from './SocialProfilesArray.jsx';

class SingleSocialProfile extends Component {
    render() {
        const { image, link } = this.props.singleSocialProfile;
        return (
            <div className="socialProfiles">
                <a href={link} target="_blank">
                <img src={image} alt="Social profile image" />
                </a>
            </div>

        )
    }
}

class AllSocialProfiles extends Component {

    render() {
        return (
                <div>
                <h3>Contact:</h3>
                    {
                        SOCIAL_PROFILES_ARRAY.map((PROFILE) => {
                            return (
                                <SingleSocialProfile key={PROFILE.id} singleSocialProfile={PROFILE} />
                            )
                        })
                    }
                </div>
            
        )
    }


}
export default AllSocialProfiles;