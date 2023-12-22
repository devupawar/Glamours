import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './ReduxWork/UserSlice'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navi = useNavigate()
  const { UserData } = useSelector((state) => state.user)
  const dispatcher = useDispatch()
  console.log(UserData)
  return (

    <div className='Ppanel'>
      <h1 className='phead'>Your Profile</h1>
      <h4 className='pdata'>Customer Name :  {UserData.CustomerName}</h4>
      <h4 className='pdata'>Customer Email : {UserData.CustomerEmail}</h4>
      <h4 className='pdata'>Customer MobileNo : {UserData.CustomerMobile}</h4>
      <h4 className='pdata'>Customer Address : {UserData.CustomerAddress}</h4>
      <h4 className='pdata'>Customer Password : {UserData.CustomerPassword}</h4>
      <Button onClick={() => {
        dispatcher(logout())
        navi('/login')
      }} className='pbt'>Logout</Button>
    </div>
  )
}

export default Profile