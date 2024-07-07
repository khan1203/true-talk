import {resend} from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { APIResponse } from "@/types/APIResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<APIResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Msg-Me Verification code',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return {success: true, message: 'Verification Email send successfully'}
    } catch (emailError) {
        console.error("Error sending verification email", emailError)
        return {success: false, message: 'Failed to send verification error'}
    }
}