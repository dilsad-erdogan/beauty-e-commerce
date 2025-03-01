import { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux";
import ServiceCard from "../components/Card/ServiceCard";
import { useEffect, useState } from "react";
import serviceServices from "../../../api/services/service";
import { setServices } from "../redux/serviceSlice";

const Service = () => {
    const dispatch = useDispatch();
    const [service, setService] = useState([]);
    const services = useSelector((state) => state.service.services);

    useEffect(() => {
        dispatch(setServices(service));
    }, [service]);
    
    useEffect(() => {
        const fetchService = async () => {
          try {
            const data = await serviceServices.get();
            setService(data.data || []);
          } catch (error) {
            console.error("Error fetching service:", error);
          }
        };
    
        fetchService();
    }, []);

    return (
        <div className="flex flex-col lg:flex-row">
        <Toaster position="top-right" />

        {/* Products Grid */}
        <div className="w-full p-6">
            <h2 className="text-2xl font-bold mb-6">Our Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div key={service._id} className="bg-white p-4 rounded-lg shadow-md">
                        <ServiceCard data={service} />
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Service