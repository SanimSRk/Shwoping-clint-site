import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { name, images, brand, type, price } = data;
    const product = { name, images, brand, type, price };
    fetch('')
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className="w-2/3 mx-auto my-[100px] shadow-lg py-[72px] px-[100px]">
      <h2 className="text-3xl font-bold text-center mt-3">
        <span className="text-[#FF497C]">Add</span> Your Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
              {...register('name', { required: true })}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter image url"
              className="input input-bordered"
              required
              {...register('images', { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-4 my-3">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your brand name "
              className="input input-bordered"
              required
              {...register('brand', { required: true })}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Type </span>
            </label>
            <input
              type="text"
              placeholder="Enter Type"
              className="input input-bordered"
              required
              {...register('type', { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Enter Price "
              className="input input-bordered"
              required
              {...register('price', { required: true })}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Enter rating"
              className="input input-bordered"
              required
              {...register('rating', { required: true })}
            />
          </div>
        </div>
        <input
          className="text-white btn w-full mt-6 bg-[#FF497C]"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
