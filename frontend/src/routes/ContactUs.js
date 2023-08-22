import LoggedInContainer from "../containers/LoggedInContainer";

const ContactUs = () => {


    return (
        <LoggedInContainer curActiveScreen={"library"}>
            <div class="border h-full p-4 rounded-lg shadow-md bg-black text-white">
                <h2 class="text-xl font-semibold mb-2">Contact Information</h2>
                <br />
                <p class="mb-2">
                    Email:  ss2010saumya@gmail.com
                </p>
                <p>
                    LinkedIn: <a href="https://www.linkedin.com/in/saumya-singh-79290b233/" target="_blank" class="text-blue-500 hover:underline">LinkedIn Profile</a>
                </p>
                <p><br /><br /><br /><br /><br /><br /><br /></p>
            </div>



        </LoggedInContainer>
    );
};


export default ContactUs;
