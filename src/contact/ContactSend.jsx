import React, { useState } from "react";

import {
  Card,
  Input,
  Textarea,
  Button,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";

const ContactSend = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    domain: "",
    phone: "",
    message: "",
  });
  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setData({ ...data, [name]: value });
  // };
  //   const handleSubmit=(e)=>{
  //     e.preventDefault()
  //     console.log('hii')
  // alert('you have successfully submitted');
  // console.log(data)
  // setData({name:'',email:'',phone:'',message:''})

  //   }
  // const handleClick = (e) => {
  //   // const name=e.target.name;
  //   e.preventDefault();
  //   console.log(data);
  // };
  return (
    <div className=" grid place-items-center mt-2 rounded">
      <Card color="transparent" shadow={true} className="p-7 bg-white">
        <form
          action="https://formspree.io/f/xeqyjbww"
          method="POST"
          className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              name="name"
              //onChange={handleChange}
              //value={data.name}
              required
              size="lg"
              placeholder="Your full Name"
              label="name"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              name="email"
             // onChange={handleChange}
              //value={data.email}
              required
              label="email"
              size="lg"
              placeholder="name@mail.com"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Contact Number
            </Typography>
            <Input
              name="phone"
              //value={data.phone}
              //onChange={handleChange}
              label="Phone"
              required
              type="number"
              size="lg"
              placeholder="Contact No"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Choose Course
            </Typography>
            <Select label="Select Domain" name="domain">
              <Option value="adv">Adv java fullStack</Option>
              <Option value="core">Core java Basic</Option>
              <Option value="oracle">Oracle DB</Option>
              <Option value="design">Web Design</Option>
              <Option value="c">C c++</Option>
              <Option value="php">Php</Option>
              <Option value="dot">Dot Net</Option>
              <Option value="python">Python</Option>
              <Option value="other">Other</Option>
            </Select>

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Message
            </Typography>

            <Textarea
              label="Message"
              name="message"
              //onChange={handleChange}
              //value={data.message}
              required
            />

            <Button
              type="submit"
              value="send"
              className="bg-red-600 text-black hover:bg-black hover:text-red-600"
            
            >
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ContactSend;
