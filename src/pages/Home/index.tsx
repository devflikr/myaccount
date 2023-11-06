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
                    title="Personal Info"
                    desc="Access and control your personal information, including the option to choose what details, such as contact information, are visible to others for easy communication. Additionally, view a concise overview of your profiles."
                    footer="Edit your profile"
                />
                <HomeItem
                    to="login"
                    image="/assets/login.png"
                    title="Login Info"
                    desc="Manage and oversee your login information, with the ability to determine which details are visible to others for seamless access. Additionally, gain a streamlined summary of your profiles for quick reference."
                    footer="Edit your username"
                />
                <HomeItem
                    to="contact"
                    image="/assets/contact.png"
                    title="Contact Info"
                    desc="Administer and oversee your contact information, allowing you to decide which details are visible to others for efficient communication. Furthermore, access a condensed overview of your contact details for convenient reference."
                    footer="Edit your phone"
                />
                <HomeItem
                    to="security"
                    image="/assets/security.png"
                    title="Security"
                    desc="Manage your security settings and options. You can customize your preferences to ensure your information is protected and secure. Additionally, review a summary of your current security measures."
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
                    desc="Explore your connected devices and take action if needed. You have the ability to review and remove any devices that are linked to your account for added control and security."
                    footer="Manage your account"
                />
                <HomeItem
                    to={`https://support.devflikr.com/u/${user.index}/myaccount?ref=myaccount`}
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