
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

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

                        Facebook
                    </h1>
                    <h1 className="border-[0.2px] w-full text-lg flex items-center gap-3  border-gray-600 p-3 border-t-0">
                        <FaInstagramSquare />

                        Instagram
                    </h1>
                    <h1 className="border-[0.2px] w-full text-lg flex items-center gap-3 border-gray-600  p-3 border-t-0 rounded-b-md">
                        <FaTwitter />
                        Twitter
                    </h1>
                </div>
            </div>
            {/* sigin with social media */}
            <div className="mt-10 bg-gray-800 flex justify-center p-3">
                <div className="">
                    <h3 className="text-xl font-bold">Q Zone</h3>
                    <div className="mt-3 space-y-10">
                        <img src={qzone1} alt="" />
                        <img src={qzone2} alt="" />
                        <img src={qzone3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;