import { useNavigate } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { GiLipstick } from "react-icons/gi";
import { FaBorderAll, FaServicestack } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        console.log('exit')
    };

    return (
        <div className="flex flex-col justify-between h-7/8">
            {/* Menu items */}
            <div className="flex flex-col gap-10 justify-center items-start mt-10">
                <div className="flex items-center gap-5" onClick={() => navigate(`/main`)}>
                    <div className="text-2xl">
                        <RiHomeLine />
                    </div>

                    <div className="text-xl">Main</div>
                </div>

                <div className="flex items-center gap-5" onClick={() => navigate(`/category`)}>
                    <div className="text-2xl">
                        <BiCategory />
                    </div>

                    <div className="text-xl">Category</div>
                </div>

                <div className="flex items-center gap-5" onClick={() => navigate(`/product`)}>
                    <div className="text-2xl">
                        <GiLipstick />
                    </div>

                    <div className="text-xl">Product</div>
                </div>

                <div className="flex items-center gap-5" onClick={() => navigate(`/order`)}>
                    <div className="text-2xl">
                        <FaBorderAll />
                    </div>

                    <div className="text-xl">Order</div>
                </div>

                <div className="flex items-center gap-5" onClick={() => navigate(`/service`)}>
                    <div className="text-2xl">
                        <FaServicestack />
                    </div>

                    <div className="text-xl">Service</div>
                </div>
            </div>

            {/* Low */}
            <div className="flex items-center gap-5 p-5" onClick={handleLogout}>
                <div className="text-2xl"><CiLogout /></div>
                <div className="text-xl">Logout</div>
            </div>
        </div>
    )
}

export default Sidebar;