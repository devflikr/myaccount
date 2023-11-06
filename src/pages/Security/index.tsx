import { useDocumentTitle } from 'react-unique-hooks';
import Content from '../../layouts/Content';
import { useAuthCurrentUser } from 'react-devflikrauth-hooks';
import Input from '../../components/Input';
import Form from '../../components/Form';
import FlexBox from '../../components/FlexBox';
import Button from '../../components/Button';
import { updateUserPassword } from 'devflikrauth';
import toast from 'react-hot-toast';
import formatDate from '../../core/utils/formatDate';
import { useNavigate } from 'react-router-dom';

function SecurityPage() {

    const [user] = useAuthCurrentUser();

    useDocumentTitle("Login Info");

    const navigate = useNavigate();

    if (!user) return null;

    return (
        <>
            <header className="flex flex-col gap-5 items-center">
                <img className="w-16 aspect-square" src="/assets/security.png" alt="Login Info" />
                <h1 className="text-gray-300 font-medium text-center">
                    <span className="text-red-600 text-2xl font-bold">Password & Security</span><br />
                    Secure your account by frequently updating your account password.
                </h1>
            </header>
            <Form submit={async (values, setErrors, parseError) => {
                try {

                    if (!values.oldPassword) return setErrors("oldPassword", "Old password is required");
                    if (!values.password) return setErrors("password", "New password is required");
                    if (!values.confirmPassword) return setErrors("confirmPassword", "Confirm your new password");

                    if (values.confirmPassword !== values.password) return setErrors("confirmPassword", "Password didn't match");

                    if (values.oldPassword === values.password) return setErrors("password", "New password can't be same as old one");

                    await updateUserPassword(user, values.oldPassword, values.password);

                    toast.success("Account password updated successfully");

                    navigate("../");

                } catch (error) { parseError(error); }
            }}>
                <Content className="py-5 my-10 px-2">
                    <input type="email" name="email" id="email" value={user.email} readOnly hidden />
                    <input type="username" name="username" id="username" value={user.username} readOnly hidden />
                    <Input
                        name="oldPassword"
                        type="password"
                        label="Current password"
                        autoComplete="current-password"
                    />
                    <Input
                        name="password"
                        type="password"
                        label="New password"
                        autoComplete="new-password"
                    />
                    <Input
                        name="confirmPassword"
                        type="password"
                        label="Confirm password"
                        autoComplete="new-password"
                    />
                    <FlexBox justify="center" className="pt-5">
                        <Button as="submit">Update Password</Button>
                    </FlexBox>
                    <h3 className="pt-5 px-5 text-sm text-gray-400">Your password was last updated on: <span className="text-orange-400 font-bold">{formatDate(new Date(user.passwordUpdatedAt || user.createdAt || ""))}</span></h3>
                </Content>
            </Form>

        </>
    );
}

export default SecurityPage;