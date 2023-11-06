import { useDocumentTitle } from 'react-unique-hooks';
import Content from '../../layouts/Content';
import { useAuthCurrentUser } from 'react-devflikrauth-hooks';
import Input from '../../components/Input';
import Form from '../../components/Form';
import FlexBox from '../../components/FlexBox';
import Button from '../../components/Button';
import { updateUserProfile } from 'devflikrauth';
import toast from 'react-hot-toast';

function ContactInfoPage() {

    const [user] = useAuthCurrentUser();

    useDocumentTitle("Contact Info");

    if (!user) return null;

    return (
        <>
            <header className="flex flex-col gap-5 items-center">
                <img className="w-16 aspect-square" src="/assets/contact.png" alt="Contact Info" />
                <h1 className="text-gray-300 font-medium text-center">
                    <span className="text-red-600 text-2xl font-bold">Contact Info</span><br />
                    Take control of your Contact Information across Devflikr and its services.
                </h1>
            </header>
            <Form submit={async (values, _, parseError) => {
                try {

                    await updateUserProfile(user, {
                        phone: values.phone,
                    });

                    toast.success("Contact info updated successfully");

                } catch (error) { parseError(error); }
            }}>
                <Content className="py-5 my-10 px-2">
                    <Input
                        name="email"
                        label="Email address"
                        defaultValue={user.email}
                        disabled
                        readOnly
                        after={<div className="text-xs px-2 pt-2 text-gray-400">Once the account is created, the email address becomes permanently linked to it and cannot be changed.</div>}
                    />
                    <Input
                        name="phone"
                        label="Phone Number"
                        type="number"
                        defaultValue={user.phone}
                    />
                    <FlexBox justify="center" className="pt-5">
                        <Button as="submit">Save Changes</Button>
                    </FlexBox>
                    <h3 className="pt-5 px-5 text-sm text-gray-400">This information is viewable by other users. You have the option to remove this information as you see fit.</h3>
                </Content>
            </Form>
        </>
    );
}

export default ContactInfoPage;