import React from "react";
import Navbar from '../../Navbar/Navbar.view';
import Footer from "../../Footer/Footer.view";
import TabGroup from "../../Tabs/Tabs.view";
import ProfileHeader from "../../ProfileHeader/ProfileHeader.view";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <ProfileHeader/>
      <TabGroup/>
      <Footer />
    </div>
  );
};

export default Profile;
