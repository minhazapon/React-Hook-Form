
//
import { useForm } from "react-hook-form"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Form = () => {

    const notifySuccess = () => toast.success("Contact SuccessFully");
  const notifyError = () => toast.error("Contact Failed");

  const onSubmit = async () => {
   
    
    const formData = new FormData(event.target);

    formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      notifySuccess();
      event.target.reset();
    } else {
      notifyError();
      setResult(data.message);
    }
  };


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onForm = (data) => console.log(data)
      

    return (
        <div>
            
            <section className="p-6 bg-[#73D8FF] text-gray-50">
	<form  onSubmit={handleSubmit(onForm, onSubmit ) }  className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-black">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">React Hook Form</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">First name</label>
					<input id="firstname" type="text" {...register("firstname", { required: true })} placeholder="First name" name="form_name" className="  p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    {errors.text && <span>This field is required</span>}
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" {...register("lastname", { required: true })} placeholder="Last name"  name="form_last"  className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    {errors.text && <span>This field is required</span>}
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" {...register("email", { required: true })} placeholder="Email"  name="form_email"        className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    {errors.email && <span>This field is required</span>}
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Address</label>
					<input id="address" type="text" {...register("address", { required: true })} placeholder=""    name="form_address"          className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    {errors.text && <span>This field is required</span>}
				</div>
				{/* <div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-sm">City</label>
					<input id="city" type="text" {...register("city", { required: true })} placeholder=""    name="form_city"             className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    {errors.text && <span>This field is required</span>}
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">State / Province</label>
					<input id="state" type="text" placeholder=""  {...register("state", { required: true })}    name="form_state"           className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    {errors.text && <span>This field is required</span>}
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">ZIP / Postal</label>
					<input id="zip" type="text" placeholder=""  {...register("zip", { required: true })}    name="form_zip"             className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                    {errors.text && <span>This field is required</span>}
				</div> */}
                <div className=" "> 
                <input className=" btn  w-[400px] " type="submit" value="Submit" />
                <ToastContainer></ToastContainer>
                </div>
			    </div>
           
		</fieldset>
		
	</form>
</section>
         
            
        </div>
    );
};

export default Form;