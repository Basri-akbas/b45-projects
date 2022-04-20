import React from 'react'

const Jsx = () => {
    const isAdmin=true;


  return (
    <div>
        {isAdmin ? 
      <>
      <h2>Admin Menu</h2>
       <ul>
            <li>Create User</li>
            <li>Update User</li>
            <li>Delete user</li>
        </ul>
        </>
        : 
        <>
        <h2>User Menu</h2>
        <ul>
            <li>Create Rewiew</li>
            <li>Update Rewiew</li>
        </ul>
        </>}
        
        
        
        
    </div>
  )
}

export default Jsx