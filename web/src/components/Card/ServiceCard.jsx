const ServiceCard = ({ data }) => {
    return (
        <div className="overflow-hidden">
          {/* Service pic */}
          <div className="flex justify-center">
            <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
          </div>
      
          {/* Service content */}
          <div className="p-4 rounded-b-2xl">
            <h2 className="text-lg font-semibold mb-2">{data.name}</h2>
            <p className="text-sm mb-4 break-words">{data.time} hours</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">{data.price},00₺</span>
            </div>
          </div>
        </div>
    );
}

export default ServiceCard