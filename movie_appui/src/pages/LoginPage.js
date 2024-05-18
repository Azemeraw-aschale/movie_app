
// import React, { useEffect, useRef, useState, useContext } from 'react'

// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/images/logo.png';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUsers } from '../api/accountSlice';
// import toast, { Toaster } from 'react-hot-toast';
// import { useFormik } from 'formik';

// function LoginPage() {
//     // const userRef = useRef();
//     // const errRef = useRef();
//     const dispatch = useDispatch();
//     // const state = useSelector((state) => state);

//     // request status
//     // const [loginStatus, setLoginStatus] = useState("idle");
//     const navigate = useNavigate();

//     // const [errMsg, setErrMsg] = useState();
//     // const [success, setSuccess] = useState(false);

//     // const [users, setUsers] = useState({
//     //     phone_number: '',
//     //     password: ''
//     // })
//     // useEffect(() => {
//     //     userRef.current.focus();
//     // }, [])

//     // useEffect(() => {
//     //     setErrMsg('');
//     // }, [users])

//     const formik = useFormik({
//         initialValues: {
//             phone_number: '',
//             password: ''
//         },
//         validate: usernameVerify,
//         validateOnBlur: false,
//         validateOnChange: false,
//         onSubmit: async values => {
//             try {
//                 let registerPromise = loginUsers(values);
//                 toast.promise(registerPromise, {
//                     loading: 'login...',
//                     success: <b>Login Successfully...!</b>,
//                     error: <b>failed login.</b>
//                 });
//                 await registerPromise;
//                 navigate('/user');
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     });

//     return (
//         <>
//             <Toaster position='top-center' reverseOrder={false}></Toaster>
//             <div className='m-4 grid  gap-4 '>
//                 <div className='min-h-[20px] justify-self-end'>
//                     {/* <div className='container'>
//                         <LanguageSelector />
//                     </div> */}
//                 </div>
//                 <div className='min-h-[10px] justify-self-center'>
//                     <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={logo} alt="" />
//                 </div>
//                 <h2 class="text-2xl font-semibold text-center mb-0">Login</h2>
//                 <p class="text-gray-600 text-center mb-0">Welcome to yene delivery</p>
//                 <div className='min-h-[100px]  justify-self-center'>
//                     <div className='min-h-[100px] border bg-white shadow px-5 pt-3 pb-2 rounded'>

//                         <form className='py-1' onSubmit={formik.handleSubmit}>
//                             <div className='mb-4'>
//                                 <input type='text' name='phone_number' className='form-control' placeholder="enter phone number"
//                                     {...formik.getFieldProps('phone_number')} required />
//                             </div>
//                             <div className='mb-4'>
//                                 <input type='password' name='password' className='form-control' placeholder="enter password"
//                                     {...formik.getFieldProps('password')} required />
//                             </div>
//                             <div className='mb-2'>
//                                 <button type="submit" class="w-full bg-orange text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
//                             </div>
//                         </form>
//                         <div className='mb-2 min-h-[20px] justify-self-center'>
//                             <span className='line'>
//                                 <a href='#' className='text-orange text-decoration-none'>forget password</a>
//                             </span>
//                         </div>
//                         <p>
//                             Don't have yet account&nbsp;&nbsp;
//                             <span className='line'>
//                                 <Link to={'/register'} href='#' className='text-orange text-decoration-none'>Sign up</Link>
//                             </span>
//                         </p>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }
// function usernameVerify(values, error = {},) {
//     if (!values.phone_number) {
//         error.phone_number = toast.error('Phonenumber Required...!');
//     } else if (values.phone_number.includes(" ")) {
//         error.phone_number = toast.error('Invalid Phonenumber...!')
//     } else if (!values.password) {
//         error.password = toast.error("Password Required...!");
//     } else if (values.password.includes(" ")) {
//         error.password = toast.error("Wrong Password...!");
//     } else if (values.password.length < 4) {
//         error.password = toast.error("Password must be more than 4 characters long");
//     }

//     return error;
// }
// export default LoginPage
