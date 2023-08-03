import StyledInput from "@/components/styled-input";
import React from "react";

function PickupRequest() {
  return (
    <div className="bg-[#F36523] py-14">
      <div className="px-4 md:max-w-xl md:mx-auto lg:max-w-3xl">
        <form className="md:grid md:grid-cols-1 md:gap-4 md:items-end lg:grid-cols-5">
            <div className="flex flex-col py-2 md:py-0">
                <label className="fs-4">Phone number</label>
                <StyledInput type={"text"} placeholder={"Mobile number"} />
            </div>
            <div className=" flex flex-col py-2 md:py-0">
                <label className="fs-4">Fullname</label>
                <StyledInput type={"text"} placeholder={"Preferred names"} />
            </div>
            <div className=" flex flex-col py-2 md:py-0">
                <label className="fs-4">Email</label>
                <StyledInput type={"text"} placeholder={"Personal email address"} />
            </div>
            <div className=" flex flex-col py-2 md:py-0">
                <label className="fs-4">Pickup date</label>
                <StyledInput type={"date"} placeholder={"Mobile number"} />
            </div>

        </form>
      </div>
    </div>
  );
}

export default PickupRequest;
