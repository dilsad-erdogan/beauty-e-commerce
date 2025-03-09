import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import categoryService from "../../../api/services/categorie";
import { setCategories } from "../redux/categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await categoryService.get();
        setCategory(data.data || []);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, []);

  useEffect(() => {
    dispatch(setCategories(category));
  }, [category]);

  return (
    <div className="flex-1 overflow-y-auto mt-10 p-5">
      <div className="text-3xl font-bold text-white flex w-full" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Categories</div>

      <div className="w-full mt-6 max-w-screen-lg mx-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs uppercase text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Active</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((data) => (
              <tr key={data._id}>
                <th className="px-6 py-4 font-medium whitespace-nowrap text-white">{data.name}</th>
                <td className="px-6 py-4">{data.description}</td>
                <td className="p-2">
                  <img src={data.image} alt={data.name} className="w-16 h-16 rounded-full" />
                </td>
                <td className="px-6 py-4 flex gap-4 items-center">
                  <a href="#" className="font-medium text-red-500 hover:underline" onClick={() => handleDelete(data._id)}>Delete</a>
                  <a href="#" className="font-medium text-blue-500 hover:underline" onClick={() => handleEdit(data)}>Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Category;      