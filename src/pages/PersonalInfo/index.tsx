import { useDocumentTitle } from 'react-unique-hooks';
import ContentGrid from '../../layouts/Content/Grid';
import Content from '../../layouts/Content';
import { useAuthCurrentUser } from 'react-devflikrauth-hooks';
import Input from '../../components/Input';
import Form from '../../components/Form';
import FlexBox from '../../components/FlexBox';
import Button from '../../components/Button';
import Select from '../../components/Select';
import { updateUserProfile } from 'devflikrauth';
import toast from 'react-hot-toast';
import ErrorBox from '../../components/ErrorBox';

function PersonalInfoPage() {

    const [user] = useAuthCurrentUser();

    useDocumentTitle("Personal Info");

    if (!user) return null;

    return (
        <>
            <header className="flex flex-col gap-5 items-center">
                <img className="w-16 aspect-square" src="/assets/profile.png" alt="Personal Info" />
                <h1 className="text-gray-300 font-medium text-center">
                    <span className="text-red-600 text-2xl font-bold">Personal Info</span><br />
                    Take control of your Personal Information across Devflikr and its services.
                </h1>
            </header>
            <Form submit={async (values, setErrors, parseError) => {
                try {

                    if (!values.firstname) return setErrors("firstname", "First name is required");

                    await updateUserProfile(user, {
                        firstname: values.firstname,
                        lastname: values.lastname,
                        birthday: values.birthday ? new Date(values.birthday) : undefined,
                        gender: values.gender as "male" | "female" | "none" | "null",
                    });

                    toast.success("Personal info updated successfully");

                } catch (error) { parseError(error); }
            }}>
                <Content className="py-5 my-10 px-2">
                    <ContentGrid col="1">
                        <ContentGrid col="1" className="sm:grid-cols-2">
                            <Input
                                name="firstname"
                                label="First name"
                                autoComplete="given-name"
                                defaultValue={user.firstname}
                            />
                            <Input
                                name="lastname"
                                label="Last name (optional)"
                                autoComplete="family-name"
                                defaultValue={user.lastname || ""}
                            />
                        </ContentGrid>
                        <ContentGrid col="1" className="sm:grid-cols-2">
                            <Input
                                name="birthday"
                                label="Birthday"
                                type="date"
                                autoComplete="bday"
                                defaultValue={user.birthday ? `${new Date(user.birthday).getFullYear()}-${`${new Date(user.birthday).getMonth() + 1}`.padStart(2, "0")}-${`${new Date(user.birthday).getDate()}`.padStart(2, "0")}` : ""}
                            />
                            <Select
                                name="gender"
                                label="Gender"
                                autoComplete="sex"
                                defaultValue={user.gender || ""}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="none">Rather not say</option>
                                <option value="null">Remove</option>
                            </Select>
                        </ContentGrid>
                        <ErrorBox name="default" />
                        <FlexBox justify="center" className="pt-5">
                            <Button as="submit">Save Changes</Button>
                        </FlexBox>
                    </ContentGrid>
                    <h3 className="pt-5 px-5 text-sm text-gray-400">This information is viewable by other users. You have the option to remove this information as you see fit.</h3>
                </Content>
            </Form>

        </>
    );
}

export default PersonalInfoPage;