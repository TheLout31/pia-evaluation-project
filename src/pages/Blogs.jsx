import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../Redux/Reducers/blogsSlice";

const Blogs = () => {
  const { data, loading, error } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
    console.log(data);
  }, [dispatch]);

  if (loading) return <h3>Loading.....</h3>;
  if (error) return <h3>Error:{error}</h3>;
  return (
    <div class="flex flex-col gap-2 p-8 sm:items-center sm:gap-6">
      {data.map((item) => (
        <div>
          <h3 class="text-3xl font-bold text-blue-300 hover:text-blue-500" key={item.id}>
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
