import React from 'react'
import Input from '../Component/inputComp';
import "../Pages/CSS/register.css";
import { useForm} from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    fullname: yup.string().required("Please Enter your Full Name"),
    phonenumber: yup
      .string()
      .required("Phone Number is Required")
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        "phone number must be valid"
      ),
    email: yup
      .string()
      .required("Email Address is required")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "email must be valid"
      ),
    password: yup.string().min(6, "Password must be at least 6 characters"),
    address: yup.string().required("this field must be filled"),
    identification: yup
      .mixed()
      .test("fileSize", "File size is too large", (value) => {
        return !value || value[0].size <= 1048576; // 1 MB
      })
      .test("fileType", "Only image files are allowed", (value) => {
        return !value || value[0].type.includes("image/");
      })
      .nullable(true),
    role: yup.string().required("Please select a role"),
  });
  
const Register = () => {

    const {
        handleSubmit, 
        register,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(schema)
      });
      
      const formSubmit = (data) => {
        console.log(data);
        routeChange(); // Redirect to another page
      };
      
      const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting
        handleSubmit(formSubmit)(event); // Call the form submission handler
      }
      
      let navigate = useNavigate(); 
      const routeChange = () => { 
        let path = `/confirm-email`; 
        navigate(path);
      }
      
    return <div className="sign-up">
        <form onSubmit={handleSubmit(formSubmit)}>
           <Input 
                id="fullname"
                label="Full Name"
                type="text"
                placeholder="Type Your Full Name"
                register={{...register("fullname")}}
                errorMessage={errors.fullname?.message}
            />
            <Input 
                id="email"
                label="Email"
                type="email"
                placeholder="Type Your Email Address"
                register={{...register("email")}}
                errorMessage={errors.email?.message}
            />
            <Input 
                id="phonenumber"
                label="Phone Number"
                type="text"
                placeholder="Type Your Phone Number"
                register={{...register("phonenumber")}}
                errorMessage={errors.phonenumber?.message}
            />
            <Input 
                id="password"
                label="Password"
                type="password"
                placeholder="Type Your Password"
                register={{...register("password")}}
                errorMessage={errors.password?.message}
            />
            <Input 
                id="address"
                label="Address"
                type="text"
                placeholder="Type Your  Address"
                register={{...register("address")}}
                errorMessage={errors.address?.message}
            />
            {/* <Input
                id="role"
                label="Role"
                type="radio"
                placeholder="role"
                register={{...register("role")}}
                errorMessage={errors.role?.message}
                /> */}
                <div>
                    <label htmlFor="role">Role</label>
                    <br />
                    <input type="radio" id="tasker" name="role" value="TASKER" {...register("role")} />
                    <label htmlFor="tasker">Tasker</label>
                    <br />
                    <input type="radio" id="doer" name="role" value="DOER" {...register("role")} />
                    <label htmlFor="doer">Doer</label>
                    <br />
                    </div>

            <Input 
                id="identification"
                label="Valid Identification"
                type="file"
                placeholder="upload image"
                register={{
                    ...register("identification"), 
                    validate: (value) => {
                    return schema.fields.identification.validate(value);
                }
            }}
            errorMessage={errors.identification?.message}
        />


            <button type='submit'className='sign-up-btn'>Sign Up</button>
        </form>

        <p>Already have an account? <span><a href="/login">Login</a></span></p>
    </div>
}
 
export default Register;