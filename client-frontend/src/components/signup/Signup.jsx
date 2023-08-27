import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import './signup.css'
import axios from 'axios'


const Signup = () => {

  // const navigate = useNavigate()

  const initialValue = {
    firstName: '',
    secondName: '',
    lastName: '',
    shopName: '',
    shopRegistrationNumber: '',
    aadharNumber: Number,
    location: '',
    email: '',
    contactNumber: Number,
    password: '',
    cordinates: ''
  }

  const [formValues, setFormValues] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    // console.log(formValues, value)
    setFormValues({ ...formValues, [name]: value })
  }

//   useEffect(() => {
//     const postData = async() =>{
//       if (Object.keys(formErrors).length === 0 && isSubmit) {
//         let res = await axios.post(
//           'http://localhost:5555/api/shopkeeper/register',
//           {
//             firstName: formValues.firstName,
//             lastName: formValues.lastName,
//             secondName: formValues.secondName,
//             shopName: formValues.shopName,
//             shopRegistrationNumber: formValues.shopRegistrationNumber,
//             aadharNumber: formValues.aadharNumber,
//             location: formValues.location,
//             email: formValues.email,
//             contactNumber: formValues.contactNumber,
//             password: formValues.password
//           }
//         )
//         if (res.data.result) {
//           localStorage.setItem('user', res.data.token)
//           navigate('/')
//         } else if (res.data.alreadyExist === true) {
//           navigate('/signin')
//           // console.log(res.data)
//         }else{
//             setIsSubmit(false)
//         }
//       }else{
//           setIsSubmit(true)
//       }
//     }
//   postData()
// }, [formErrors, isSubmit])

  const validate = async () => {
    // const errors = {}
    const values = formValues; 

    if (
      !values.firstName.length ||
      validateSpecialChar(values.firstName) ||
      validateNumericChar(values.firstName)
    ) {
      setFormErrors({...formErrors, [values.firstName]:'Please Enter Valid First Name'})
    }
    if (
      !values.secondName ||
      validateSpecialChar(values.secondName) ||
      validateNumericChar(values.secondName)
    ) {
      setFormErrors({...formErrors, [values.secondName]:'Please Enter Valid second Name!'})
    }
    if (
      !values.lastName ||
      validateSpecialChar(values.lastName) ||
      validateNumericChar(values.lastName)
      ) {
        setFormErrors({...formErrors, [values.lastName]:'Please Enter Valid Last Name!'})
        
      }
    if (!values.shopName || validateSpecialChar(values.shopName)) {
      setFormErrors({...formErrors, [values.shopName]:'Shop Name is required'})
    }
    if (!values.shopRegistrationNumber) {
      setFormErrors({...formErrors, [values.shopRegistrationNumber]:'Shop Registration Number is required'})
    }
    if (!values.aadharNumber) {
      setFormErrors({...formErrors, [values.aadharNumber]:'Please enter aadhar Number'})
    } else if (!validateAadharNumber(values.aadharNumber)) {
      setFormErrors({...formErrors, [values.aadharNumber]:'Please enter valid Aadhar number'})
    }
    
    if (!values.location) {
      setFormErrors({...formErrors, [values.location]:'Please enter Location'})
    }
    
    if (!values.email || validateEmail(values.email)) {
      setFormErrors({...formErrors, [values.email]:'Please enter valid Email!'})
    }
    
    if (!values.contactNumber || !validateContactNumber(values.contactNumber)) {
      setFormErrors({...formErrors, [values.contactNumber]:'Please Enter Valid Contact Number'})
    }
    
    if (!values.password) {
      setFormErrors({...formErrors, [values.password]:'Please enter Password!'})
    } else if (!validateSpecialChar(values.password)) {
      setFormErrors({...formErrors, [values.password]:'Password must contain specialCharacter'})
    } else if (!validateNumericChar(values.password)) {
      setFormErrors({...formErrors, [values.password]:'Password must contain numeric character'})
    } else if (values.password.length < 8) {
      setFormErrors({...formErrors, [values.password]:'Password must more then 8 character'})
    }
  }

  function validateNumericChar (string) {
    const numericPattern = /[0-9]/
    return numericPattern.test(string)
  }

  function validateSpecialChar (string) {
    const specialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/
    return specialChar.test(string)
  }

  function validateContactNumber (phoneNumber) {
    const phonePattern = /^[0-9]{10}$/
    return phonePattern.test(phoneNumber)
  }
  function validateAadharNumber (phoneNumber) {
    const phonePattern = /^[0-9]{12}$/
    return phonePattern.test(phoneNumber)
  }

  function validateEmail (string) {
    const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return !regx.test(string)
  }

  const onSubmitHandle = async event => {
    event.preventDefault() // Prevent the form from submitting
    await validate(formValues) 
    setIsSubmit(true)
    if(!Object.keys(formErrors).length  && isSubmit){
    console.log(Object.keys(formErrors).length , isSubmit)
    console.log(formErrors)}
  else{
      console.log(Object.keys(formErrors).length)
      setIsSubmit(false)
    }
  }

  return (
    <div className='signupContainer'>
      <form onSubmit={onSubmitHandle} className='signupForm'>
        <h1 className='signupHeading'>Sign up</h1>
        <div className='signupInputContainer'>
          <div className='userName'>
            <div className='firstNameContainer'>
              <input
                className='signupInput'
                type='text'
                name='firstName'
                id='firstName'
                placeholder='First Name'
                value={formValues.firstName}
                onChange={handleChange}
              />
              <p className='errorBox'>
                {formErrors.firstName ? '*' + formErrors.firstName : ''}
              </p>
            </div>

            <div className='secondNameContainer'>
              <input
                className='signupInput'
                type='text'
                name='secondName'
                id='secondName'
                placeholder='Second Name'
                value={formValues.secondName}
                onChange={handleChange}
              />
              <p className='errorBox'>
                {formErrors.secondName ? '*' + formErrors.secondName : ''}
              </p>
            </div>

            <div className='lastNameContainer'>
              <input
                className='signupInput'
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Last Name'
                value={formValues.lastName}
                onChange={handleChange}
              />
              <p className='errorBox'>
                {formErrors.lastName ? '*' + formErrors.lastName : ''}
              </p>
            </div>
          </div>

          <div className='shopDetails'>
            <div className='shopNameContainer'>
              <input
                className='signupInput'
                type='text'
                name='shopName'
                id='shopName'
                placeholder='Shop Name'
                value={formValues.shopName}
                onChange={handleChange}
              />
              <p className='errorBox'>
                {formErrors.shopName ? '*' + formErrors.shopName : ''}
              </p>
            </div>

            <div className='shopRegistrationContainer'>
              <input
                className='signupInput'
                type='text'
                name='shopRegistrationNumber'
                id='shopRegistrationNumber'
                placeholder='Shop Registration Number'
                value={formValues.shopRegistrationNumber}
                onChange={handleChange}
              />
              <p className='errorBox'>
                {formErrors.shopRegistrationNumber
                  ? '*' + formErrors.shopRegistrationNumber
                  : ''}
              </p>
            </div>
          </div>

          <div className='addharandlocation'>
            <div className='locationContainer'>
              <input
                className='signupInput'
                type='number'
                name='aadharNumber'
                id='aadharNumber'
                placeholder='Aadhar Number'
                value={formValues.aadharNumber}
                onChange={handleChange}
              />
              <p className='errorBox'>
                {formErrors.location ? '*' + formErrors.location : ''}
              </p>
            </div>
            <div className='shopRegistrationContainer'>
              <input
                className='signupInput'
                type='text'
                name='location'
                id='location'
                placeholder='Location'
                value={formValues.location}
                onChange={handleChange}
              />
              <p className='errorBox'>
                {formErrors.location ? '*' + formErrors.location : ''}
              </p>
            </div>
          </div>

          <div className='contactInfo'>
            <div className='emailContainer'>
              <input
                className='signupInput'
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email'
                value={formValues.email}
                onChange={handleChange}
              />
              <p className='errorBox'>
                {formErrors.email ? '*' + formErrors.email : ''}
              </p>
            </div>
            <div className='contactNumberContainer'>
              <input
                className='signupInput'
                type='number'
                name='contactNumber'
                id='contactNumber'
                placeholder='Contact Number'
                value={formValues.contactNumber}
                onChange={handleChange}
              />
              <p className='errorBox'>
                {formErrors.contactNumber ? '*' + formErrors.contactNumber : ''}
              </p>
            </div>
          </div>

          <div className='passwordContainer'>
            <input
              className='signupInput'
              type='password'
              name='password'
              placeholder='Enter Your Password'
              value={formValues.password}
              onChange={handleChange}
            />
            <p className='errorBox'>
              {formErrors.password ? '*' + formErrors.password : ''}
            </p>
          </div>

          <div className='signUpContainer'>
            <button type='submit' className='signupSubmit' name='submit'>
              Register
            </button>
          </div>

          <p className='regisrtationStatus'> </p>
        </div>
      </form>
      {/* Signin */}
    </div>
  )
}

export default Signup
