// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import TextField from '@material-ui/core/TextField';
// import { useNavigate, Link } from "react-router-dom";
// // import BaseURL from "../../BaseURL";
// // import Avatar from '@material-ui/core/Avatar';
// import "./Adminreg.css";
// import { makeStyles } from "@material-ui/core";
// // import BaseUrl from "../../BaseURL";
// import BaseUrl from "../../BaseUrl";

// // import BaseUrl from "../../BaseUrl";

// const AdminRegistration = () => {
//   const navigate = useNavigate();
//   const [fullname, setFullname] = useState("");
//   const [email, setEmail] = useState("");


//   const [number, setNumber] = useState("");
//   const [password, setPassword] = useState("");

//   const register = async () => {
//     const url = BaseUrl() + "admin/registration";
//     const data = {
//       email: email,

//       fullname: fullname,
//       number: number,
//       password: password,
//     };

//     try {
//       const res = await axios.post(url, data);
//       localStorage.setItem("token", res.data.data.accessToken);
//       console.log("res", res);
//       navigate("/");
//     } catch (err) {
//       console.log("err", err);
//     }
//   };
//   const useStyles = makeStyles((theme) => ({
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.primary.main,
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));
//   const classes = useStyles();
//   return (
//     <div className="contain">
//       <div className="signup-page">
//       <div className="user">
//         <h2>Register</h2>
//       </div>
//       <Box mt={2} sx={{ width: 390 }} >
//         <div className="user-name" >
//           <TextField input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             type="text"
//             fullWidth
//             autoComplete="off"
//             placeholder="Email"
//             id="outlined-basic" label="Email" variant="outlined" mt="5px" />

//         </div>
//       </Box>
//       <Box mt={2} sx={{ width: 390 }} >
//         <div className="user-name" >
//           <TextField input
//             value={fullname}
//             onChange={(e) => setFullname(e.target.value)}
//             required
//             type="text"
//             fullWidth
//             autoComplete="off"
//             placeholder="Fullname"
//             id="outlined-basic" label="Fullname" variant="outlined" mt="5px" />

//         </div>
//       </Box>
     
//       <Box mt={2} sx={{ width: 390 }} >
//         <div className="user-email" >
//           <TextField input
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//             required
//             type="number"
//             fullWidth
//             // autoComplete="email"
//             placeholder="Contact No."
//             id="outlined-basic" label="Contact No." variant="outlined" mt="5px" />

//         </div>
//       </Box>
//       <Box mt={2} sx={{ width: 390 }}>

//         <div className="password">
//           <TextField id="outlined-basic" label="Password" variant="outlined" mt="5px"
//             input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             type="password"
//             placeholder="Password"
//             // label="Email Address"
//             name="password"
//             // autoComplete="email"
//             autoFocus
//           />
//         </div>

//       </Box>
      


//       <Box mt={2} sx={{ width: 290 }} >

//         <div className="register-btn">
//           <Button variant="contained" color="primary" onClick={register}>
//                 register

//           </Button>
//         </div>
//       </Box>
//       <div className="sign">
//         <Box  sx={{ display: 'flex' }} >
//           <div className="sign-in">
//             <span> Already have an account?    <Link to='/' variant="body2">
//               Login
//             </Link></span></div>
//         </Box>
//       </div>

//     </div>
//     </div >
//   );
// };

// export default AdminRegistration;
