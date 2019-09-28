import React from 'react'
import { Link } from '@reach/router'

export const YourPlan = () => {
  return (
    <nav>
      <ul>
        <li style={{display: 'block'}}>
          <Link to='/welcome'>To Welcome</Link>
        </li>
        <li style={{display: 'block'}}>
          <Link to='/your-budget'>To Your Budget</Link>
        </li>
        <li style={{display: 'block'}}>
          {/* <Link to='/your-plan'>To Your Plan</Link> */}
          <span>Your plan</span>
        </li>
        <li style={{display: 'block'}}>
          <Link to='/your-payment'>To Payment</Link>
        </li>
        <li style={{display: 'block'}}>
          <Link to='/authentication'>To Auth</Link>
        </li>
      </ul>
    </nav>
  )
}