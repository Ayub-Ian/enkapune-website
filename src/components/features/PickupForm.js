import React, { useState } from 'react'
import StyledInput from '../styled-input'
import { useForm } from 'react-hook-form'
import Error from '../transitions/error';
import Submitting from '../transitions/submitting';
import Succedded from '../transitions/succedded';
import { useRouter } from 'next/navigation';

function PickupForm() {
    const router = useRouter()
    const { register, handleSubmit, reset, formState: {errors} } = useForm()
    const [submitting, setSubmitting] = useState(false);
    const [succeeded, setSucceded] = useState(false);
    const [error, setError] = useState(false);
    const navigate = () => {
        router.push("/")
      }
    
  

    const onSubmit = async (formData) => {
        setSubmitting(true);
        try {
          const res = await fetch("/api/pickup", {
            method: "POST",
            body: JSON.stringify(formData),
          });
    
          if (!((res.status >= 200) & (res.status <= 299))) {
            setError(true);
            setSubmitting(false);
            return;
          }
          setSubmitting(false);
          setSucceded(true);
          reset()
        } catch (error) {
          setError(true);
        }
    }
  return (
    <>
    <form className="md:grid md:grid-cols-2 md:gap-4 md:items-end lg:grid-cols-3" onSubmit={handleSubmit(onSubmit)} >
    <div className="flex flex-col mb-4 md:mb-0 md:py-0">
      <StyledInput type={"text"} placeholder={"Mobile number"} errors={errors} register={register} name="phone" message="Phone number is required" />
    </div>
    <div className=" flex flex-col mb-4 md:mb-0  md:py-0">
      <StyledInput type={"text"} placeholder={"Preferred names"} errors={errors} register={register} name="fullname" message="Fullname is required" />
    </div>
    <div className=" flex flex-col mb-4 md:mb-0 r md:py-0">
      <StyledInput type={"text"} placeholder={"Personal email"} errors={errors} register={register} name="email" message="Email is required" />
    </div>
    <div className=" flex flex-col mb-4 md:mb-0 r md:py-0">
      <StyledInput type={"number"} placeholder={"Number of pax"} errors={errors} register={register} name="people" message="Specify number of people" />
    </div>
    <div className=" flex flex-col  mb-4 md:mb-0  md:py-0">
      <StyledInput type={"date"} errors={errors} register={register} name="pickupDate" message="Pickup date is required"  />
    </div>

    <button
      type="submit"
      className=" uppercase bg-[#2C2421] border border-[#2C2421] rounded-lg py-3 px-7 mb-4 w-full md:m-0 "
    >
      Request pickup
    </button>

  </form>
  
  {error && <Error error={error} setError={setError} />}
  {submitting && <Submitting submitting={submitting} />}
  {succeeded && <Succedded succeeded={succeeded} homeNavigate={navigate} setSucceded={setSucceded} />}
  </>
  )
}

export default PickupForm