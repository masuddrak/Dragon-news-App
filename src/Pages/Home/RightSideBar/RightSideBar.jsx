
import { FaFacebookF, FaGithub, FaGoogle,FaTwitter,FaInstagramSquare    } from "react-icons/fa";

const RightSideBar = () => {
    return (
        <div>
            {/* sigin with social media */}
            <div className="mb-5">
                <h3 className="text-xl font-bold">Login With</h3>
                <div className="space-y-3 mt-3">
                    <button className="btn btn-outline w-full text-lg">
                        <FaGoogle />
                        Google
                    </button>
                    <button className="btn btn-outline w-full text-lg">
                        <FaGithub />
                        Google
                    </button>
                </div>
            </div>
            {/* sigin with social media */}
            <div className="mb-5">
                <h3 className="text-xl font-bold">Find Us On</h3>
                <div className="mt-3">
                    <h1 className="border-[0.2px] w-full text-lg flex items-center gap-3 border-gray-600  p-3 rounded-t-md">
                    <FaFacebookF />

                        Google
                    </h1>
                    <h1 className="border-[0.2px] w-full text-lg flex items-center gap-3  border-gray-600 p-3 border-t-0">
                    <FaInstagramSquare />

                        Google
                    </h1>
                    <h1 className="border-[0.2px] w-full text-lg flex items-center gap-3 border-gray-600  p-3 border-t-0 rounded-b-md">
                        <FaTwitter  />
                        Google
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;