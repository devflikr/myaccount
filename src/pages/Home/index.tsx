import ContentGrid from '../../layouts/Content/Grid';
import FullNamer from '../../components/FullNamer';
import { useAuthCurrentUser } from 'react-devflikrauth-hooks';
import HomeItem from './HomeItem';
import { useDocumentTitle } from 'react-unique-hooks';

function HomePage() {
    const [user] = useAuthCurrentUser();

    useDocumentTitle("");

    if (!user) return null;

    return (
        <>
            <header className="flex flex-nowrap gap-5 items-center">
                <img className="w-16 aspect-square rounded-full overflow-hidden cs-drop-3 cs-drop-c2" src={user.profile} alt={user.username} />
                <h1 className="text-lg font-bold">
                    Welcome<br />
                    <FullNamer className="text-red-600 text-2xl" user={user} />
                </h1>

            </header>
            <ContentGrid col="1" className="my-10 gap-5">
                <HomeItem
                    to="profile"
                    image="/assets/profile.png"
                    title="Personal Profile"
                    desc="You can modify your name, gender, and birthday, and these particulars will be displayed on your profile page."
                    footer="Edit your profile"
                />
                <HomeItem
                    to="login"
                    image="/assets/login.png"
                    title="Login Details"
                    desc="You have the option to revise your username, which serves as your login credential for accessing your account. Additionally, other users can utilize it to locate your profile."
                    footer="Edit your username"
                />
                <HomeItem
                    to="contact"
                    image="/assets/contact.png"
                    title="Contact Info"
                    desc="Revise your contact information. This information can serve as a means to regain access to your account in the event that you forget your password. These details are kept private and are not visible to other users."
                    footer="Edit your phone"
                />
                <HomeItem
                    to="security"
                    image="/assets/security.png"
                    title="Password & Security"
                    desc="Update your password regularly to prevent unauthorized access. Be sure to generate a strong, secure password."
                    footer="Edit your password"
                />
                <HomeItem
                    to="devices"
                    image="/assets/devices.png"
                    title="Devices"
                    desc="Explore your connected devices and take action if needed. You have the ability to review and remove any devices that are linked to your account for added control and security."
                    footer="View connected devices"
                />
                <HomeItem
                    to="account"
                    image="/assets/account.png"
                    title="Account"
                    desc="You can review your account information such as creation date, last update date, and verification status. Additionally, you have the option to delete your account from this section."
                    footer="Manage your account"
                />
                <HomeItem
                    to={`https://support.devflikr.com/myaccount?auth=${user.index}&_refer=myaccount.devflikr.com`}
                    image="/assets/help-and-support.png"
                    title="Help and Support"
                    desc="Access resources for assistance with your account. Find helpful information and resources to address any concerns or questions you may have regarding your account. Additionally, explore options for contacting support if further assistance is needed."
                    footer="Get help with your account"
                    blank
                />
            </ContentGrid>
        </>
    );
}

export default HomePage;